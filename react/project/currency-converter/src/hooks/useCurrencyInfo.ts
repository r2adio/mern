// implementing custom hooks
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  //calls api only when `useCurrencyInfo` is called -> useEffect
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency, data, url]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
