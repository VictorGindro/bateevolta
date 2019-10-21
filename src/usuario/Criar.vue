<template>
    <v-container fluid fill-height class="background">
        <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
                <v-toolbar class="pt-5" color="rgb(247,245,215)">
                    <v-toolbar-title>
                        <h4>Crie sua conta</h4>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-card-text class="pt-4">
                        <div>
                            <v-form v-model="valid" ref="form">
                                <v-text-field label="Nome" outline color="rgb(70, 180, 199)" v-model="nome"
                                   :rules="nameRules"  required />
                                
                                <v-text-field label="E-mail" outline color="rgb(70, 180, 199)" v-model="email"
                                    :rules="emailRules" required />
                                
                                <v-text-field :rules="cpfRules" label="CPF" v-mask="'###.###.###-##'" outline color="rgb(70, 180, 199)" v-model="cpf"/>
                                
                                <v-text-field label="Senha" outline color="rgb(70, 180, 199)" v-model="password"
                                    :rules="passwordRules" min="8" :append-icon="e1?'visibility_off':'visibility'"
                                    @click:append="()=>(e1=!e1)" :type="e1?'password':'text'" required counter />
                                
                                <v-text-field label="Confirme sua senha" outline color="rgb(70, 180, 199)"
                                    v-model="passwordConfirm" :rules="passwordRules" min="8"
                                    :append-icon="e1?'visibility_off':'visibility'" @click:append="()=>(e1=!e1)"
                                    :type="e1?'password':'text'" required counter />
                                
                                <v-checkbox v-model="checkbox" label="Organizador" color="rgb(70, 180, 199)"/>
                                <v-layout justify-space-between>
                                    <v-btn @click="login">
                                        Faça login
                                    </v-btn>
                                    <v-btn @click="clear">
                                        Clear
                                    </v-btn>
                                    <v-btn @click="submit"
                                        :class="{'grey rgb(70, 180, 199) white--text':valid,disabled:!valid}">
                                        Criar
                                    </v-btn>
                                </v-layout>
                               
                            </v-form>
                        </div>
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
        e1: true,
        valid: false,
        password: "",
        passwordConfirm: "",
        email: "",
        nome: "",
        cpf: "",
        select: null,
        passwordRules: [(v) => !!v || "Digite sua senha"],
        nameRules: [(v) => !!v || "Digite seu nome"],
        emailRules: [(v) => !!v || "Digite seu e-mail",
            (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v) || ' O e-mail Precisa ser válido'
        ],
        cpfRules: [(v) => !!v || "Digite seu Cpf", (v) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v) || 'O cpf precisa ser valido'],
        checkbox: false,
    }),mounted(){
    let self = this
    window.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
          self.submit();
      }
    })
  },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                if(this.checkbox){
                    let user = {
                        "cpf": this.cpf,
                        "email": this.email,
                        "fotoPerfil": "string",
                        "nome": this.nome,
                        "senha": this.password
                    };
                    // eslint-disable-next-line
                    console.log(user);
                    axios.post("https://batevolta-api.herokuapp.com/organizador/cadastrar", user).then((response) => {
                    // eslint-disable-next-line
                    console.log(response);
                    this.$router.push("/listar");
                }).catch((e) => {
                    // eslint-disable-next-line
                    console.log(e.data)
                });
                }else{
                    let user = {
                        "cpf": this.cpf,
                        "email": this.email,
                        "fotoPerfil": "string",
                        "nome": this.nome,
                        "senha": this.password
                    };
                    axios.post("https://batevolta-api.herokuapp.com/turista/cadastrar", user).then((response) => {
                    // eslint-disable-next-line
                    console.log(response);
                    this.$router.push("/listar");
                }).catch((e) => {
                    // eslint-disable-next-line
                    console.log(e)
                });
                }
                
                
            }
        },
        login() {

            this.$router.push("/login");

        },
        clear() {
            this.$refs.form.reset();
        }
    }
}
</script>
<style scoped>
.background{
    background-image:url("../assets/highway.jpg");
    background-size: cover;
}
</style>