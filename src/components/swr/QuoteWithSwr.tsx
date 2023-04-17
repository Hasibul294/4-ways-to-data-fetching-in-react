import React from 'react'
import useSWR from 'swr'

const dataFetcher = async(...args)=>{
    const res = await fetch(...args)
    const data = await res.json()

    return data
}

const QuoteWithSwr = () => {
    const {data, } = useSWR("https://api.quotable.io/random", dataFetcher, {
        suspense: true,
    });
  return (
    <div>
      <h5>Fetching data with SWR</h5>
      <div>{data.content} </div>
    </div>
  );
}

export default QuoteWithSwr
