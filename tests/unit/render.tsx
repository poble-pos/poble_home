import { render } from "@testing-library/react";
import type { ReactElement } from "react";

import type { Locale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";

/** Renders UI the way the root layout does: language provider included. */
export function renderWithLocale(ui: ReactElement, locale: Locale = "en") {
  return render(
    <I18nProvider initialLocale={locale}>
      {ui}
    </I18nProvider>,
  );
}
