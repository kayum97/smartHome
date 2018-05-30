<template lang="pug">
  .container
   .row
    .col-md-4
    .col-md-4
      form.login(id="addFormDistrict" @submit.prevent="login")
          .alert.alert-danger(v-if="error") {{error}}
          .form-group
              label(for="inputEmail") Ваш email
              input(type="email" class="form-control" id="email" v-model="email")
          .form-group
              label(for="password") Пароль
              input(type="password" class="form-control" id="password" v-model="password")
          button(type="submit" class="btn bnt-primary" form="addFormDistrict"  id="addDistrict") Войти
    .col-md-4
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    login () {
        this.$http.post('http://home-server.tmweb.ru/user/login', { email: this.email, password: this.password })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
        if (req.data.data.api_token == undefined) {
            this.loginFailed() 
            return
        }
        else {
            localStorage.token = req.data.data.api_token
            this.error = ''
            this.$router.replace(this.$route.query.redirect || '/panels')
        }
    },
    loginFailed () {
        this.error = 'Login failed!'
         delete localStorage.token
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
    position: relative;
    top: 100%;

  .form-control {
      display: block;
      width: 100%;
  }
}

</style>
