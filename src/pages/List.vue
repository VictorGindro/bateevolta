<template>
  <v-container>
    <div class="text-center">
      <v-img :src="require('../assets/BeV/f1-w.png')" class="mb-3"  contain height="150"></v-img>
      <h2 class="headline font-weight-bold mb-3">Suas Viagens:</h2>
    </div>
    <v-layout text-center wrap class="mb-5 pb-5">
      <v-col  v-for="n in 15" :key="n">
        <Card />
      </v-col>
    </v-layout>
    <v-bottom-navigation :value="activeBtn" light grow color="rgb(70, 180, 199)">
      <v-btn>
        <span>Recentes</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favoritos</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn>
        <span>Recomendado</span>
        <v-icon>visibility</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
    Card,
  },
  data: () => ({
    activeBtn: 1
    
  }),
};
</script>
