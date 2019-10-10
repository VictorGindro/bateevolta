<template>
    <v-container fluid fill-height class="background">
        <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
                <v-toolbar class="pt-5" color="rgb(247,245,215)">
                    <v-toolbar-title>
                        <h4>Nova Viagem</h4>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card>
                    
                    <v-card-title>
                        <span class="headline">Informações sobre a Viagem</span>
                        
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-form>
                                <v-text-field label="Titulo da viagem"/>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Data De Ida"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Data de volta"/>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Orgaizador"/>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Descrição" auto-grow outlined placeholder="Digite algo aqui"/>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field label="Ponto de saída"/>
                                    <v-text-field label="Ponto de chegada"/>
                                </v-col>
                                <v-col cols="6">
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
export default {
      data: () => ({
    save:false
    
  }),methods:{
      salvar(){
          this.$router.push("/listar");
      },
  }
}
</script>