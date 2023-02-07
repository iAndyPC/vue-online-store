<template>
  <div class="product__counter form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="minusOneAmount">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="amount" name="count">

    <button type="button" aria-label="Добавить один товар" @click.prevent="plusOneAmount">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['updateCartProductAmount', 'deleteCartProduct']),
    plusOneAmount() {
      this.amount++;
    },
    minusOneAmount() {
      if (this.amount - 1 === 0) {
        this.deleteCartProduct(this.item.productId);
      } else {
        this.amount--;
      }
    },
  },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.dispatch('updateCartProductAmount', { productId: this.item.productId, amount: value });
      },
    },
  },
  name: 'FormCounter',
  props: ['item'],
};
</script>

<style scoped>

</style>
