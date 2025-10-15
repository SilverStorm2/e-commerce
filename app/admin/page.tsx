'use client';

import { useEffect, useState } from 'react';

type Discount = {
  code: string;
  label: string;
  description: string;
  type: 'percentage' | 'fixed';
  value: number;
  maxRedemption?: number;
  active: boolean;
  uses: number;
  expiresAt?: string;
};

type Order = {
  id: string;
  customer: string;
  status: string;
  total: number;
  createdAt: string;
  items: number;
};

type Analytics = {
  pageViews: number;
  conversionRate: number;
  avgOrderValue: number;
  bounceRate: number;
  topCategories: { name: string; value: number }[];
  trafficSources: { name: string; value: number }[];
};

const initialDiscount: Discount = {
  code: '',
  label: '',
  description: '',
  type: 'percentage',
  value: 10,
  active: true,
  uses: 0,
  maxRedemption: undefined,
  expiresAt: undefined
};

export default function AdminPage() {
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [form, setForm] = useState<Discount>(initialDiscount);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const [discountRes, orderRes, analyticsRes] = await Promise.all([
        fetch('/api/discounts'),
        fetch('/api/orders'),
        fetch('/api/analytics')
      ]);

      if (discountRes.ok) {
        setDiscounts(await discountRes.json());
      }
      if (orderRes.ok) {
        setOrders(await orderRes.json());
      }
      if (analyticsRes.ok) {
        setAnalytics(await analyticsRes.json());
      }
    }

    fetchData().catch((fetchError) => {
      setError('Nie udalo sie pobrac danych administracyjnych.');
      console.error(fetchError);
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/discounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Nie udalo sie zapisac rabatu.');
      }

      const data = (await response.json()) as Discount[];
      setDiscounts(data);
      setForm(initialDiscount);
    } catch (submitError) {
      console.error(submitError);
      setError(
        submitError instanceof Error ? submitError.message : 'Wystapil nieznany blad serwera.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleActive = async (discount: Discount) => {
    await fetch(`/api/discounts/${discount.code}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: !discount.active })
    });

    setDiscounts((current) =>
      current.map((item) =>
        item.code === discount.code ? { ...item, active: !item.active } : item
      )
    );
  };

  const deleteDiscount = async (code: string) => {
    await fetch(`/api/discounts/${code}`, { method: 'DELETE' });
    setDiscounts((current) => current.filter((item) => item.code !== code));
  };

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Panel administracyjny
          </p>
          <h1 className="text-4xl font-bold text-slate-900">Modern Style Ops Center</h1>
          <p className="max-w-2xl text-base text-slate-600">
            Zarzadzaj kodami rabatowymi, monitoruj zamowienia oraz analizuj skutecznosc kampanii
            marketingowych. Wszystkie dane sa zapisywane w lekkiej bazie JSON i gotowe do podpiecia
            zewnetrznego backendu (np. Supabase lub strapi).
          </p>
        </header>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Metryki w pigulce</h2>
            <p className="mt-2 text-sm text-slate-500">
              Aktualizowane na podstawie danych sprzedazowych. Liczby mozna zasilic z Supabase albo
              narzedzi analitycznych w kolejnych wdrozeniach.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-slate-500">Odwiedziny</dt>
                <dd className="text-2xl font-bold text-slate-900">
                  {analytics ? analytics.pageViews.toLocaleString('pl-PL') : '-'}
                </dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-slate-500">Konwersja</dt>
                <dd className="text-2xl font-bold text-slate-900">
                  {analytics ? `${analytics.conversionRate}%` : '-'}
                </dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-slate-500">Sr. koszyk</dt>
                <dd className="text-2xl font-bold text-slate-900">
                  {analytics ? `${analytics.avgOrderValue.toFixed(2)} zl` : '-'}
                </dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-slate-500">Bounce rate</dt>
                <dd className="text-2xl font-bold text-slate-900">
                  {analytics ? `${analytics.bounceRate}%` : '-'}
                </dd>
              </div>
            </dl>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Szybkie dodawanie kodu</h2>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-slate-600">
                  Kod rabatowy
                  <input
                    required
                    value={form.code}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, code: event.target.value.toUpperCase() }))
                    }
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                    placeholder="SUMMER25"
                  />
                </label>
                <label className="text-sm font-medium text-slate-600">
                  Nazwa
                  <input
                    required
                    value={form.label}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, label: event.target.value }))
                    }
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                    placeholder="Letnia wyprzedaz"
                  />
                </label>
              </div>
              <label className="text-sm font-medium text-slate-600">
                Opis
                <textarea
                  required
                  rows={3}
                  value={form.description}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, description: event.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Znizka na sezonowe stylizacje Modern Style."
                />
              </label>
              <div className="grid gap-4 md:grid-cols-3">
                <label className="text-sm font-medium text-slate-600">
                  Typ
                  <select
                    value={form.type}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        type: event.target.value as Discount['type']
                      }))
                    }
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                  >
                    <option value="percentage">Procentowy</option>
                    <option value="fixed">Kwotowy</option>
                  </select>
                </label>
                <label className="text-sm font-medium text-slate-600">
                  Wartosc
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={form.value}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        value: Number.parseInt(event.target.value, 10) || 0
                      }))
                    }
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                </label>
                <label className="text-sm font-medium text-slate-600">
                  Limit uzyc
                  <input
                    type="number"
                    min={1}
                    value={form.maxRedemption ?? ''}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        maxRedemption: event.target.value
                          ? Number.parseInt(event.target.value, 10)
                          : undefined
                      }))
                    }
                    className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                    placeholder="Bez limitu"
                  />
                </label>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <input
                    type="checkbox"
                    checked={form.active}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, active: event.target.checked }))
                    }
                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  Aktywny
                </label>
                <label className="text-sm font-medium text-slate-600">
                  Data wygasniecia
                  <input
                    type="date"
                    value={form.expiresAt ?? ''}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        expiresAt: event.target.value || undefined
                      }))
                    }
                    className="ml-3 rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isSubmitting ? 'Zapisywanie...' : 'Zapisz kod'}
              </button>
            </form>
          </article>
        </section>

        <section className="mt-10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Aktywne kody rabatowe</h2>
            <p className="text-sm text-slate-500">
              Zarzadzaj kodami i natychmiast udostepniaj je zespolowi marketingu.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-3">Kod</th>
                  <th className="px-6 py-3">Nazwa</th>
                  <th className="px-6 py-3">Typ</th>
                  <th className="px-6 py-3">Wartosc</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Akcje</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {discounts.map((discount) => (
                  <tr key={discount.code} className="text-slate-700">
                    <td className="px-6 py-4 font-semibold">{discount.code}</td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">{discount.label}</p>
                      <p className="text-xs text-slate-500">{discount.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      {discount.type === 'percentage' ? 'Procentowy' : 'Kwotowy'}
                    </td>
                    <td className="px-6 py-4">
                      {discount.type === 'percentage'
                        ? `${discount.value}%`
                        : `${discount.value.toFixed(2)} zl`}
                    </td>
                    <td className="px-6 py-4">
                      {discount.active ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          Aktywny
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          Wstrzymany
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => toggleActive(discount)}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
                        >
                          {discount.active ? 'Dezaktywuj' : 'Aktywuj'}
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteDiscount(discount.code)}
                          className="rounded-full border border-red-200 px-3 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                        >
                          Usun
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {discounts.length === 0 ? (
                  <tr>
                    <td
                      className="px-6 py-8 text-center text-sm text-slate-500"
                      colSpan={6}
                    >
                      Brak kodow rabatowych. Dodaj pierwszy kod, aby uruchomic kampanie.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Ostatnie zamowienia</h2>
            <p className="text-sm text-slate-500">
              Dane mozna zsynchronizowac z rzeczywista baza danych po podlaczeniu backendu.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-3">ID zamowienia</th>
                  <th className="px-6 py-3">Klient</th>
                  <th className="px-6 py-3">Data</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Kwota</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orders.map((order) => (
                  <tr key={order.id} className="text-slate-700">
                    <td className="px-6 py-4 font-semibold">{order.id}</td>
                    <td className="px-6 py-4">{order.customer}</td>
                    <td className="px-6 py-4">{order.createdAt}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold">
                      {order.total.toFixed(2)} zl
                    </td>
                  </tr>
                ))}
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-sm text-slate-500">
                      Brak zamowien do wyswietlenia.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
