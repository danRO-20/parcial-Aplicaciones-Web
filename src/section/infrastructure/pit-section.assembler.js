import {PitSection} from "../domain/model/pit-section.entity.js";



/**

 * Maps pit section resources into domain entities.

 * @summary Assembler for the external pit sections catalog.

 * @author Nestor Rojas

 * @class PitSectionAssembler

 */

export class PitSectionAssembler {

    /**

     * @param {Object} resource - Pit section resource.

     * @returns {PitSection} Pit section entity.

     */

    static toEntityFromResource(resource) {
        return new PitSection({ ...resource });

    }



    /**

     * @param {import('axios').AxiosResponse<Array<Object>>} response - HTTP response.

     * @returns {PitSection[]} Pit section entities.

     */

    static toEntitiesFromResponse(response) {

        if (response.status !== 200) {

            console.error(`${response.status}, ${response.statusText}`);

            return [];

        }

        return response.data.map(resource => this.toEntityFromResource(resource));

    }

}