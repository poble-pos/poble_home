/**
 * @file ContactSection.tsx
 * @description Lead generation and consultation entry point.
 * Features a high-fidelity validation engine for Australian business data.
 */

"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

import { useAdmin } from "@/context/AdminContext";

interface ValidationRule {
  required: boolean;
  min?: number;
  pattern?: RegExp;
  message: string;
}

const VALIDATION_RULES: Record<string, ValidationRule> = {
  firstName: {
    required: true,
    min: 2,
    pattern: /^[A-Za-z\s'-]+$/,
    message: "Min 2 chars, no numbers",
  },
  lastName: {
    required: true,
    min: 2,
    pattern: /^[A-Za-z\s'-]+$/,
    message: "Min 2 chars, no numbers",
  },
  email: {
    required: true,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Enter a valid email",
  },
  phone: {
    required: true,
    pattern: /^\d{8,10}$/,
    message: "8-10 digits required",
  },
  businessName: { required: true, min: 2, message: "Min 2 chars" },
  postalCode: {
    required: true,
    pattern: /^\d{4}$/,
    message: "Exactly 4 digits",
  },
  businessType: { required: true, message: "Select a type" },
  annualRevenue: { required: true, message: "Select revenue" },
};

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  touched: boolean;
  error: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  const isFieldRequired = VALIDATION_RULES[name]?.required || required;
  const hasError = touched && (error || (isFieldRequired && !value?.trim()));

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <label
          className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${hasError ? "text-rose-500" : "text-slate-500"}`}
        >
          {label}
          {isFieldRequired && "*"}
        </label>
        {touched && error && error !== "Required" && (
          <span className="text-[9px] font-black text-rose-500 uppercase tracking-wider animate-in fade-in duration-300">
            {error}
          </span>
        )}
      </div>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full bg-white border px-4 py-3 text-poble-charcoal placeholder:text-slate-300 focus:outline-none focus:ring-1 transition-all font-bold text-sm font-mono ${hasError ? "border-rose-300 focus:ring-rose-300" : "border-slate-200 focus:ring-teal-400 focus:border-teal-400"}`}
      />
    </div>
  );
};

export const ContactSection: React.FC = () => {
  const { siteContent } = useAdmin();
  const config =
    siteContent.sections.find((s) => s.id === "contact")?.content || {};

  const title = config.title || "Talk to a POS Specialist";
  const description =
    config.description ||
    "Find the perfect setup and pricing for your venue. Our experts will guide you through the transition.";
  const email = config.email || "hello@poble.com.au";
  const phone = config.phone || "1300 966 963";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    postalCode: "",
    businessType: "",
    annualRevenue: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const limited = digits.slice(0, 10);
    if (limited.length <= 4) return limited;
    if (limited.length <= 7)
      return `${limited.slice(0, 4)} ${limited.slice(4)}`;
    return `${limited.slice(0, 4)} ${limited.slice(4, 7)} ${limited.slice(7)}`;
  };

  const validateField = (name: string, value: string) => {
    const rule = VALIDATION_RULES[name as keyof typeof VALIDATION_RULES];
    if (!rule) return "";
    if (rule.required && !value.trim()) return "";
    if (rule.min && value.trim().length < rule.min) return rule.message;
    if (
      rule.pattern &&
      !rule.pattern.test(name === "phone" ? value.replace(/\D/g, "") : value)
    )
      return rule.message;
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
    } else if (name === "postalCode") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    } else if (name === "firstName" || name === "lastName") {
      formattedValue = value.replace(/[^A-Za-z\s'-]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, formattedValue),
      }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, formData[name as keyof typeof formData]),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {},
    );
    setTouched(allTouched);

    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (
        error ||
        (VALIDATION_RULES[key]?.required &&
          !formData[key as keyof typeof formData].trim())
      ) {
        newErrors[key] = error || "Required";
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    if (!hasErrors) {
      // Production: Connect to your CRM or email service API endpoint
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      alert("Thank you! We will contact you soon.");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-24 bg-white relative overflow-hidden"
    >
      {/* Line grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
          backgroundSize: "400px 400px",
        }}
      />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Left panel — light terminal info */}
          <div
            className="animate-in fade-in slide-in-from-left-4 duration-700 lg:sticky lg:top-40 order-2 lg:order-2"
            style={{ fontFamily: "monospace" }}
          >
            <p className="text-teal-600 text-xs font-black uppercase tracking-[0.3em] mb-6">
              <span className="text-slate-400">venue@poble:~$</span> connect
              --expert
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-[1.1] text-poble-charcoal font-heading">
              {title.includes("Expert") ? (
                <>
                  {title.split("Expert")[0]}
                  <span className="text-slate-400">Expert</span>
                  {title.split("Expert")[1]}
                </>
              ) : (
                title
              )}
            </h2>
            <div className="w-12 h-1 bg-teal-400/60 mb-10"></div>
            <p className="text-base text-slate-500 font-bold mb-12 max-w-md leading-relaxed tracking-tight">
              {description}
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group cursor-pointer w-fit"
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-teal-400 transition-all duration-300">
                  <Phone className="w-4 h-4 text-teal-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                    // contact sales
                  </span>
                  <span className="text-lg font-black text-poble-charcoal group-hover:text-teal-600 transition-colors">
                    {phone}
                  </span>
                </div>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 group cursor-pointer w-fit"
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-teal-400 transition-all duration-300">
                  <Mail className="w-4 h-4 text-teal-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                    // email enquiry
                  </span>
                  <span className="text-lg font-black text-poble-charcoal group-hover:text-teal-600 transition-colors lowercase">
                    {email}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right panel — light terminal window */}
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-200 order-1 lg:order-1">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
              {/* Title bar */}
              <div className="bg-slate-100 px-5 py-3 flex items-center gap-2 border-b border-slate-200">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 text-[11px] text-slate-400 tracking-widest uppercase font-mono">
                  poble — enquiry.sh
                </span>
              </div>
              {/* Form body */}
              <div
                className="bg-white px-8 py-10"
                style={{ fontFamily: "monospace" }}
              >
                <p className="text-teal-600 text-xs mb-6 font-mono">
                  <span className="text-slate-400">venue@poble:~$</span>{" "}
                  <span className="text-slate-500">./submit-enquiry.sh</span>
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="First Name"
                      name="firstName"
                      placeholder="Given name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("firstName")}
                      touched={touched.firstName || false}
                      error={errors.firstName || ""}
                    />
                    <InputField
                      label="Last Name"
                      name="lastName"
                      placeholder="Surname"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("lastName")}
                      touched={touched.lastName || false}
                      error={errors.lastName || ""}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="name@venue.com.au"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      touched={touched.email || false}
                      error={errors.email || ""}
                    />
                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="0400 000 000"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur("phone")}
                      touched={touched.phone || false}
                      error={errors.phone || ""}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="Business Name"
                      name="businessName"
                      placeholder="Venue Name"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("businessName")}
                      touched={touched.businessName || false}
                      error={errors.businessName || ""}
                    />
                    <InputField
                      label="Postal Code"
                      name="postalCode"
                      placeholder="2000"
                      required
                      value={formData.postalCode}
                      onChange={handleChange}
                      onBlur={() => handleBlur("postalCode")}
                      touched={touched.postalCode || false}
                      error={errors.postalCode || ""}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${touched.businessType && (errors.businessType || !formData.businessType.trim()) ? "text-rose-500" : "text-slate-500"}`}
                      >
                        Business Type*
                      </label>
                      <div className="relative">
                        <select
                          name="businessType"
                          title="Business Type"
                          value={formData.businessType}
                          onChange={handleChange}
                          onBlur={() => handleBlur("businessType")}
                          className={`w-full bg-white border px-4 py-3 text-poble-charcoal focus:outline-none focus:ring-1 transition-all font-bold text-sm appearance-none font-mono ${touched.businessType && errors.businessType ? "border-rose-300 focus:ring-rose-300" : "border-slate-200 focus:ring-teal-400 focus:border-teal-400"}`}
                        >
                          <option value="">Select Type</option>
                          <option value="cafe_bakery">Cafe / Bakery</option>
                          <option value="takeaway_fastfood">
                            Takeaway / Fast Food
                          </option>
                          <option value="restaurant">Restaurant</option>
                          <option value="retail_other">Retail / Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${touched.annualRevenue && (errors.annualRevenue || !formData.annualRevenue.trim()) ? "text-rose-500" : "text-slate-500"}`}
                      >
                        Annual Revenue*
                      </label>
                      <div className="relative">
                        <select
                          name="annualRevenue"
                          title="Annual Revenue"
                          value={formData.annualRevenue}
                          onChange={handleChange}
                          onBlur={() => handleBlur("annualRevenue")}
                          className={`w-full bg-white border px-4 py-3 text-poble-charcoal focus:outline-none focus:ring-1 transition-all font-bold text-sm appearance-none font-mono ${touched.annualRevenue && errors.annualRevenue ? "border-rose-300 focus:ring-rose-300" : "border-slate-200 focus:ring-teal-400 focus:border-teal-400"}`}
                        >
                          <option value="">Select Revenue</option>
                          <option value="new_business">
                            New Business (Pre-revenue)
                          </option>
                          <option value="lt_200k">Less than $200k</option>
                          <option value="200k_500k">$200k - $500k</option>
                          <option value="500k_1m">$500k - $1M</option>
                          <option value="gt_1m">$1M+</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-2">
                    <p className="text-[10px] font-bold text-slate-400 leading-relaxed text-center">
                      By submitting, you agree to receive helpful updates from{" "}
                      <span className="font-logo">poble</span>. Unsubscribe
                      anytime.
                    </p>
                    <button
                      type="submit"
                      className="bg-poble-charcoal text-white w-full py-4 font-black text-sm tracking-widest uppercase hover:bg-teal-600 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-4 group"
                    >
                      Send Enquiry
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
