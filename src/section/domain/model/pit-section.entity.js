/**

 * Pit section entity of the Section bounded context.
 * @summary Represents a mining area where machinery operates.
 * @author Nestor Rojas
 * @class PitSection
 */

export class PitSection {

    /**

     * @param {Object} params - Entity attributes.
     * @param {?number} [params.id=null] - Section identifier.
     * @param {string} [params.name=''] - Section name.
     */

    constructor({id = null, name = ''}) {

        this.id = id;
        this.name = name;
    }

}