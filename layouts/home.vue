<template>
  <v-app
    class="aspire"
    style='background-image: url("/kopalogo.png"); background-repeat: no-repeat; background-position: center top;  margin-top: 10px;'>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      locales: ["English", "Kiswahili"]
    };
  },
  head() {
    return {
      title: 'Home Page'
    }
  },
};
</script>
<style scoped>

body{
    background: #3A1C71;
    background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
    background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
  zoom:100%;
}
</style>
