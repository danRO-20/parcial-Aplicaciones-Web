import {MachineryModel} from "../domain/model/machinery-model.entity.js";



/**

 * Maps machinery model resources into domain entities.

 * @summary Assembler for the external machinery models catalog.

 * @author Nestor Rojas

 * @class MachineryModelAssembler

 */

export class MachineryModelAssembler {

    /**

     * @param {Object} resource - Machinery model resource.

     * @returns {MachineryModel} Machinery model entity.

     */

    static toEntityFromResource(resource) {

        return new MachineryModel({

            id: resource.id,

            modelName: resource.modelName,

            manufacturer: resource.manufacturer,

            sectionId: resource.idSection

        });

    }



    /**

     * @param {import('axios').AxiosResponse<Array<Object>>} response - HTTP response.

     * @returns {MachineryModel[]} Machinery model entities.

     */

    static toEntitiesFromResponse(response) {

        if (response.status !== 200) {

            console.error(`${response.status}, ${response.statusText}`);

            return [];

        }

        return response.data.map(resource => this.toEntityFromResource(resource));

    }

}