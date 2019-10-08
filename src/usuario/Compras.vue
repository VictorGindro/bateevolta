<template>
  <v-container>
    <div class="text-center">
      <v-img :src="require('../assets/BeV/f1-w.png')" class="mb-3"  contain height="150"></v-img>
      <h2 class="headline font-weight-bold mb-3">Suas Viagens:</h2>
    </div>
    <v-layout text-center wrap class="mb-5 ml-5 pb-5">
      <v-col class="ml-5" v-for="n in 1" :key="n">
        <Card class="ma-1" />
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
    Card
  },
  data: () => ({
    activeBtn: 1
    
  }),
};
</script>
