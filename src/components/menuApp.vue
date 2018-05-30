<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    div.container
        a.navbar-brand(href="#") SmartHome
        button.navbar-toggler(type="button", data-toggle="collapse", data-target="#navbarNavAltMarkup", aria-controls="navbarNavAltMarkup", aria-expanded="false", aria-label="Toggle navigation")
            span.navbar-toggler-icon
        div.collapse.navbar-collapse(id="navbarNavAltMarkup")
            ul.navbar-nav.mr-auto
                li.nav-item.active
                    a(href="#" class="nav-link") Главная
                li.nav-item
                    a(href="/buy" class="nav-link") Купить
            ul.navbar-nav.ml-auto     
                li.nav-item
                    a(href="#" class="nav-link" @click="logout()") Выход     
</template>

<script>
export default {
    name: 'menuApp',
    methods: {
        logout() {
            delete localStorage.token
            this.$router.replace('/')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav a {
    color: #fff;
}
</style>
