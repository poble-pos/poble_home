"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

import {
  BASE_FEATURE,
  CHOICE_STEPS,
  EMAIL_RE,
  ENQUIRY_STEPS,
  POSTCODE_RE,
  featureGroups,
  isValidPhone,
  type ChoiceStep,
  type Feature,
  type FieldKey,
  type Timing,
  type VenueCount,
  type VenueType,
  type Reason,
} from "@/data/enquiry-options";
import { useI18n } from "@/i18n/I18nProvider";
import { format, type Messages } from "@/i18n/messages";
import { postJson } from "@/lib/api";
import { SALES_EMAIL } from "@/lib/site";
import type { SubmitStatus } from "@/types/forms";

interface Answers {
  venue?: VenueType;
  reason?: Reason;
  venues?: VenueCount;
  timing?: Timing;
  features: Feature[];
  otherText: string;
  company: string;
  postcode: string;
  name: string;
  email: string;
  phone: string;
}

const INITIAL: Answers = { features: [BASE_FEATURE], otherText: "", company: "", postcode: "", name: "", email: "", phone: "" };

const FIELD_INPUT: Record<FieldKey, { type: string; autoComplete: string; maxLength: number; inputMode?: "numeric" }> = {
  company: { type: "text", autoComplete: "organization", maxLength: 160 },
  postcode: { type: "text", autoComplete: "postal-code", maxLength: 4, inputMode: "numeric" },
  name: { type: "text", autoComplete: "name", maxLength: 160 },
  email: { type: "email", autoComplete: "email", maxLength: 160 },
  phone: { type: "tel", autoComplete: "tel", maxLength: 160 },
};

/** Kept as keys, not text, so a message already shown follows a language change. */
type FormError =
  | { kind: "errors"; key: keyof Messages["enquiry"]["errors"]; field?: FieldKey | "otherText" }
  | { kind: "required"; field: FieldKey };

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="m3 6 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The approved multi-step enquiry form: venue, reason, features, venue count,
 * timing, venue details and contact details, then a review. Answers are kept as
 * canonical ids and posted to /api/inquiry with the original name, mobile, email
 * and shop fields, so the existing emails keep working. Text follows the site
 * language; what the visitor types is sent as typed.
 */
export function EnquiryForm() {
  const { m, locale } = useI18n();
  const t = m.enquiry;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL);
  const [error, setError] = useState<FormError | null>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [detail, setDetail] = useState<Feature | null>(null);
  const question = useRef<HTMLHeadingElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const moved = useRef(false);

  const total = ENQUIRY_STEPS.length;
  const reviewing = index === total;
  const step = ENQUIRY_STEPS[index];
  const percent = Math.round((index / total) * 100);

  // Moving between steps puts focus on the new question, as in the export.
  useEffect(() => {
    if (moved.current) question.current?.focus();
  }, [index, status]);

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (detail && !node.open) node.showModal();
    else if (!detail && node.open) node.close();
  }, [detail]);

  const goTo = (next: number) => {
    moved.current = true;
    setError(null);
    setIndex(next);
  };

  const update = (patch: Partial<Answers>) => {
    setAnswers((prev) => ({ ...prev, ...patch }));
    setError(null);
  };

  const toggleFeature = (id: Feature) => {
    if (id === BASE_FEATURE) return;
    update({
      features: answers.features.includes(id) ? answers.features.filter((x) => x !== id) : [...answers.features, id],
    });
  };

  function validate(): FormError | null {
    if (step.kind === "choice") return answers[step.key] ? null : { kind: "errors", key: "selectOne" };
    if (step.kind === "features") {
      if (!answers.features.length) return { kind: "errors", key: "selectAtLeastOne" };
      if (answers.features.includes("other") && !answers.otherText.trim()) return { kind: "errors", key: "other", field: "otherText" };
      return null;
    }
    for (const field of step.fields) {
      const value = answers[field].trim();
      if (!value) return { kind: "required", field };
      if (field === "postcode" && !POSTCODE_RE.test(value)) return { kind: "errors", key: "postcode", field };
      if (field === "email" && !EMAIL_RE.test(value)) return { kind: "errors", key: "email", field };
      if (field === "phone" && !isValidPhone(value)) return { kind: "errors", key: "phone", field };
    }
    return null;
  }

  const advance = (event?: FormEvent) => {
    event?.preventDefault();
    if (reviewing) return;
    const problem = validate();
    if (problem) {
      setError(problem);
      const field = "field" in problem ? problem.field : undefined;
      if (field) document.getElementById(`enquiry-${field}`)?.focus();
      return;
    }
    goTo(index + 1);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const other = answers.features.includes("other");
    try {
      await postJson("/api/inquiry", {
        name: answers.name.trim(),
        mobile: answers.phone.trim(),
        email: answers.email.trim(),
        shop: answers.company.trim(),
        postcode: answers.postcode.trim(),
        venueType: answers.venue,
        reason: answers.reason,
        features: answers.features,
        otherRequirements: other ? answers.otherText.trim() : undefined,
        venues: answers.venues,
        timing: answers.timing,
        locale,
      });
      moved.current = true;
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const errorText = !error ? "" : error.kind === "required" ? t.fields[error.field].required : t.errors[error.key];
  const invalid = (field: FieldKey | "otherText") => (error && "field" in error && error.field === field ? true : undefined);

  const choiceLabel = (key: ChoiceStep, value: string) => (t.options[key] as Record<string, string>)[value];

  if (status === "done") {
    return (
      <section className="panel" aria-labelledby="question">
        <div className="stage" role="status">
          <h2 id="question" ref={question} tabIndex={-1}>
            {m.inquiry.successTitle}
          </h2>
          <p className="success-body">{m.inquiry.successBody}</p>
          <Link className="btn" href="/">
            {t.back}
          </Link>
        </div>
      </section>
    );
  }

  const reviewRows: { label: string; value: string; key: string }[] = ENQUIRY_STEPS.flatMap((s) => {
    if (s.kind === "choice") {
      const value = answers[s.key];
      return [{ key: s.key, label: t.questions[s.key], value: value ? choiceLabel(s.key, value) : t.empty }];
    }
    if (s.kind === "features") {
      const rows = [{ key: "features", label: t.questions.features, value: answers.features.map((id) => t.features[id]).join(", ") }];
      if (answers.features.includes("other")) rows.push({ key: "otherText", label: t.otherReviewLabel, value: answers.otherText || t.empty });
      return rows;
    }
    return s.fields.map((field) => ({ key: field, label: t.fields[field].label, value: answers[field] || t.empty }));
  });

  const info = detail ? t.details[detail] : null;

  return (
    <>
      {index === 0 ? (
        <div className="intro">
          <h1>
            {t.heading1}
            <br />
            <span>{t.heading2}</span>
          </h1>
          <p>{t.intro}</p>
        </div>
      ) : null}

      <nav className="progress-wrap" aria-label={t.progressLabel}>
        <div className="progress-top">
          <span>{reviewing ? t.reviewStep : format(t.step, { current: index + 1, total })}</span>
          <span>{format(t.percent, { percent })}</span>
        </div>
        <div className="track-row">
          <button type="button" className="arrow" aria-label={t.previous} disabled={index === 0} onClick={() => goTo(index - 1)}>
            <svg aria-hidden="true">
              <use href="#arrow-l" />
            </svg>
          </button>
          <div className="track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} aria-label={t.progressLabel}>
            <div className="fill" style={{ width: `${percent}%` }} />
          </div>
          <button type="button" className="arrow" aria-label={t.next} disabled={reviewing} onClick={() => advance()}>
            <svg aria-hidden="true">
              <use href="#arrow-r" />
            </svg>
          </button>
        </div>
      </nav>

      <section className="panel" aria-labelledby="question">
        {reviewing ? (
          <form className="stage" key="review" onSubmit={submit} noValidate aria-busy={status === "sending"}>
            <h2 id="question" ref={question} tabIndex={-1}>
              {t.reviewHeading}
            </h2>
            <p className="hint">{t.reviewHint}</p>
            <p className="price-note">{t.priceNote}</p>
            <dl className="review">
              {reviewRows.map((row) => (
                <div key={row.key}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            {status === "error" ? (
              <p className="error is-alert" role="alert">
                {m.inquiry.error} <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>.
              </p>
            ) : null}
            <div className="actions">
              <button type="button" className="btn btn-2" onClick={() => goTo(0)} disabled={status === "sending"}>
                <svg aria-hidden="true">
                  <use href="#arrow-l" />
                </svg>
                {t.edit}
              </button>
              <button type="submit" className="btn" disabled={status === "sending"}>
                {status === "sending" ? m.common.sending : m.home.contact.cta}
                {status === "sending" ? null : (
                  <svg aria-hidden="true">
                    <use href="#arrow-r" />
                  </svg>
                )}
              </button>
            </div>
            <p className="consent">{m.inquiry.consent}</p>
          </form>
        ) : (
          <form className="stage" key={index} onSubmit={advance} noValidate>
            <h2 id="question" ref={question} tabIndex={-1}>
              {step.kind === "choice" ? t.questions[step.key] : step.kind === "features" ? t.questions.features : t.questions[step.key]}
            </h2>
            {step.kind === "features" ? <p className="hint">{t.hints.features}</p> : null}
            {step.kind === "fields" && step.key === "contact" ? <p className="hint">{t.hints.contact}</p> : null}

            {step.kind === "choice" ? (
              <div className={`choices${CHOICE_STEPS[step.key].length % 2 ? " odd" : ""}`} role="group" aria-labelledby="question">
                {CHOICE_STEPS[step.key].map((value) => {
                  const selected = answers[step.key] === value;
                  return (
                    <button key={value} type="button" className="choice" aria-pressed={selected} onClick={() => update({ [step.key]: value })}>
                      <span>{choiceLabel(step.key, value)}</span>
                      <span className="check" aria-hidden="true">
                        <CheckIcon />
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : null}

            {step.kind === "features" ? (
              <>
                <div className="feature-groups" role="group" aria-labelledby="question">
                  {featureGroups(answers.venue).map((group) => (
                    <div className="feature-group" key={group.id}>
                      <p className="group-label">{t.groups[group.id]}</p>
                      {group.items.map((id) => {
                        const selected = answers.features.includes(id);
                        const base = id === BASE_FEATURE;
                        return (
                          <div className={`feature-card${selected ? " is-selected" : ""}`} key={id}>
                            <button
                              type="button"
                              className="choice"
                              aria-pressed={selected}
                              aria-disabled={base || undefined}
                              onClick={() => toggleFeature(id)}
                            >
                              <span>
                                {t.features[id]}
                                {base ? <small className="base-tag">{t.defaultTag}</small> : null}
                              </span>
                              <span className="check" aria-hidden="true">
                                <CheckIcon />
                              </span>
                            </button>
                            <button
                              type="button"
                              className="help"
                              aria-label={format(t.about, { name: t.features[id] })}
                              aria-haspopup="dialog"
                              onClick={() => setDetail(id)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M9.4 9.2a2.7 2.7 0 0 1 5.2.9c0 1.8-2.6 2.4-2.6 2.4M12 16.6h.01" />
                              </svg>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
                <p className="price-note">{t.priceNote}</p>
                {answers.features.includes("other") ? (
                  <div className="other-field">
                    <label htmlFor="enquiry-otherText">{t.otherLabel}</label>
                    <textarea
                      id="enquiry-otherText"
                      name="otherText"
                      maxLength={2000}
                      placeholder={t.otherPlaceholder}
                      value={answers.otherText}
                      aria-invalid={invalid("otherText")}
                      aria-describedby="enquiry-error"
                      onChange={(event) => update({ otherText: event.target.value })}
                    />
                  </div>
                ) : null}
              </>
            ) : null}

            {step.kind === "fields"
              ? step.fields.map((field) => (
                  <label className="field" key={field} htmlFor={`enquiry-${field}`}>
                    <span>{t.fields[field].label}</span>
                    <input
                      id={`enquiry-${field}`}
                      name={field}
                      required
                      {...FIELD_INPUT[field]}
                      placeholder={t.fields[field].placeholder}
                      value={answers[field]}
                      aria-invalid={invalid(field)}
                      aria-describedby="enquiry-error"
                      onChange={(event) => update({ [field]: event.target.value })}
                    />
                  </label>
                ))
              : null}

            <p className="error" id="enquiry-error" role="alert">
              {errorText}
            </p>
            <button className="btn continue" type="submit">
              {index === total - 1 ? t.review : t.continue}
              <svg aria-hidden="true">
                <use href="#arrow-r" />
              </svg>
            </button>
          </form>
        )}
      </section>

      <p className="enquiry-foot">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        {t.footnote}
      </p>

      <dialog
        ref={dialog}
        className="feature-dialog"
        aria-labelledby="feature-title"
        onClose={() => setDetail(null)}
        onClick={(event) => {
          // A click on the backdrop lands on the dialog element itself.
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.target === event.currentTarget &&
            (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)
          )
            setDetail(null);
        }}
      >
        {detail && info ? (
          <>
            <button type="button" className="close-dialog" aria-label={t.closeDetails} onClick={() => setDetail(null)}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
            <h2 id="feature-title">{t.features[detail]}</h2>
            {info.title !== t.features[detail] ? <h3>{info.title}</h3> : null}
            <p>{info.body}</p>
            {info.points.length ? (
              <ul>
                {info.points.map((point) => (
                  <li key={point.title}>
                    <strong>{point.title}</strong>
                    <br />
                    {point.body}
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="price-note">{t.priceNote}</p>
          </>
        ) : null}
      </dialog>
    </>
  );
}
