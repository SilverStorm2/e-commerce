export type DiscountType = 'percentage' | 'fixed';

export type Discount = {
  code: string;
  label: string;
  description: string;
  type: DiscountType;
  value: number;
  maxRedemption?: number;
  active: boolean;
  expiresAt?: string;
  uses: number;
};

export const defaultDiscounts: Discount[] = [
  {
    code: 'WITAJ10',
    label: 'Powitanie -10%',
    description: 'Znizka na pierwsze zakupy dla nowych klientow.',
    type: 'percentage',
    value: 10,
    maxRedemption: 1,
    active: true,
    uses: 12,
    expiresAt: undefined
  },
  {
    code: 'FREESHIP',
    label: 'Darmowa dostawa',
    description: 'Wysylka na terenie Polski gratis przy zamowieniu powyzej 200 zl.',
    type: 'fixed',
    value: 25,
    maxRedemption: undefined,
    active: true,
    uses: 48,
    expiresAt: undefined
  },
  {
    code: 'VIP25',
    label: 'VIP -25%',
    description: 'Ekskluzyjny kod dla stalych klientow. Obejmuje kategorie Moda i Uroda.',
    type: 'percentage',
    value: 25,
    maxRedemption: 5,
    active: false,
    uses: 5,
    expiresAt: '2025-12-31'
  }
];
