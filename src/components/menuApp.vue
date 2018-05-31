<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    div.container
        a.navbar-brand(href="/") SmartHome
        button.navbar-toggler(type="button", data-toggle="collapse", data-target="#navbarNavAltMarkup", aria-controls="navbarNavAltMarkup", aria-expanded="false", aria-label="Toggle navigation")
            span.navbar-toggler-icon
        div.collapse.navbar-collapse(id="navbarNavAltMarkup")
            ul.navbar-nav.mr-auto
                li.nav-item(v-bind:class="{ active: isActive}")
                    a(href="/" class="nav-link") Главная
                li.nav-item(v-bind:class="{ active: isActive_2}")
                    a(href="/buy" class="nav-link") Список покупок
                li.nav-item(v-bind:class="{ active: isActive_3}")
                    a(href="/publics" class="nav-link disabled") Паблики
            ul.navbar-nav.ml-auto  
                li.nav-item(v-bind:class="{ active: isActive_4}")
                    a(href="/settings" class="nav-link disabled") Настройки     
                li.nav-item
                    a(href="/" class="nav-link" @click="logout()") Выход   
</template>

<script>
export default {
    name: 'menuApp',
    props: ['isActive','isActive_2','isActive_3','isActive_4'],
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
