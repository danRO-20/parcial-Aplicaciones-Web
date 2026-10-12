import {Telemetry} from "./telemetry.entity.js";



/**

 * Inspection entity of the Inspections bounded context.

 * @summary Represents an inspection record with its telemetry and capacity calculations.

 * @author Nestor Rojas

 * @class Inspection

 */

export class Inspection {

    /**

     * @param {Object} params - Entity attributes.

     * @param {?number} [params.id=null] - Inspection identifier.

     * @param {string} [params.machineryCode=''] - Machinery code.

     * @param {?number} [params.modelId=null] - Machinery model identifier.

     * @param {?number} [params.pitSectionId=null] - Pit section identifier.

     * @param {string} [params.inspectorName=''] - Inspector name.

     * @param {string} [params.status=''] - Inspection status.

     * @param {string} [params.notes=''] - Inspection notes.

     * @param {?string} [params.inspectedAt=null] - Inspection date.

     * @param {number} [params.maxOperatingHours=0] - Maximum operating hours allowed.

     * @param {string} [params.modelName=''] - Model name resolved from the catalog.

     * @param {string} [params.pitSectionName=''] - Section name resolved from the catalog.

     * @param {Telemetry[]} [params.telemetries=[]] - Telemetry readings of the inspection.

     */

    constructor({ id = null, machineryCode = '', modelId = null, pitSectionId = null, inspectorName = '',

                    status = '', notes = '', inspectedAt = null, maxOperatingHours = 0, modelName = '',

                    pitSectionName = '', telemetries = [] }) {

        this.id = id;

        this.machineryCode = machineryCode;

        this.modelId = modelId;

        this.pitSectionId = pitSectionId;

        this.inspectorName = inspectorName;

        this.status = status;

        this.notes = notes;

        this.inspectedAt = inspectedAt;

        this.maxOperatingHours = maxOperatingHours;

        this.modelName = modelName;

        this.pitSectionName = pitSectionName;

        this.telemetries = telemetries.filter(telemetry => telemetry instanceof Telemetry);

    }



    /** @returns {boolean} Whether the inspection has telemetry readings. */

    get hasTelemetry() {

        return this.telemetries.length > 0;

    }



    /** @returns {number} Sum of operatingHours of all telemetry readings. */

    get totalTelemetry() {

        return this.telemetries.reduce((total, telemetry) => total + telemetry.operatingHours, 0);

    }



    /** @returns {number} maxOperatingHours minus the total operating hours. */

    get availableCapacity() {

        return this.maxOperatingHours - this.totalTelemetry;

    }



    /**

     * @param {number} operatingHours - Hours to register.

     * @returns {boolean} True when the hours fit in the available capacity.

     */

    canRegister(operatingHours) {

        return operatingHours <= this.availableCapacity;

    }



    /**

     * Returns a copy of the inspection enriched with catalog names and telemetry.

     * @param {Object} details - Details to attach.

     * @param {string} details.modelName - Model name.

     * @param {string} details.pitSectionName - Section name.

     * @param {Telemetry[]} details.telemetries - Telemetry readings.

     * @returns {Inspection} Enriched inspection.

     */

    withDetails({ modelName, pitSectionName, telemetries }) {

        return new Inspection({ ...this, modelName, pitSectionName, telemetries });

    }

}