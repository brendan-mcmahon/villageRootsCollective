import { quotes } from "./quotes.js";

export default function Quotes() {
  const getRandomElements = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomQuotes = getRandomElements(quotes, 2).map((quote, i) => {
    return (
      <blockquote key={i}>
        <p>{quote.text}</p>
        <cite>{quote.citation}</cite>
      </blockquote>
    );
  });

  return <div className="quotes">{randomQuotes}</div>;
}
