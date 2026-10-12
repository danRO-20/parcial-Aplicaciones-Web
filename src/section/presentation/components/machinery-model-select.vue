<script setup>

/**

 * Select of machinery models filtered by pit section.

 * @summary Lists only the models whose section matches the given sectionId.

 * @author Nestor Rojas

 */

import {computed} from "vue";

import {useI18n} from "vue-i18n";

import useSectionStore from "../../application/section.store.js";



const props = defineProps({

  inputId: { type: String, default: 'machinery-model' },

  sectionId: { type: Number, default: null }

});

const selectedModelId = defineModel({ default: null });

const { t } = useI18n();

const sectionStore = useSectionStore();

const models = computed(() => sectionStore.getMachineryModelsBySectionId(props.sectionId));

</script>



<template>

  <pv-select

      v-model="selectedModelId"

      :input-id="inputId"

      :options="models"

      option-label="modelName"

      option-value="id"

      :disabled="sectionId === null"

      :placeholder="t('section.select-machinery-model')"

      :empty-message="t('section.no-machinery-models')"

      :aria-label="t('section.machinery-model')"

      class="w-full"/>

</template>