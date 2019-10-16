<template>
<v-slide-x-reverse-transition>
    <section v-show="show">
        <v-parallax src="../assets/beach.jpg" height="600">
            <v-layout column align-center justify-center class="white--text">
                <h1 class="white--text mt-4 display-1 text-center"> Bate & Volta</h1>
                <img src="../assets/BeV/BeVTranparentSmall.png" title="Bate & Volta" @click="easterEgg" alt="Vuetify.js"
                    height="150">
                <div class="subheading mb-4 text-center">Powered by FIap</div>
            </v-layout>
        </v-parallax>


        <v-layout column wrap class="my-12" align-center>
            <v-flex xs12 sm4 class="my-4">
                <div class="text-center">
                    <h2 class="headline">Comece a Viajar conosco!</h2>
                </div>
            </v-flex>
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md12>
                            <v-card flat class="transparent">
                                <v-card-text class="text-center">
                                    <v-icon x-large class="blue--text text--lighten-2">eco</v-icon>
                                </v-card-text>
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline text-center">Mais Ecologico!</div>
                                </v-card-title>
                                <v-card-text>
                                    Viajar usando o Bate Volta é mais ecologico, pois eduz a quantidade de veicuos sendo
                                    utilizados ao mesmo tempo!
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
                <v-btn class="mt-12" color="rgb(41, 163, 163)" dark large @click="create()">
                    Use Já!
                </v-btn>
                <v-btn class="mt-12" color="rgb(41, 163, 163)" dark large @click="login()">
                    faça login!
                </v-btn>
            </v-layout>
        </v-parallax>

        <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-12">
                <v-flex xs12 sm6>
                    <v-card flat class="transparent">
                        <v-card-title primary-title class="layout justify-center">
                            <div class="headline">Sobre nós</div>
                        </v-card-title>
                        <v-card-text>
                            Somos um Bando de programadores com experiencias em diversas areas da tecnologia se unindo
                            para criar algo que achamos que pode ajudar um problema que afeta a todos!
                        </v-card-text>
                    </v-card>
                    <v-layout text-center wrap>
                        <v-col class="ml-5" v-for="n in 5" :key="n">
                            <a @click="github(n)" class="black--text">
                                <v-avatar height="70" width="70" color="teal" class="ma-1"> <v-img :src="people.photos[n-1]" /> </v-avatar>
                                {{people.names[n-1]}}
                            </a>
                        </v-col>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm2 offset-sm1>
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
</v-slide-x-reverse-transition>
</template>

 <script>
export default {
   data: () => ({
    title: "queijo",
    clicks:0,
    people: {
        names: ["Guilherme Tadeu", "Victor Gindro", "Paulo Sthiven", "Victor H.B. Ferreira", "Ygor Machado Villela"],
        photos: ["https://media.licdn.com/dms/image/C4D03AQGDRP2MBOHBlQ/profile-displayphoto-shrink_800_800/0?e=1576108800&v=beta&t=ICETymR2OI_jsbEblJn-eia8M1y9zqQrwa_k9VMUZGY",
         "https://media.licdn.com/dms/image/C4D03AQE3snyWKPrg8w/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=ar5d6_z3151fgJltf0-Fzn5-xCnipVDlZWoM4gppmJ0",
          "https://i.imgur.com/oUOnc18.jpg", "https://i.imgur.com/u0IXBQo.jpg",
           'https://i.imgur.com/OycLaLd.jpg'],
        links: ["https://github.com/GuiTadeu", "https://github.com/VictorGindro","https://github.com/paulosthiven25","","https://github.com/YgorVillela"]
    },
    show:false
  }),mounted(){
      this.show=true;
  }
  ,methods:{
      easterEgg(){
          if(this.clicks===3){
              window.location.href = "https://guitadeu.github.io/ferias/";
          }else{
              //eslint-disable-next-line
              this.clicks++;
          }
      },
      create(){
          //eslint-disable-next-line
          this.$router.push("/criar")
      },
      login(){
          this.$router.push("/login")
      },
      github(n){
          window.open(this.people.links[n-1]);
      }
  }
}
 </script>