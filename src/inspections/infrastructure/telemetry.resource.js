/**

 * Resource shape of an inspection record returned by the API.
 * @summary Transfer object for the inspection-records endpoint.
 * @author Nestor Rojas
 * @class InspectionResource

 */

export class InspectionResource {

    /** @param {Object} data - Raw inspection record. */

    constructor({ id, machineryCode, modelId, pitSectionId, inspectorName, status, notes, inspectedAt, operatingHours, maxOperatingHours }) {

        this.id = id;
        this.machineryCode = machineryCode;
        this.modelId = modelId;
        this.pitSectionId = pitSectionId;
        this.inspectorName = inspectorName;
        this.status = status;
        this.notes = notes;
        this.inspectedAt = inspectedAt;
        this.operatingHours = operatingHours;
        this.maxOperatingHours = maxOperatingHours;

    }

}