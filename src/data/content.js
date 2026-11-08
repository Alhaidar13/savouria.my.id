export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const DISHES = [
  {
    id: 'ribeye',
    name: 'Signature Ribeye Steak',
    description: 'Tender, juicy ribeye steak served with our signature house sauce.',
    price: 'Rp 245.000',
    image: '/images/ribeye.webp',
    width: 900,
    height: 675,
    alt: 'Sliced bone-in ribeye steak on a dark plate with a steak knife',
  },
  {
    id: 'pasta',
    name: 'Creamy Truffle Pasta',
    description: 'Silky pasta infused with rich cream and aromatic truffle.',
    price: 'Rp 125.000',
    image: '/images/pasta.webp',
    width: 900,
    height: 709,
    alt: 'Tagliatelle pasta topped with shavings of black truffle on a white plate',
  },
  {
    id: 'burger',
    name: 'Classic Gourmet Burger',
    description:
      'A perfectly grilled beef patty layered with fresh ingredients and our special sauce.',
    price: 'Rp 98.000',
    image: '/images/burger.webp',
    width: 900,
    height: 900,
    alt: 'Gourmet beef burger with melted cheese, lettuce and crispy onions on a sesame bun',
  },
  {
    id: 'chicken',
    name: 'Golden Crispy Chicken',
    description:
      'Golden, crispy chicken with a tender center and carefully selected seasonings.',
    price: 'Rp 85.000',
    image: '/images/chicken.webp',
    width: 900,
    height: 900,
    alt: 'Golden crispy fried chicken drumsticks served with two dipping sauces',
  },
]

export const HIGHLIGHTS = [
  {
    number: '01',
    title: 'Thoughtfully Crafted Cuisine',
    text: 'Every plate is built around honest ingredients and careful technique, from the first prep to the final garnish.',
  },
  {
    number: '02',
    title: 'Warm & Welcoming Atmosphere',
    text: 'Soft lighting, natural textures and attentive service, so you feel at ease from the moment you walk in.',
  },
  {
    number: '03',
    title: 'Memorable Dining Moments',
    text: 'Birthdays, first dates, family catch-ups or a quiet dinner after work. We make room for the moments that matter.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Amanda Putri',
    role: 'Marketing Executive',
    rating: 5,
    review:
      'The truffle pasta is easily the best I have had in the city. The room is warm without being stuffy, and the team remembered our anniversary without being asked.',
  },
  {
    name: 'Rizky Pratama',
    role: 'University Student',
    rating: 5,
    review:
      'Finally a place that feels special but still relaxed. We booked for a friend\'s birthday and the burger and crispy chicken disappeared in minutes.',
  },
  {
    name: 'Clara & Daniel Wijaya',
    role: 'Dinner with the family',
    rating: 5,
    review:
      'We came with our parents and two kids. Everyone found something they loved, and the service was patient and kind. We are already planning our next visit.',
  },
]

export const HOURS = [
  { days: 'Monday – Thursday', time: '11:00 – 22:00' },
  { days: 'Friday – Saturday', time: '11:00 – 23:00' },
  { days: 'Sunday', time: '10:00 – 22:00' },
]

export const CONTACT = {
  address: ['Jl. Jenderal Sudirman No. 88', 'Jakarta Selatan 12190, Indonesia'],
  phone: '+62 21 5555 0188',
  phoneHref: 'tel:+622155550188',
  email: 'hello@savouria.example',
}

export const TIME_SLOTS = (() => {
  const slots = []
  for (let h = 11; h <= 21; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`)
    slots.push(`${String(h).padStart(2, '0')}:30`)
  }
  slots.push('22:00')
  return slots
})()
