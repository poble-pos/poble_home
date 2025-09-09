interface DefaultPrice {
  id: string;
  object: string;
  active: boolean;
  billingScheme: string;
  created: string;
  currency: string;
  currencyOptions: null;
  customUnitAmount: null;
  deleted: null;
  livemode: boolean;
  lookupKey: null;
  metadata: Record<string, unknown>;
  nickname: null;
  productId: string;
  product?: StripeProduct;
  recurring: {
    aggregateUsage: null;
    interval: string;
    intervalCount: number;
    trialPeriodDays: null;
    usageType: string;
    rawjObject: {
      aggregate_usage: any[];
      interval: any[];
      interval_count: any[];
      meter: any[];
      trial_period_days: any[];
      usage_type: any[];
    };
    stripeResponse: null;
  };
  taxBehavior: string;
  tiers: null;
  tiersMode: null;
  transformQuantity: null;
  type: string;
  unitAmount: number;
  unitAmountDecimal: number;
  rawjObject: {
    id: any[];
    object: any[];
    active: any[];
    billing_scheme: any[];
    created: any[];
    currency: any[];
    custom_unit_amount: any[];
    livemode: any[];
    lookup_key: any[];
    metadata: any[];
    nickname: any[];
    product: any[];
    recurring: any[][][];
    tax_behavior: any[];
    tiers_mode: any[];
    transform_quantity: any[];
    type: any[];
    unit_amount: any[];
    unit_amount_decimal: any[];
  };
  stripeResponse: null;
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
  deactivateOn: string | null;
  defaultPriceId: string;
  defaultPrice: DefaultPrice;
  deleted: boolean | null;
  description: string;
  images: string[];
  livemode: boolean;
  metadata: StripeMetaData;
  name: string;
  packageDimensions: any | null;
  shippable: boolean | null;
  statementDescriptor: string | null;
  taxCodeId: string | null;
  taxCode: string | null;
  type: string;
  unitLabel: string | null;
  updated: string;
  url: string | null;
  rawjObject: RawjObject;
  stripeResponse: any | null;
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
