import React, { useEffect, useState } from 'react'

const QuoteWithFetch = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();

      setQuote(data);
    };

    fetchQuote();
  }, []);
  return (
    <div>
      <h5>Fetching data with Fetch method</h5>
      <div>{quote?.content}</div>
    </div>
  );
};

export default QuoteWithFetch;
