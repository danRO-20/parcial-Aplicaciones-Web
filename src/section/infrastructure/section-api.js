import {BaseApi} from "../../shared/infrastructure/base-api.js";

import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";



const pitSectionsUrl = import.meta.env.VITE_PIT_SECTIONS_URL;

const machineryModelsUrl = import.meta.env.VITE_MACHINERY_MODELS_URL;



/**

 * Infrastructure gateway for the external Section services.

 * @summary Consumes the pit sections and machinery models catalogs.

 * @author Nestor Rojas

 * @class SectionApi

 * @extends BaseApi

 */

export class SectionApi extends BaseApi {

    /** @type {BaseEndpoint} */

    #pitSectionsEndpoint;

    /** @type {BaseEndpoint} */

    #machineryModelsEndpoint;



    /** Creates the endpoint clients for both catalogs. */

    constructor() {

        super();

        this.#pitSectionsEndpoint = new BaseEndpoint(this, pitSectionsUrl);

        this.#machineryModelsEndpoint = new BaseEndpoint(this, machineryModelsUrl);

    }



    /** @returns {Promise<import('axios').AxiosResponse>} Pit sections response. */

    getPitSections() {

        return this.#pitSectionsEndpoint.getAll();

    }



    /** @returns {Promise<import('axios').AxiosResponse>} Machinery models response. */

    getMachineryModels() {

        return this.#machineryModelsEndpoint.getAll();

    }

}