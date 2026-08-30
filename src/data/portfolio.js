export const siteContact = {
  email: 'architchitre@gmail.com',
  phone: '+91 75069 60902',
  phoneHref: 'tel:+917506960902',
};

export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Career', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  kicker: {
    role: 'Software Engineer',
    location: 'Mumbai, India',
  },
  titleLines: ['ARCHIT', 'CHITRE'],
  portraitAlt: 'Archit Chitre',
  portraitCaption: 'ARCHIT CHITRE',
  year: '2026',
  index: '01'
};

export const aboutContent = {
  section: { index: '01', label: 'About' },
  eyebrow: 'A few words',
  titleLines: ['Code with', 'conviction.'],
  lead: "I build digital products focusing on user experience and scalability.",
  body: [
	"From static web pages to deploying containerized microservices and building event-driven architectures, I've come a long way. These days I spend time with my dear friends Claude and ChatGPT.",
	"When I'm not in front of my laptop, I'm either camped up in a cute cafe in Bandra, or halfway across the world because I like collecting stamps on my passport."
  ]
};

export const experienceStartYear = 2021;

export const metrics = [
  { value: String(new Date().getFullYear() - experienceStartYear), suffix: '+', lines: ['Years shaping', 'digital products'] },
  { value: '50', suffix: '+', lines: ['Production-grade', 'projects delivered'] },
  { value: '∞', suffix: '', lines: ['Curiosity for the', 'next problem'] },
];

export const focusContent = {
  section: { index: '02', label: 'Focus' },
  eyebrow: 'What I bring',
  titleLines: ['From complex', 'to considered.'],
};

export const capabilities = [
  {
    number: '01',
    title: 'Product engineering',
    description: 'Thoughtful, resilient digital products from the first interaction through to scale.',
  },
  {
    number: '02',
    title: 'Full-stack systems',
    description: 'Reliable services, considered interfaces, and an API layer that brings them together.',
  },
  {
    number: '03',
    title: 'Experience design',
    description: 'A sharp eye for the small moments that make complex tools feel remarkably clear.',
  },
];

export const toolkitContent = {
  section: { index: '03', label: 'Toolkit' },
  title: 'The moving parts',
  description: ['Selected tools that help ship work', 'with quality and momentum.'],
};

export const experienceContent = {
  section: { index: '04', label: 'Career' },
  headingId: 'experience-title',
  eyebrow: 'The journey so far',
  titleLines: ['Work with', 'real impact.'],
};

export const experience = [
  { period: 'DEC 2024 — NOW', company: 'Morningstar', role: 'Software Engineer' },
  { period: 'MAY 2023 — NOV 2024', company: 'Sciative Solutions', role: 'Jr. Software Developer' },
  { period: 'JUN 2021 — MAY 2023', company: 'Qwings', role: 'Web Developer' },
];

export const testimonialContent = {
  title: 'In their',
  accentTitle: 'words',
};

export const footerContent = {
  titleLines: ["Let's make it", 'matter.'],
  backToTopLabel: 'Back to top ↑',
};
