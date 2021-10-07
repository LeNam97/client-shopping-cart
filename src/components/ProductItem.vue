<template>
<!--	<v-card class="mx-auto my-4 my-12" max-width="1200" height="150">-->
<!--		<v-list-item>-->
<!--			<v-list-item-avatar>-->
<!--				<img :src="data.thumbnail" alt="">-->
<!--			</v-list-item-avatar>-->
<!--			<v-list-item-content>-->
<!--				<v-list-item-title v-html="data.title"></v-list-item-title>-->
<!--				<v-list-item-subtitle v-html="data.description"></v-list-item-subtitle>-->
<!--			</v-list-item-content>-->
<!--		</v-list-item>-->
<!--	</v-card>-->
<!--	-->
		<div class="mb-3 col-sm-6 col-md-4 item" :class="{'list-group-item': data}">
			<div class="thumbnail card">
				<div class="img-event intrinsic">
					<img
							:src="data.thumbnail"
							alt=""
							class="grow thumbnail-image card-img-top intrinsic-item p-3">
				</div>
				<div class="card-body">
					<router-link
							:to="{path: 'productDetail', query: {id: data._id}}"
							tag="h5"
							class="card-title">
						<a>{{ data.title }}</a>
					</router-link>
					<h6 class="card-subtitle mb-2 remain">{{ data.quantity }} left in
						stock</h6>
					<p class="card-text truncate">
						{{ data.description }}</p>
					<div class="row">
						<p class="col-6 lead">${{ data.price }}</p>
						<p class="col-2 offset-4">
							<button
									class="btn btn-success pull-right"
									:disabled="data.quantity === 0"
									@click="addCart(data.id)">
								Add to cart
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		name: "ProductItem",
		props: ['data'],
		data() {
			return {}
		},
		methods: {
			addCart() {
				this.$store.dispatch('addNewCart', this.data._id);
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss" scoped>

	div.card {
		height: 100%;
	}

	.card-text {
		font-size: 0.875rem;
	}

	.remain {
		color: #d17581;
	}

	.grow {
		transition: all .2s ease-in-out;
	}

	.grow:hover {
		transform: scale(1.1);
	}

	.list-group-item {
		float: none;
		width: 100%;
		background-color: #fff;
		margin-bottom: 30px;
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
		padding: 0 1rem;
		border: 0;

		.thumbnail {
			display: inline-block;
			width: 100%;
		}

		.img-event {
			width: 20%;
			float: left;
			padding: 0 !important;
			margin: 0;
			height: auto;
		}

		.thumbnail-image {
			position: static;
		}

		.card-body {
			float: left;
			width: 80%;
			margin: 0;
		}

		@media (max-width: 767.98px) {
			.img-event {
				width: 30%;
				float: left;
				padding: 0 !important;
				margin: 0;
			}
			.card-body {
				float: left;
				width: 70%;
				margin: 0;
			}
		}
	}

	.item.list-group-item:before, .item.list-group-item:after {
		display: table;
		content: " ";
	}

	.item.list-group-item:after {
		clear: both;
	}
</style>
