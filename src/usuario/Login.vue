<template>
    <v-container fluid fill-height class="login">
        <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
                <v-toolbar class="pt-5" color="rgb(247,245,215)" >
                    <v-toolbar-title>
                        <h4>Bem Vindo de volta!</h4>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-card-text class="pt-4">
                        <div>
                            <v-form v-model="valid" ref="form">
                                <v-text-field label="E-mail" outline color="rgb(70, 180, 199)" v-model="email" :rules="emailRules" required/>
                                <v-text-field label="Password" outline color="rgb(70, 180, 199)" v-model="password" :rules="passwordRules" min="8"
                                 :append-icon="e1?'visibility_off':'visibility'" @click:append="()=>(e1=!e1)" :type="e1?'password':'text'" required counter/><!-- prepend-icon="visibility"-->
                                <v-layout justify-space-between>

                                    <v-btn @click="submit" :class="{'grey rgb(70, 180, 199) white--text':valid,disabled:!valid}">
                                        Login
                                    </v-btn>

                                    <v-btn @click="clear">
                                        Clear
                                    </v-btn>
                                    <v-btn @click="cadastro">
                                        Cadastre-se
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
export default {
    data: () => ({
        e1: true,
        valid: false,
        password: "",
        email: "",
        passwordRules: [(v) => !!v || "Digite sua senha"],
        emailRules: [(v) => !!v || "Digite seu e-mail",
            (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v) || ' O e-mail Precisa ser válido'
        ]

    }),methods:{
        submit() {
            if (this.$refs.form.validate()) {
                    this.$router.push("/listar");
            }
        },
        clear() {
            this.$refs.form.reset();
        },
        cadastro(){
            this.$router.push("/criar");
        }
    }
}
</script>