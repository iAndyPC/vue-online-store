<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}" >
      <img v-bind:src="this.product.image" v-bind:alt="this.product.title">
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{this.product.title}}
      </a>
    </h3>

    <span class="catalog__price"> {{this.product.price | numberFormat}} ₽ </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in getColorsForProduct()">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="color.value">
          <span class="colors__value" :style="{ backgroundColor: color.value }"></span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import colors from '@/data/colors';
import gotoPage from "@/helpers/gotoPage";
import numberFormat from "@/helpers/numberFormat";

export default {
  data() {
    return {
      color: '#73B6EA',
    };
  },
  name: 'ProductItem',
  props: ['product'],
  filters: {
    numberFormat,
  },
  computed: {
    colors() { return colors; },
  },
  methods: {
    getColorsForProduct() { // Returns only the colors that the product has
      return this.colors.filter((item) => item.id === this.product.colorId);
    },
    gotoPage,
  },
};
</script>

<style scoped>

</style>
