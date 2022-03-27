<template>
  <v-footer padless color="blue darken-1">
    <v-col
            class="text-center white--text"
            cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>ManageBand</strong>
    </v-col>
  </v-footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>

</style>