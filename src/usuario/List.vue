<template>
  <v-container >
    <div class="text-center ">
      <v-img :src="require('../assets/BeV/BeVTranparentSmall.png')" contain height="200"></v-img>
      <h2 class="headline font-weight-bold mb-3">Viagens Disponiveis:</h2>
    </div>
      <v-row>
        <v-layout text-center justify-space-around wrap class="mb-5 ml-5 pb-5" v-for="n in cards.length" :key="n">
          <v-col>
            <Card class="ma-1" :viagem="cards[n-1]"/>
          </v-col>
        </v-layout>
      </v-row>
  </v-container>
</template>

<script>
import Card from '../components/Card'
import axios from 'axios'
export default {
  components: {
    Card
  },
  data: () => ({
    activeBtn: 1,
    cards:[]
    
  }),beforeMount(){
    axios.get("https://batevolta-api.herokuapp.com/viagem/retrieve").then((response)=>{
      this.cards = response.data;
    }).catch();
  }
};
</script>
<style scoped>
.background{
    background-image: url("../assets/nsky.jpg");
    background-size: cover;
}
</style>
