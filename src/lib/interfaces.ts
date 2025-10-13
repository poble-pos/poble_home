interface DefaultPrice {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: string;
  currency: string;
  currency_options: null;
  custom_unit_amount: null;
  deleted: null;
  livemode: boolean;
  lookupKey: null;
  metadata: Record<string, unknown>;
  nickname: null;
  productId: string;
  product?: StripeProduct;
  tax_behavior: string;
  tiers: null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: number;
}

interface RawjObject {
  id: any[];
  object: any[];
  active: any[];
  attributes: any[];
  created: any[];
  default_price: any[];
  description: any[];
  features: any[];
  images: any[];
  livemode: any[];
  marketing_features: any[];
  metadata: any[];
  name: any[];
  package_dimensions: any[];
  shippable: any[];
  statement_descriptor: any[];
  tax_code: any[];
  type: any[];
  unit_label: any[];
  updated: any[];
  url: any[];
}

export interface StripeProduct {
  id: string;
  object: string;
  active: boolean;
  attributes: any[];
  caption: string | null;
  created: string;
  default_price: DefaultPrice;
  deleted: boolean | null;
  description: string;
  images: string[];
  livemode: boolean;
  metadata: StripeMetaData;
  name: string;
  package_dimensions: any | null;
  shippable: boolean | null;
  statement_descriptor: string | null;
  tax_code: string | null;
  type: string;
  unit_label: string | null;
  updated: string;
  url: string | null;
}

export interface StripeProductWithQuantity extends StripeProduct {
  quantity: number;
}

export interface StripeMetaData {
  isMultiple?: string;
  isOneOff?: string;
}

export interface StripeOneOffCartItem {
  stripePriceId: string;
  stripeProductId: string;
  quantity: number;
}
