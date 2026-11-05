// Edit everything about the restaurant here. Pages read from this file.
const img = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "Maple & Ember",
  tagline: "Wood-fired kitchen",
  address: "24 Orchard Lane, Agrabad, Chattogram",
  phone: "+880 1000 000000",
  email: "hello@mapleandember.com",
  mapQuery: "Agrabad, Chattogram, Bangladesh", // change to your exact address
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  hours: [
    { day: "Tuesday – Friday", time: "5 pm – 11 pm" },
    { day: "Saturday – Sunday", time: "12 pm – 3 pm, 5 pm – 11 pm" },
    { day: "Monday", time: "Closed" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Reservation", href: "/reservation" },
  { label: "Gift Card", href: "/gift-card" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const images = {
  hero: img("photo-1414235077428-338989a2e8c0", 1920),
  interior: img("photo-1517248135467-4c7edcad34c4"),
  dish: img("photo-1504674900247-0877df9cc836"),
  steak: img("photo-1544025162-d76694265947"),
  dining: img("photo-1555396273-367ea4eb4db5"),
  pizza: img("photo-1565299624946-b28f40a0ae38"),
  plated: img("photo-1476224203421-9ac39bcb3327"),
  bar: img("photo-1559339352-11d035aa65de"),
  table: img("photo-1424847651672-bf20a4b0982b"),
  kitchen: img("photo-1556910103-1c02745aae4d"),
  chef: img("photo-1577219491135-ce391730fb2c"),
  wine: img("photo-1510812431401-41d2bd2722f3"),
  dessert: img("photo-1551024601-bec78aea704b"),
};

export const featured = [
  { name: "Oak-grilled ribeye", desc: "300g, bone-marrow jus, charred greens", price: 42, image: images.steak },
  { name: "Wood-fired prawns", desc: "Garlic butter, chilli, lemon", price: 18, image: images.plated },
  { name: "Burnt honey tart", desc: "Crème fraîche, sea salt", price: 10, image: images.dessert },
];

// tags: V = vegetarian, VG = vegan, GF = gluten free, S = spicy
export const menu = {
  Starters: [
    { name: "Charred burrata", desc: "Smoked tomato, basil oil, grilled sourdough", price: 14, tags: ["V"] },
    { name: "Ember-roasted beets", desc: "Whipped goat cheese, hazelnut, honey", price: 12, tags: ["V", "GF"] },
    { name: "Wood-fired prawns", desc: "Garlic butter, chilli, lemon", price: 18, tags: ["GF", "S"] },
    { name: "Bone marrow toast", desc: "Parsley salad, pickled shallot", price: 16, tags: [] },
    { name: "Smoked aubergine", desc: "Tahini, pomegranate, flatbread", price: 11, tags: ["VG"] },
  ],
  Mains: [
    { name: "Oak-grilled ribeye", desc: "300g, bone-marrow jus, charred greens", price: 42, tags: ["GF"] },
    { name: "Whole roasted sea bream", desc: "Fennel, preserved lemon, salsa verde", price: 34, tags: ["GF"] },
    { name: "Slow lamb shoulder", desc: "Pomegranate, yoghurt, flatbread", price: 36, tags: [] },
    { name: "Wild mushroom risotto", desc: "Aged parmesan, thyme, truffle butter", price: 26, tags: ["V", "GF"] },
    { name: "Charred cauliflower steak", desc: "Romesco, almonds, herbs", price: 22, tags: ["VG", "GF"] },
  ],
  Desserts: [
    { name: "Burnt honey tart", desc: "Crème fraîche, sea salt", price: 10, tags: ["V"] },
    { name: "Dark chocolate pot", desc: "Espresso cream, cocoa nib", price: 11, tags: ["V", "GF"] },
    { name: "Fire-baked apple", desc: "Cinnamon crumble, vanilla ice cream", price: 10, tags: ["V"] },
  ],
  Drinks: [
    { name: "Smoked old fashioned", desc: "Bourbon, maple, orange bitters", price: 15, tags: [] },
    { name: "Ember negroni", desc: "Gin, charred orange, vermouth", price: 14, tags: [] },
    { name: "Fresh lime and mint", desc: "Sparkling water, cane sugar (no alcohol)", price: 6, tags: ["VG"] },
    { name: "House red or white", desc: "By the glass, ask for today's pour", price: 9, tags: [] },
  ],
};

export const tastingMenu = {
  title: "Chef's tasting menu",
  price: 85,
  pairing: 45,
  desc: "Five courses cooked over the fire, served to the whole table. Available Thursday to Sunday evenings, booking required 24 hours ahead.",
};

export const reviews = [
  { quote: "The ribeye alone is worth the trip. Every dish had a smoky depth I haven't found anywhere else in the city.", name: "Nadia Rahman", role: "Anniversary dinner", rating: 5 },
  { quote: "We booked for a family of eight and the team handled everything. Warm room, generous plates, no rush.", name: "Tanvir Ahmed", role: "Family celebration", rating: 5 },
  { quote: "Bought a gift card for my parents. They've been back three times since and keep talking about the burnt honey tart.", name: "Sarah Islam", role: "Gift card customer", rating: 5 },
  { quote: "Great vegetarian options that are not an afterthought. The cauliflower steak surprised everyone at our table.", name: "Rafiq Hasan", role: "Friends' night out", rating: 4 },
  { quote: "Quiet corner tables, attentive service and the best bread I've had. We held our team dinner here.", name: "Maya Chowdhury", role: "Corporate dinner", rating: 5 },
];

export const gallery = [
  { src: images.steak, alt: "Grilled ribeye on a wooden board", category: "Food" },
  { src: images.interior, alt: "Dining room with warm lamps", category: "Interior" },
  { src: images.pizza, alt: "Wood-fired flatbread", category: "Food" },
  { src: images.bar, alt: "Bar with amber lighting", category: "Bar" },
  { src: images.plated, alt: "Seasonal plated dish", category: "Food" },
  { src: images.dining, alt: "Dining room in the evening", category: "Interior" },
  { src: images.wine, alt: "Glasses of wine on the bar", category: "Bar" },
  { src: images.kitchen, alt: "Chefs working in the open kitchen", category: "Kitchen" },
  { src: images.table, alt: "Table set for dinner", category: "Interior" },
  { src: images.dessert, alt: "Dessert plated at the pass", category: "Food" },
  { src: images.dish, alt: "Fresh dish with herbs", category: "Food" },
  { src: images.chef, alt: "Head chef plating a dish", category: "Kitchen" },
];

export const timeline = [
  { year: "2014", title: "One oven, twelve seats", text: "We opened with a short menu and a wood-fired oven built by hand." },
  { year: "2017", title: "Moving to Agrabad", text: "A bigger room, an open kitchen and our first full dinner service." },
  { year: "2020", title: "Local farms first", text: "We moved to buying produce only from farms within an hour of the kitchen." },
  { year: "2024", title: "Ten years of fire", text: "A new bar, a tasting menu and the same oak-fired oven at the centre." },
];

export const team = [
  { name: "Imran Chowdhury", role: "Head chef and founder", image: images.chef },
  { name: "Ayesha Karim", role: "General manager", image: images.interior },
  { name: "Rahim Uddin", role: "Head of bar", image: images.bar },
];

export const values = [
  { title: "Fire as technique", text: "Oak and fruitwood do the work. Everything touches the flame." },
  { title: "Local first", text: "Over 40 farms and fishers supply the kitchen each week." },
  { title: "A generous table", text: "Plates are made to share and no one rushes you out." },
];

export const reservationInfo = [
  { title: "Parties of 10 or more", text: "Call us and we'll arrange a set menu and a private table." },
  { title: "Cancellations", text: "Free up to 24 hours before. Later cancellations may be charged $10 per guest." },
  { title: "Dress code", text: "Smart casual. We want you comfortable." },
  { title: "Children and dietary needs", text: "Children are welcome. Tell us about allergies in the notes and we'll plan around them." },
];

export const faqs = [
  { q: "How long will I keep my table?", a: "Tables are held for 15 minutes past your booking time and dinner seatings run about two hours." },
  { q: "Do you have vegetarian and vegan dishes?", a: "Yes. Look for the V and VG marks on the menu. The kitchen can adapt many dishes." },
  { q: "Is there parking?", a: "There is free street parking on Orchard Lane and a paid lot two minutes away." },
  { q: "Can I book a private event?", a: "Yes. We host groups of 10 to 40 for birthdays and company dinners. Use the contact form or call us." },
];

export const giftSteps = [
  { title: "Pick an amount", text: "Choose from $50 to $250 or enter your own." },
  { title: "Add a recipient", text: "Enter their name and email, and write a short message." },
  { title: "We send it", text: "The gift card arrives by email straight away with a code to use at the table." },
];

export const giftTerms = [
  "Valid for 12 months from the date of purchase.",
  "Can be used for food and drinks, in one visit or several.",
  "Not exchangeable for cash. Lost cards can be reissued with the original email.",
];
