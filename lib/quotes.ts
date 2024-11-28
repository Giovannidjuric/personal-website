const QUOTES: { id: number; writer: string; quote: string }[] = [
  {
    writer: "Carl Gustav Jung",
    quote:
      "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
  },
  {
    writer: "Socrates",
    quote: "The only true wisdom is in knowing you know nothing.",
  },
  {
    writer: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    writer: "Buddha",
    quote: "The mind is everything. What you think you become.",
  },
  {
    writer: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    writer: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    writer: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    writer: "Martin Luther King Jr.",
    quote: "The time is always right to do what is right.",
  },
  {
    writer: "Mother Teresa",
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
  {
    writer: "Lao Tzu",
    quote: "The journey of a thousand miles begins with one step.",
  },
].map((item, idx) => ({ ...item, id: idx + 1 }));

export default QUOTES;
