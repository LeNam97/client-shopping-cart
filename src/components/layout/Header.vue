<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg ">
      <button
          class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false"
          aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link
            tag="a"
            class="navbar-brand mr-auto mt-2 mt-lg-0"
            :to="{name: 'home'}">
          Online Store
        </router-link>
        <div class="form-inline my-4 my-lg-0">
          <div v-if="isLogin">
            <router-link
                tag="button"
                class="btn login my-2 my-sm-0"
                :to="{name: 'login'}"
                active-class="active"
            >Login
            </router-link>
            <router-link
                tag="button"
                class="btn register my-2 my-sm-0"
                :to="{name:'register'}"
                active-class="active"
            >Register
            </router-link>
          </div>
          <div v-if="!isLogin">
            <span>{{ getUser() }}</span>
            <button
                class="btn register my-2 my-sm-0"
                @click="logout"
            >LogOut
            </button>
          </div>
          <router-link
              tag="span"
              class="btn btn-success my-2 my-sm-0"
              :to="{name: 'cart'}"
              active-class="active">
            <span>CheckOut
              <span class="checkOut">{{ countListCarts }}( $ {{ money }})</span>
            </span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
  // import mapGetters from 'vuex'

  export default {
    name: "Header",
    data () {
      return {
        isActive: '',
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
        this.isActive = true
        this.$router.push('/login')
      },
      getUser () {
        const user = this.$store.getters.getUser
        if (user) {
          this.isActive = false;
          return user
        }
      }
    },
    computed: {
      countListCarts () {
        return this.$store.getters.countListCarts;
      },
      money () {
        return this.$store.getters.money;
      },
      isLogin () {
        return this.$store.getters.isLogin;
      }
    },
  }
</script>

<style scoped>
  #header {
    background-color: #666666;
  }

  nav {
    width: 80%;
    margin: 0 auto;
  }

  a {
    color: white;
  }

  .login, .register {
    background: none;
    color: #e1e1e1;
    font-weight: 300;

  }

  .checkOut {
    background: white;
    color: black !important;
    padding: 1px 5px;
    border-radius: 5px;
  }

</style>
