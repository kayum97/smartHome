<template lang="pug">

.div
    menuApp
    .container
        button(type="button" class="btn btn-outline-dark") Добавь список
</template>
<script>

import menuApp from './menuApp'
export default {
  name: 'buy',
  components: { 'menuApp': menuApp}

  }</script>
<style></style>