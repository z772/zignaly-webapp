import { useState, useEffect } from "react";
import useStoreSessionSelector from "./useStoreSessionSelector";
import tradeApi from "../services/tradeApiClient";
import { useDispatch } from "react-redux";
import { showErrorAlert } from "../store/actions/ui";

/**
 * @typedef {import("../services/tradeApiClient.types").ExchangeListEntity} ExchangeListEntity
 */

/**
 * Provides exchange list.
 * @param {boolean} [shouldExecute] Flag to indicate if we should execute the request.
 * @returns {Array<ExchangeListEntity>} Exchange list.
 */
const useExchangeList = (shouldExecute = true) => {
  const [exchanges, setExchanges] = useState([]);

  const storeSession = useStoreSessionSelector();
  const dispatch = useDispatch();

  const loadData = () => {
    if (shouldExecute) {
      const payload = {
        token: storeSession.tradeApi.accessToken,
      };

      tradeApi
        .exchangeListGet(payload)
        .then((data) => {
          setExchanges(data);
        })
        .catch((e) => {
          dispatch(showErrorAlert(e));
        });
    }
  };

  useEffect(loadData, [storeSession.tradeApi.accessToken, shouldExecute]);

  return exchanges;
};

export default useExchangeList;
