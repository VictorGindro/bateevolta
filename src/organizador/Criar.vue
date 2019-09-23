<template>
    <v-container fluid fill-height class="login">
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
                                <v-divider />
                                <v-text-field label="E-mail" outline color="rgb(70, 180, 199)" v-model="email"
                                    :rules="emailRules" required />
                                <v-divider />
                                <v-text-field :rules="cpfRules" label="CPF" outline color="rgb(70, 180, 199)" v-model="cpf"/>
                                <!-- <v-text-field label="Senha" outline color="rgb(70, 180, 199)" v-model="password"
                                    :rules="passwordRules" min="8" :append-icon="e1?'visibility_off':'visibility'"
                                    @click:append="()=>(e1=!e1)" :type="e1?'password':'text'" required counter />
                                
                                <v-text-field label="Confirme sua senha" outline color="rgb(70, 180, 199)"
                                    v-model="passwordConfirm" :rules="passwordRules" min="8"
                                    :append-icon="e1?'visibility_off':'visibility'" @click:append="()=>(e1=!e1)"
                                    :type="e1?'password':'text'" required counter /> -->
                                <v-divider />
                                <v-checkbox label="Organizador" color="rgb(70, 180, 199)"/>
                                <v-layout justify-space-between>

                                    <v-btn @click="submit"
                                        :class="{'grey rgb(70, 180, 199) white--text':valid,disabled:!valid}">
                                        Login
                                    </v-btn>

                                    <v-btn @click="clear">
                                        Clear
                                    </v-btn>

                                    <v-btn>
                                        Forgot Password?
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
        items: [
            'Turista',
            'Organizador',
            'Ambos'
        ],
        passwordRules: [(v) => !!v || "Digite sua senha"],
        nameRules: [(v) => !!v || "Digite seu nome"],
        emailRules: [(v) => !!v || "Digite seu e-mail",
            (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v) || ' O e-mail Precisa ser válido'
        ],
        cpfRules: [(v) => !!v || "Digite seu Cpf", (v) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v) || 'O cpf precisa ser valido'],
        checkbox: false,
    }),
    methods: {
        submit() {
            //if (this.$refs.form.validate()) {
                // eslint-disable-next-line
                axios.post("http://batevolta-api.herokuapp.com/organizador/create", {}, {
                    "cpf": this.cpf,
                    "email": this.email,
                    "fotoPerfil": "string",
                    "nome": this.nome
                }).then((response) => {
                    // eslint-disable-next-line
                    console.log(response);
                }).catch((e) => {
                    // eslint-disable-next-line
                    console.log(e)
                });
                this.$router.push("/listar");
            //}
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