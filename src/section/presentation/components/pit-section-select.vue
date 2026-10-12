<script setup>

/**

 * Select of pit sections.

 * @summary Reusable v-model component listing the pit sections catalog.

 * @author Nestor Rojas

 */

import {storeToRefs} from "pinia";

import {useI18n} from "vue-i18n";

import useSectionStore from "../../application/section.store.js";



defineProps({ inputId: { type: String, default: 'pit-section' } });

const selectedPitSectionId = defineModel({ default: null });

const { t } = useI18n();

const { pitSections, catalogLoaded } = storeToRefs(useSectionStore());

</script>



<template>

  <pv-select

      v-model="selectedPitSectionId"

      :input-id="inputId"

      :options="pitSections"

      option-label="name"

      option-value="id"

      :loading="!catalogLoaded"

      :placeholder="t('section.select-pit-section')"

      :aria-label="t('section.pit-section')"

      class="w-full"/>

</template>