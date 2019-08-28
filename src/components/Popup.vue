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
              <v-img :src="require('../assets/beach.jpg')"/>
            </v-col>
            <v-col cols="12" sm="8">
              <v-list-item-title>Estado:</v-list-item-title>
              <v-alert class="mt-5" color="success">Pagamento Confirmado!</v-alert>
            </v-col>
            <v-col cols="12" sm="6">

            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <!-- <v-card-actions>
          <v-spacer/>
            <v-btn color="blue darken-1" fab  @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-btn color="blue darken-1" fab  @click="dialog = false">
              <v-icon>check</v-icon>
            </v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    data() {
      return {
        dialog: false
      }
    }
  }
</script>.