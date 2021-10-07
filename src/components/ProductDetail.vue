<template>
	<div class="container">
		<div class="col-md-12">
			<div class="row">
				<div class="col-12 col-md-4 offset-md-4">
					<div class="intrinsic">
						<img
								class="img-fluid intrinsic-item"
								:src="itemProduct.thumbnail"
								alt="">
					</div>
				</div>
			</div>
			
			<div class="caption-full">
				<h4 class="pull-right">$ {{ itemProduct.price }}</h4>
				<h4> {{ itemProduct.title }}</h4>
				<p> {{ itemProduct.description }} </p>
			</div>
			<div class="ratings">
				<span>{{ itemProduct.quantity }} left in stock</span>
				<p class="pull-right">
					<button
							:disabled="itemProduct.quantity === 0"
							class="btn btn-success" @click="addNewCart(itemProduct.id)">
						Add to cart
					</button>
				</p>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: "ProductDetail",
		props: ['item'],
		data() {
			return {
				// id: this.$route.query.id,
				isProductLoading: true,
				productItem: {},
			}
		},
		methods: {
			addNewCart(data) {
				this.$store.dispatch('addNewCart', data);
			}
		},
		computed: {
			itemProduct() {
				return this.$store.getters.getProduct(this.$route.query.id);
			}
		},
		mounted() {
		}
	}
</script>

<style scoped>
	.caption-full {
		padding-right: 10px;
		padding-left: 10px;
	}
	
	.ratings {
		padding-right: 10px;
		padding-left: 10px;
		color: #d17581;
	}
</style>
