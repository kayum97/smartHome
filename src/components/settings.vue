<template lang="pug">
    menuApp(:isActive_4='isActive_4')
</template>

<script>
    import menuApp from './menuApp'
    export default {
        name: 'settings',
        components: { 'menuApp': menuApp},
        data: function () {
            return {
                isActive_4: true
            }
        },
        created: function() {
            window.document.title = "Настройки"
        }
    }
</script>

<style lang="scss">


</style>