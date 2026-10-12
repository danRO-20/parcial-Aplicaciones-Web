import axios from "axios";

const platformApi = import.meta.env.VITE_GEOMINE_API_URL;

/**
 * Shared infrastructure base class that configures the HTTP client.
 * @summary Provides a preconfigured Axios instance to every bounded-context API.
 * @author Nestor Rojas
 * @class BaseApi
 */
export class BaseApi {
    /**
     * Axios HTTP client instance.
     * @type {import('axios').AxiosInstance}
     */
    #http;

    /** Creates the Axios client using the base URL from environment variables. */
    constructor() {
        this.#http = axios.create({
            baseURL: platformApi,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    /**
     * Returns the configured Axios HTTP client.
     * @returns {import('axios').AxiosInstance}
     */
    get http() {
        return this.#http;
    }
}
