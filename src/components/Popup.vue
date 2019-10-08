<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn class="mx-2" v-on="on" fab small color="white">
        <v-icon color="rgb(70, 180, 199)">directions_bus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Informações sobre a Viagem</span>
        <v-img height="200" width="400" src="https://wallpaperbro.com/img/212940.jpg"></v-img>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-list-item-title>Data de ida:</v-list-item-title>
              <v-list-item-subtitle class="my-5">16/12/2020</v-list-item-subtitle>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-list-item-title>Data de volta:</v-list-item-title>
              <v-list-item-subtitle class="mt-5">19/12/2020</v-list-item-subtitle>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-list-item-title>Organizador:</v-list-item-title>
              <v-list-item-subtitle class="mt-5">Kevin</v-list-item-subtitle>
            </v-col>
            <v-col cols="12">
              <v-list-item-title>Descrição:</v-list-item-title>
              <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id quam, culpa ea dolores
                voluptates earum quis nihil sequi, dignissimos vel rem eius hic deleniti distinctio doloribus! Mollitia,
                saepe quaerat?</p>
            </v-col>
            <v-col cols="6">
              <v-list-item-title>Ponto de saída:</v-list-item-title>
              <v-list-item-subtitle class="mb-5">Quejo Nº:123</v-list-item-subtitle>
              <v-list-item-title>Ponto de chegada:</v-list-item-title>
              <v-list-item-subtitle>presunto Nº:123</v-list-item-subtitle>
            </v-col>
            <v-col cols="6">
              <v-layout justify-space-between>
                <v-dialog v-model="buy" v-if=" this.$router.history.current.path !='/compras'" max-width="200px">
                  <template v-slot:activator="{ on }" >
                    <v-btn class="mx-2" v-on="on" fab small color="white" >
                      <v-icon color="rgb(70, 180, 199)">shopping_cart</v-icon>
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
                <div v-if="this.$router.history.current.path =='/compras'">
                  

                  <v-dialog v-model="cancelar" max-width="200px">
                  <template v-slot:activator="{ on }" >
                    <v-btn class="mx-2" v-on="on" color="white" >
                      <!-- <v-icon color="rgb(70, 180, 199)">cancel_presentation</v-icon> -->
                      Cancelar Viagem
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline text-center">Deseja Cancelar?</span>
                    </v-card-title>
                    <v-card-actions>
                      <v-layout justify-center class="my-2">
                      <v-btn @click="cancelar=!cancelar">Sim</v-btn>
                      <v-btn @click="cancelar=!cancelar">Não</v-btn>
                      </v-layout>
                    </v-card-actions>
                  </v-card>
                </v-dialog>




                </div>
                
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
  export default {
    data:()=>( {
        dialog: false,
        buy: false,
        cancelar:false,
    }),
    methods:{
      comprar(){
        this.$router.push("/compras");
      }
    }
  }
</script>.