<template>
    <v-container fluid fill-height class="criar">
        <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
                <v-toolbar class="pt-5" color="rgb(247,245,215)">
                    <v-toolbar-title>
                        <h4>Criar uma conta</h4>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-card-text class="pt-4">
                        <div>
                            <v-form ref="form">
                                <v-text-field label="Nome" outline color="rgb(70, 180, 199)" v-model="nome"  required/>
                                <v-divider/>
                                <v-text-field label="E-mail" outline color="rgb(70, 180, 199)" v-model="email" :rules="emailRules" required/>
                                <v-divider/>
                                 <v-text-field label="Senha" outline color="rgb(70, 180, 199)" v-model="password" :rules="passwordRules" min="8"
                                 :append-icon="e1?'visibility_off':'visibility'" @click:append="()=>(e1=!e1)" :type="e1?'password':'text'" required counter/><!-- prepend-icon="visibility"-->
                                <v-text-field label="Confirme sua senha" outline color="rgb(70, 180, 199)" v-model="passwordConfirm" :rules="passwordRules" min="8"
                                 :append-icon="e1?'visibility_off':'visibility'" @click:append="()=>(e1=!e1)" :type="e1?'password':'text'"  required counter/><!-- prepend-icon="visibility"-->
                                <v-divider/>
                                <!--<v-select outline color="rgb(70, 180, 199)" v-model="select" :items="items" label="Select" required></v-select>-->
                                 <v-checkbox v-model="checkbox" v-validate="'required'" value="1" label="Organizador" type="checkbox" required></v-checkbox> 
                                <v-layout justify-space-between>
                                <v-btn class="mr-4" @click="submit">Cadastrar</v-btn>
                                <v-btn @click="clear">Limpar</v-btn>
                                <v-btn class="mr-4" @click="login">Login</v-btn>
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
    export default {
        data: () => ({
            e1: true,
            valid: false,
            password: "",
            passwordConfirm: "",
            email: "",
            nome:"",
            select: null,
            items: [
                'Turista',
                'Organizador',
                'Ambos'
            ],
            passwordRules: [(v) => !!v || "Digite sua senha"],
            emailRules: [(v) => !!v || "Digite seu e-mail",
                (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v) || ' O e-mail Precisa ser válido'
            ],
            checkbox: false,
        }),methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    this.$router.push("/listar");
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