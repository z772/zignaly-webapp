import fetch from "cross-fetch";
import {
  userCreateResponseTransform,
  userEntityResponseTransform,
  userPositionsResponseTransform,
  providersResponseTransform,
} from "./tradeApiClient.types";

/**
 * Trade API client service, provides integration to API endpoints.
 *
 * @constructor
 * @public
 * @class TradeApiClient
 */
class TradeApiClient {
  /**
   * Creates an instance of TradeApiClient.
   * @memberof TradeApiClient
   */
  constructor() {
    this.baseUrl = process.env.GATSBY_TRADEAPI_URL;
  }

  /**
   * Process API HTTP request.
   *
   * @param {string} endpointPath API endpoint path and action.
   * @param {Object} payload Request payload parameters object.
   * @returns {Promise<*>} Promise that resolves Trade API request response.
   *
   * @memberof TradeApiClient
   */
  async doRequest(endpointPath, payload) {
    let responseData = {};
    const requestUrl = this.baseUrl + endpointPath;
    const options = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(requestUrl, options);
      if (response.status === 200) {
        responseData = await response.json();
      }

      responseData.error = await response.text();
    } catch (e) {
      responseData.error = e.message;
    }

    if (responseData.error) {
      const customError = new Error(`API ${requestUrl} request failed:` + responseData.error);

      throw customError;
    }

    return responseData;
  }

  /**
   * @typedef {import('./tradeApiClient.types').UserLoginPayload} UserLoginPayload
   * @typedef {import('./tradeApiClient.types').UserLoginResponse} UserLoginResponse
   */

  /**
   * Login a user in Trade API.
   *
   * @param {UserLoginPayload} payload User login payload
   *
   * @returns {Promise<UserLoginResponse>} Promise that resolves user login response
   *
   * @memberof TradeApiClient
   */
  async userLogin(payload) {
    const endpointPath = "/fe/api.php?action=login";
    const responseData = await this.doRequest(endpointPath, payload);

    return userEntityResponseTransform(responseData);
  }

  userLogout() {}

  /**
   * @typedef {import('./tradeApiClient.types').UserCreatePayload} UserCreatePayload
   * @typedef {import('./tradeApiClient.types').UserCreateResponse} UserCreateResponse
   */

  /**
   * Create user at Zignaly Trade API.
   *
   * @param {UserCreatePayload} payload User create payload.
   *
   * @returns {Promise<UserCreateResponse>} Promise that resolves user create response.
   *
   * @memberof TradeApiClient
   */
  async userCreate(payload) {
    const endpointPath = "fe/api.php?action=signup";
    const responseData = await this.doRequest(endpointPath, payload);

    return userCreateResponseTransform(responseData);
  }

  /**
   * @typedef {import('./tradeApiClient.types').UserPositionsPayload} UserPositionsPayload
   * @typedef {import('./tradeApiClient.types').UserPositionsCollection} UserPositionsCollection
   */

  /**
   * Get user open trading positions.
   *
   * @param {UserPositionsPayload} payload Get user positions payload.

   * @returns {Promise<UserPositionsCollection>} Promise that resolve user positions collection.
   *
   * @memberof TradeApiClient
   */
  async openPositionsGet(payload) {
    const endpointPath = "/fe/api.php?action=getOpenPositions";
    const responseData = await this.doRequest(endpointPath, payload);

    return userPositionsResponseTransform(responseData);
  }

  /**
   * @typedef {import('./tradeApiClient.types').ProvidersPayload} ProvidersPayload
   * @typedef {import('./tradeApiClient.types').ProvidersCollection} ProvidersCollection
   */

  /**
   * Get providers list.
   *
   * @param {ProvidersPayload} payload Get providers payload.

   * @returns {Promise<ProvidersCollection>} Promise that resolves providers collection.
   *
   * @memberof TradeApiClient
   */
  async providersGet(payload) {
    const endpointPath = "/fe/api.php?action=getProviderList2";
    const responseData = await this.doRequest(endpointPath, payload);

    return providersResponseTransform(responseData);
  }
}

// JS export by default guarantee a singleton instance if we export the class
// instance, see:
// https://medium.com/@lazlojuly/are-node-js-modules-singletons-764ae97519af
const client = new TradeApiClient();
Object.freeze(client);

export default client;
