<template>
    <v-container fluid fill-height class="background">
        <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
                <v-toolbar class="pt-5" color="rgb(247,245,215)">
                    <v-toolbar-title>
                        <h4>Nova Viagem</h4>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card >
                    
                    <v-card-title>
                        <span class="headline">Informações sobre a Viagem</span>
                        
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-form>
                                <v-text-field label="Titulo da viagem" v-model="nome"/>
                            <v-row>
                                <v-col cols="12"  sm="12">
                                    <v-date-picker v-model="dates" no-title="" full-width color="teal" locale="pt" multiple ></v-date-picker>
                                    <v-col cols="12" sm="12">
                                        <v-text-field v-model="dateRangeText" label="Data saida ~ Data Chegada" prepend-icon="event" readonly></v-text-field>
                                    </v-col>
                                </v-col>    
                                <v-col cols="12">
                                    
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Descrição" auto-grow outlined placeholder="Adicione uma descrição" v-model="descricao"/>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field label="Quantidade de vagas" v-model="qtdVagas"/>
                                    <v-text-field label="Preço" v-model="preco"/>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field label="Ponto de Embarque" v-model="pontosEmbarques"/>
                                    <v-layout justify-space-between>
                                        <v-dialog v-model="save" v-if=" this.$router.history.current.path !='/compras'"
                                            max-width="200px">
                                            <template v-slot:activator="{ on }">
                                                <v-btn class="mx-2"  v-on="on"  large color="white">
                                                    Salvar Viagem
                                                </v-btn>
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                    <span class="headline text-center">Salvar Viagem?</span>
                                                </v-card-title>
                                                <v-card-actions>
                                                    <v-layout justify-center class="my-2">
                                                        <v-btn @click="salvar">Sim</v-btn>
                                                        <v-btn @click="save=!save">Não</v-btn>
                                                    </v-layout>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-layout>
                                </v-col>
                                <v-col cols="12" sm="6">

                                </v-col>
                            </v-row>
                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
      data: () => ({
    save:false,
    descricao:"",
    fotoDestaque:"",
    idOrganizador:"",
    nome:"",
    pontosEmbarques:'',
    preco:0,
    qtdVagas:0,
    dates:[]

    
  }),beforeUpdate(){
      if(this.dates.length>2){
        this.dates=[this.dates[2]];
      }
  },computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },methods:{
      salvar(){
          axios.post("http://batevolta-api.herokuapp.com/viagem/cadastrar", {
              "dataChegada": this.dates[1],
              "dataSaida": this.dates[0],
              "descricao": this.descricao,
              "fotoDestaque": this.descricao,
              "idOrganizador": this.$store.getters.user.id,
              "nome": this.nome,
              "pontosEmbarques": [
                  this.pontosEmbarques
              ],
              "preco": this.preco,
              "qtdVagas": this.qtdVagas
          }, {
              "headers": {
                  Authorization: 'Bearer ' + this.$store.getters.user.token
              }
          }).then((response) => {
              // eslint-disable-next-line no-console
              console.log(response);
              this.save = false
              this.$router.push("/listar");
          }).catch((e) => {
              // eslint-disable-next-line no-console
              console.log(e);
          });

          //this.$router.push("/listar");
      },
  }
}
</script>