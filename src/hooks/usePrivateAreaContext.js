import { useState } from "react";

/**
 * @typedef {import("../context/PrivateAreaContext").PrivateAreaContextObject} PrivateAreaContextObject
 */

/**
 * Handle un-persisted state management for the different parts of app using React context.
 *
 * @returns {PrivateAreaContextObject} App context object.
 */
const usePrivateAreaContext = () => {
  const [providerCount, setProviderCount] = useState(0);
  const [quotesMap, setQuotesMapData] = useState({});
  const [exchangeList, setExchangeList] = useState([]);

  return {
    providerCount,
    setProviderCount,
    quotesMap,
    setQuotesMapData,
    exchangeList,
    setExchangeList,
  };
};

export default usePrivateAreaContext;
