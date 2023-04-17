import React, { useEffect, useState } from "react";
import axios from "axios";

const QuoteWithAxios = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get("https://api.quotable.io/random");

      setQuote(res.data);
    };

    fetchQuote();
  }, []);
  return (
    <div>
        <h5>Fetching data with axios</h5>
      <div>{quote?.content}</div>
    </div>
  );
};

export default QuoteWithAxios;
