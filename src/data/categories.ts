import type { Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'moda',
    name: 'Moda',
    slug: 'moda',
    headline: 'Styl na kazda okazje',
    description:
      'Zadbaj o garderobe, ktora podkresli Twoja osobowosc. Od eleganckich zestawow po codzienny streetwear.',
    heroImage: '/images/2-moda.jpg',
    ctaLabel: 'Odkryj mode'
  },
  {
    id: 'dom',
    name: 'Dom',
    slug: 'dom',
    headline: 'Przestrzen, ktora inspiruje',
    description:
      'Designerskie dodatki i inteligentne rozwiazania, dzieki ktorym Twoj dom bedzie zawsze lsnil swiezoscia.',
    heroImage: '/images/3-home.jpg',
    ctaLabel: 'Urzadz dom'
  },
  {
    id: 'sport',
    name: 'Sport',
    slug: 'sport',
    headline: 'Codzienna dawka endorfin',
    description:
      'Sprzet i akcesoria, ktore wspieraja aktywny tryb zycia - niezaleznie od tego, jak trenujesz.',
    heroImage: '/images/4-sports.jpg',
    ctaLabel: 'Rozpocznij trening'
  },
  {
    id: 'elektronika',
    name: 'Elektronika',
    slug: 'elektronika',
    headline: 'Technologia na wyciagniecie reki',
    description:
      'Smartfony, laptopy i akcesoria, ktore lacza wydajnosc z estetyka. Z nami zawsze jestes online.',
    heroImage: '/images/1-electronics.jpg',
    ctaLabel: 'Zobacz elektronike'
  },
  {
    id: 'uroda',
    name: 'Uroda',
    slug: 'uroda',
    headline: 'Pielegnacja w rytmie wellness',
    description:
      'Kosmetyki i rytualy, ktore dbaja o Twoja skore, wlosy i samopoczucie kazdego dnia.',
    heroImage: '/images/5-face.jpg',
    ctaLabel: 'Zadbaj o siebie'
  },
  {
    id: 'stylowa-przygoda',
    name: 'Stylowa Przygoda',
    slug: 'stylowa-przygoda',
    headline: 'Stylowe chwile z przyjaciolmi',
    description:
      'Kolekcje przygotowane na wspolne wyjscia - od kameralnych kolacji po weekendowe city breaki.',
    heroImage: '/images/6-friend.jpg',
    ctaLabel: 'Zaplanuj przygode'
  }
];
