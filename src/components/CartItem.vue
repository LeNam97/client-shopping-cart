<template>
  <tr>
    <td data-th="Product">
      <div class="row">
        <div class="col-sm-2 d-none d-sm-block">
          <img :src="cartItem.thumbnail" alt="..." class="img-fluid"/>
        </div>
        <div class="col-sm-10">
          <h4 class="nomargin">{{ cartItem.title }}</h4>
          <p>{{ cartItem.description }}</p>
        </div>
      </div>
    </td>
    <td data-th="Price">{{ cartItem.price }}</td>
    <td data-th="Quantity">
      <label>
        <input
            type="number"
            class="form-control text-center"
            :value="cart.quantity"
            @input="updateQuantity"
            min="0">
      </label>
    </td>
    <td data-th="Subtotal" class="text-center">${{ subtotal }}</td>
    <td class="actions" data-th="">
      <button class="btn btn-danger btn-sm" @click="removeItem(cart)">Del
      </button>
    </td>
  </tr>
</template>

<script>
  export default {
    props: ['cart'],
    methods: {
      updateQuantity (event) {
        this.$store.dispatch('updateQuantity', {
          id: this.cart.id,
          quantity: JSON.parse(event.target.value),
          status: false
        })
      },
      removeItem (cart) {
        return this.$store.dispatch('removeCart', cart)
      },
    },
    computed: {
      subtotal () {
        return this.$store.getters.getSubtotal(this.cart.id);
      },
      cartItem () {
        return this.$store.getters.getCart(this.cart.id);
      },
    },
    mounted () {
    }
  }
</script>

<style scoped>

</style>
