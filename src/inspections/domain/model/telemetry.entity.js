/**

 * Telemetry entity of the Inspections bounded context.

 * @summary Represents one telemetry reading of a machinery.

 * @author Nestor Rojas

 * @class Telemetry

 */

export class Telemetry {

    /**

     * @param {Object} params - Entity attributes.

     * @param {?number} [params.id=null] - Reading identifier.

     * @param {?number} [params.inspectionRecordId=null] - Related inspection identifier.

     * @param {string} [params.machineryCode=''] - Machinery code.

     * @param {?number} [params.modelId=null] - Machinery model identifier.

     * @param {?number} [params.pitSectionId=null] - Pit section identifier.

     * @param {number} [params.operatingHours=0] - Operating hours.

     * @param {number} [params.engineTemperatureC=0] - Engine temperature in Celsius.

     * @param {number} [params.oilPressurePsi=0] - Oil pressure in PSI.

     * @param {boolean} [params.alertTriggered=false] - Whether an alert was triggered.

     * @param {?string} [params.registeredAt=null] - ISO registration date and time.

     */

    constructor({ id = null, inspectionRecordId = null, machineryCode = '', modelId = null, pitSectionId = null,

                    operatingHours = 0, engineTemperatureC = 0, oilPressurePsi = 0, alertTriggered = false,

                    registeredAt = null }) {

        this.id = id;

        this.inspectionRecordId = inspectionRecordId;

        this.machineryCode = machineryCode;

        this.modelId = modelId;

        this.pitSectionId = pitSectionId;

        this.operatingHours = operatingHours;

        this.engineTemperatureC = engineTemperatureC;

        this.oilPressurePsi = oilPressurePsi;

        this.alertTriggered = alertTriggered;

        this.registeredAt = registeredAt;

    }

}