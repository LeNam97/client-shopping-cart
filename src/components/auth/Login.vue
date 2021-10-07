<template>
	<div id="login">
		<div class="container">
			<div class="row">
				<div class="col-md-5 mx-auto">
					<div id="first">
						<div class="myform form ">
							<div class="logo mb-3">
								<div class="col-md-12 text-center">
									<h1>Login</h1>
								</div>
							</div>
							<form @submit.prevent="login" method="post" name="login">
								<div class="form-group">
									<label>Email address
										<input
												type="email" name="email" class="form-control"
												id="email" aria-describedby="emailHelp"
												placeholder="Enter email" v-model="email">
									</label>
								</div>
								<div class="form-group">
									<label>Password
										<input
												type="password" name="password" id="password"
												class="form-control" aria-describedby="emailHelp"
												placeholder="Enter Password" v-model="password">
									</label>
								</div>
								<div class="col-md-12 text-center ">
									<button
											type="submit"
											class=" btn btn-block mybtn btn-primary tx-tfm">Login
									</button>
								</div>
								<div class="col-md-12 ">
									<div class="login-or">
										<hr class="hr-or">
										<span class="span-or">or</span>
									</div>
								</div>
								<div class="col-md-12 mb-3">
									<p class="text-center">
										<router-link
												tag="a" to="/register"
												class="register btn mybtn fa fa-google-plus">
											register
										</router-link>
										<!--                                        <a href="#" class="register btn mybtn"><i-->
										<!--                                            class="fa fa-google-plus">-->
										<!--                                        </i> Register-->
										<!--                                        </a>-->
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login() {
				this.$store.dispatch('login', {
					email: this.email,
					password: this.password
				})
				this.$router.push('/')
			}
		},
	}
</script>

<style scoped>
	#login {
		padding-top: 4.2rem;
	}
	
	a {
		text-decoration: none !important;
	}
	
	h1, h2, h3 {
		font-family: 'Arial', cursive;
	}
	
	label {
		width: 100%;
	}
	
	input {
		margin-top: 1%;
	}
	
	.myform {
		position: relative;
		display: -ms-flexbox;
		display: flex;
		padding: 1rem;
		-ms-flex-direction: column;
		flex-direction: column;
		width: 100%;
		pointer-events: auto;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid rgba(0, 0, 0, .2);
		border-radius: 1.1rem;
		outline: 0;
		max-width: 500px;
	}
	
	.tx-tfm {
		text-transform: uppercase;
	}
	
	.mybtn {
		border-radius: 50px;
	}
	
	.login-or {
		position: relative;
		color: #aaa;
		margin-top: 10px;
		margin-bottom: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.span-or {
		display: block;
		position: absolute;
		left: 50%;
		top: -2px;
		margin-left: -25px;
		background-color: #fff;
		width: 50px;
		text-align: center;
	}
	
	.hr-or {
		height: 1px;
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	
	.register {
		color: #666;
		width: 100%;
		height: 40px;
		text-align: center;
		outline: none;
		border: 1px solid lightgrey;
	}
	
	form .error {
		color: #ff0000;
	}
</style>
