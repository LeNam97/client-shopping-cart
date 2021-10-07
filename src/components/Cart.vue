<template>
	<div class="container table-responsive">
		<table id="cart" class="table table-hover table-sm">
			<thead>
			<tr>
				<th style="width:50%">Product</th>
				<th style="width:10%">Price</th>
				<th style="width:8%">Quantity</th>
				<th style="width:22%" class="text-center">Subtotal</th>
				<th style="width:10%"></th>
			</tr>
			</thead>

			<transition-group name="list-shopping-cart" tag="tbody">
				<CartItem
						v-for="(cartItem, index) in getCarts"
						:cart="cartItem"
						:key="index">
				</CartItem>
			</transition-group>

			<tfoot>
			<tr class="d-table-row d-sm-none">
				<td class="text-center">
					<!--            <strong>Total ${{ cartValue }}</strong>-->
				</td>
			</tr>
			<tr>
				<td>
					<button class="btn btn-warning" @click="saveShoppingCartLocal()">
						<i class="fa fa-angle-left"></i> Save and Continue Shopping
					</button>
				</td>
				<td colspan="2" class="d-none d-sm-table-cell"></td>
				<td class="d-none d-sm-table-cell text-center">
					<strong>Total ${{ cartValue }}</strong>
				</td>
				<td class="px-0">
					<button class="btn btn-success" @click="checkout()">
              <span class="text-nowrap">Checkout
                <i class="fa fa-angle-right d-inline"></i
                ></span>
					</button>
				</td>
			</tr>
			</tfoot>
		</table>
	</div>
</template>

<script>
	import CartItem from './CartItem'

	export default {
		name: "cart",
		methods: {
			saveShoppingCartLocal() {
        const isAuthorized = this.$store.getters.isAuthenticated
        if(isAuthorized !== null){
          this.$store.dispatch('saveCart')
          this.$router.push('/')
        }else{
          this.$router.push('/login')
        }
			},
			checkout() {
        this.$store.dispatch('checkout')
			},
		},
		computed: {
			getCarts() {
				return this.$store.getters.getListCarts;
			},
			cartValue() {
				return this.$store.getters.money;
			},
		},
		mounted() {
		},
		components: {CartItem}

	}
</script>
<style lang="scss" scoped>
	.list-shopping-cart-leave-active {
		transition: all 0.4s;
	}

	.list-shopping-cart-leave-to {
		opacity: 0;
		transform: translateX(50px);
	}

	.table-sm {
		font-size: 0.875rem;

		::v-deep h4 {
			font-size: 1.25rem;
		}
	}
</style>
