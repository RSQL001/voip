<template>
<div id="app">
  <header>
    <h1>Vue Voxer</h1>
    <p>Realtime Voice Chat</p>
  </header>
</div>
</template>

<script>

import db from './firebase/init'

console.log(db);

export default {
  name: 'App',
  components: {

  }
}

</script>

<style>
#app {
  
}
</style>
