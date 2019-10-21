<template>
  <v-dialog v-model="dialog"  max-width="600px">
    <template v-slot:activator="{ on }" >
      <v-btn class="mx-2" v-on="on" fab small color="white" >
        <v-icon  color="rgb(70, 180, 199)">directions_bus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="white--text teal text-center">{{viagem.nome}}</v-card-title>
      <v-card-title>
        <v-img height="200" width="400" :src="viagem.fotoDestaque">
        <v-list-item-subtitle class="white--text teal text-center">Oranizado por: {{viagem.nomeOrganizador}}</v-list-item-subtitle></v-img>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-list-item-title>Data de ida:</v-list-item-title>
              <v-list-item-subtitle class="my-5">{{viagem.dataSaida}}</v-list-item-subtitle>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-list-item-title>Data de volta:</v-list-item-title>
              <v-list-item-subtitle class="mt-5">{{viagem.dataChegada}}</v-list-item-subtitle>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-list-item-title>Organizador:</v-list-item-title>
              <v-list-item-subtitle class="mt-5">{{viagem.nomeOrganizador}}</v-list-item-subtitle>
            </v-col>
            <v-col cols="12">
              <v-list-item-title>Descrição:</v-list-item-title>
              <p class="mt-5">{{viagem.descricao}}</p>
            </v-col>
            <v-col cols="6">
              <v-list-item-title>Ponto de saída:</v-list-item-title>
              <v-list-item-subtitle class="mb-5">{{pontosEmbarques[0]}}</v-list-item-subtitle>
              <v-list-item-title>Ponto de chegada:</v-list-item-title>
              <v-list-item-subtitle>{{pontosEmbarques[1]}}</v-list-item-subtitle>
            </v-col>
            <v-col cols="6">
              <v-layout justify-space-between>
                <v-dialog v-model="buy" v-if=" this.$router.history.current.path !='/compras'" max-width="200px">
                  <template v-if="this.$store.getters.user.role.authority != 'ROLE_ORGANIZADOR'" v-slot:activator="{ on }" >
                    <v-btn class="mx-2" v-on="on" fab small color="white" >
                      <v-icon  color="rgb(70, 180, 199)">shopping_cart</v-icon>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline text-center">Confirmar Compra?</span>
                    </v-card-title>
                    <v-card-actions>
                      <v-layout justify-center class="my-2">
                      <v-btn @click="comprar">Sim</v-btn>
                      <v-btn @click="buy=!buy">Não</v-btn>
                      </v-layout>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
            </v-col>
            <v-col cols="12" sm="8">

            </v-col>
            <v-col cols="12" sm="6">

            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from 'axios'
  export default {
    components: {
    },
    data:()=>( {
        dialog: false,
        buy: false,
        cancelar:false,
        viagem:{},
        pontosEmbarques:[]
    }),props:{
            id:Number
    },beforeMount(){
      // eslint-disable-next-line
       axios.get("http://batevolta-api.herokuapp.com/viagem/"+this.id).then((response)=>{this.viagem = response.data; this.pontosEmbarques = response.data.pontosEmbarques}).catch((e)=>{console.log(e)});
    },
    methods:{
      comprar() {
        axios.post("http://batevolta-api.herokuapp.com/embarque/viagem/" + this.id + "/turista/" + this.$store.getters.user.id, {
          "headers": {
            Authorization: 'Bearer ' + this.$store.getters.user.token
          }
        }).then((response) => {
          // eslint-disable-next-line
          console.log(response.data);
          this.$router.push("/turista/compras");
        }).catch((e) => {
          // eslint-disable-next-line
          console.log(e);
        });
        this.$router.push("/turista/compras");
      },
    }
  }
</script>