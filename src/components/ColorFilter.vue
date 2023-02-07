<template>
  <fieldset class="form__block">
    <legend class="form__legend">Цвет</legend>
    <ul class="colors">
      <li class="colors__item" v-for="color in colors" :key="color.id">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" checked=""
                 :name="color.title" v-model="currentColorId" :key="color.id" :value="color.id">
          <span class="colors__value" :style="{ backgroundColor: color.value }"></span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<script>
import colors from '@/data/colors';

export default {
  name: 'ColorFilter',
  data() {
    return {
      currentColorId: 0,
    };
  },
  watch: {
    currentColorId() {
      this.$emit('selectColor', this.currentColorId);
    },
  },
  computed: {
    colors() { return colors; },
  },
};
</script>

<style scoped>

</style>
