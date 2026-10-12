import {defineStore} from "pinia";

import {ref} from "vue";

import {SectionApi} from "../infrastructure/section-api.js";

import {PitSectionAssembler} from "../infrastructure/pit-section.assembler.js";

import {MachineryModelAssembler} from "../infrastructure/machinery-model.assembler.js";



const sectionApi = new SectionApi();



/**

 * Application store of the Section bounded context.

 * @summary Keeps the pit sections and machinery models catalogs.

 * @author Nestor Rojas

 */

const useSectionStore = defineStore('section', () => {

    /** @type {import('vue').Ref<PitSection[]>} */

    const pitSections = ref([]);

    /** @type {import('vue').Ref<MachineryModel[]>} */

    const machineryModels = ref([]);

    /** @type {import('vue').Ref<Error[]>} */

    const errors = ref([]);

    /** @type {import('vue').Ref<boolean>} */

    const catalogLoaded = ref(false);



    /**

     * Loads both catalogs once.

     * @returns {Promise<void>}

     */

    function fetchCatalog() {

        if (catalogLoaded.value) return Promise.resolve();

        return Promise.all([sectionApi.getPitSections(), sectionApi.getMachineryModels()])

            .then(([sectionsResponse, modelsResponse]) => {

                pitSections.value = PitSectionAssembler.toEntitiesFromResponse(sectionsResponse);

                machineryModels.value = MachineryModelAssembler.toEntitiesFromResponse(modelsResponse);

                catalogLoaded.value = true;

            })

            .catch(error => {

                errors.value.push(error);

            });

    }



    /**

     * @param {number|string} id - Pit section identifier.

     * @returns {PitSection|undefined} Matching pit section.

     */

    function getPitSectionById(id) {

        return pitSections.value.find(section => section.id === Number(id));

    }



    /**

     * @param {number|string} id - Machinery model identifier.

     * @returns {MachineryModel|undefined} Matching machinery model.

     */

    function getMachineryModelById(id) {

        return machineryModels.value.find(model => model.id === Number(id));

    }



    /**

     * @param {?number} sectionId - Pit section identifier.

     * @returns {MachineryModel[]} Models that belong to the section.

     */

    function getMachineryModelsBySectionId(sectionId) {

        return machineryModels.value.filter(model => model.sectionId === sectionId);

    }



    return {

        pitSections, machineryModels, errors, catalogLoaded,

        fetchCatalog, getPitSectionById, getMachineryModelById, getMachineryModelsBySectionId

    };

});



export default useSectionStore;