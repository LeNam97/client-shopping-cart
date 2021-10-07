<template>
  <div>
    <product-item v-for="(product, index) in listProducts"
                  :key="index" :data="product" :id="product.id">
    </product-item>
  </div>
</template>

<script>
  import ProductItem from "@/components/ProductItem";

  export default {
    methods: {},
    computed: {
      listProducts() {
        return this.$store.getters.getProducts;
      }
    },
    mounted() {
    },
    components: {ProductItem}
  }
</script>

<style scoped>
  .home {
    width: 80%;
    margin: 0 auto;
  }
</style>
