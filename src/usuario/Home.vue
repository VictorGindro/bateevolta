<template>
        <section>
            <v-parallax src="../assets/beach.jpg" height="600">
                <v-layout column align-center justify-center class="white--text">
                    <img src="../assets/BeV/logo_transparent.png" @click="easterEgg" alt="Vuetify.js" height="200">
                    <h1 class="white--text mb-2 display-1 text-center"> Bate & Volta</h1>
                    <div class="subheading mb-4 text-center">Powered by FIap</div>
                </v-layout>
            </v-parallax>

            <v-layout  column wrap class="my-12" align-center>
                <v-flex xs12 sm4 class="my-4">
                    <div class="text-center">
                        <h2 class="headline">Comece a Viajar conosco!</h2>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container  grid-list-xl>
                        <v-layout  row wrap align-center>
                            <v-flex xs12 md12 >
                                <v-card flat  class="transparent">
                                    <v-card-text class="text-center">
                                        <v-icon x-large class="blue--text text--lighten-2">eco</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-center">Mais Ecologico!</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Viajar usando o Bate Volta é mais ecologico, pois eduz a quantidade de veicuos sendo utilizados ao mesmo tempo!
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <!-- <v-flex xs12 md4>
                                <v-card flat class="transparent">
                                    <v-card-text class="text-center">
                                        <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Fast development</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                        turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card flat class="transparent">
                                    <v-card-text class="text-center">
                                        <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-center">Completely Open Sourced</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                        turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex> -->
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>

            <v-parallax src="../assets/praia.jpg" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-4 text-center">Quer fazer um bate volta o fim de semana?</div>
                    <em>Use nosso aplicativo!</em>
                    <v-btn class="mt-12" color="rgb(41, 163, 163)" dark large href="/criar">
                        Use Já!
                    </v-btn>
                </v-layout>
            </v-parallax>

            <v-container grid-list-xl>
                <v-layout row wrap justify-center class="my-12">
                    <v-flex xs12 sm4>
                        <v-card flat class="transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Sobre nós</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                egestas.
                                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
                                potenti.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm4 offset-sm1>
                        <v-card flat class="transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Fale Conosco</div>
                            </v-card-title>
                            <v-card-text>
                                Estamos 24/7 esperando por você!
                            </v-card-text>
                            <v-list class="transparent">
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>777-867-5309</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>São Paulo, BR</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>queijo@gmail.com</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>


</template>

 <script>
export default {
   data: () => ({
    title: "queijo",
    clicks:0
  }),methods:{
      easterEgg(){
          if(this.clicks===3){
              window.location.href = "https://guitadeu.github.io/ferias/";
          }else{
              this.clicks++;
          }
      }
  }
}
 </script>