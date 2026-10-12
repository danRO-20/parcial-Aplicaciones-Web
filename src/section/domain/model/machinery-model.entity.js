/**

 * Machinery model entity of the Section bounded context.
 * @summary Represents a machinery model of the external catalog.
 * @author Nestor Rojas
 * @class MachineryModel
 */

export class MachineryModel {

    /**
     * @param {Object} params - Entity attributes.
     * @param {?number} [params.id=null] - Model identifier.
     * @param {string} [params.modelName=''] - Model name.
     * @param {string} [params.manufacturer=''] - Manufacturer name.
     * @param {?number} [params.sectionId=null] - Pit section the model belongs to.
     */

    constructor({ id = null, modelName = '', manufacturer = '', sectionId = null }) {

        this.id = id;
        this.modelName = modelName;
        this.manufacturer = manufacturer;
        this.sectionId = sectionId;

    }

}