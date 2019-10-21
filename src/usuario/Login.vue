<template>
    <v-container fluid fill-height class="background">
        <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
                <v-toolbar class="pt-5" color="rgb(247,245,215)">
                    <v-toolbar-title>
                        <h4>Bem Vindo de volta!</h4>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-card-text class="pt-4">
                        <div>
                            <v-form v-model="valid" ref="form">
                                <v-text-field label="E-mail" outline color="rgb(70, 180, 199)" v-model="email"
                                    :rules="emailRules" required />
                                <v-text-field label="Password" outline color="rgb(70, 180, 199)" v-model="password"
                                    :rules="passwordRules" min="8" :append-icon="e1?'visibility_off':'visibility'"
                                    @click:append="()=>(e1=!e1)" :type="e1?'password':'text'" required counter />
                                <!-- prepend-icon="visibility"-->
                                <v-layout justify-space-between>

                                    <v-btn @click="cadastro">
                                        Cadastre-se
                                    </v-btn>


                                    <v-btn @click="clear">
                                        Clear
                                    </v-btn>
                                    <v-btn @click="submit"
                                        :class="{'grey rgb(70, 180, 199) white--text':valid,disabled:!valid}">
                                        Login
                                    </v-btn>


                                    <v-snackbar v-model="snackbar" color="teal" :timeout="2500">
                                        Login ou senha incorretos! Por favor tente novamente.
                                    </v-snackbar>
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
        email: "",
        passwordRules: [(v) => !!v || "Digite sua senha"],
        emailRules: [(v) => !!v || "Digite seu e-mail",
            (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v) || ' O e-mail Precisa ser válido'
        ],
        snackbar:false

    }),mounted(){
    let self = this
    window.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
          self.submit();
      }
    })
  },methods:{
        submit() {
            if (this.$refs.form.validate()) {

                axios.post("http://batevolta-api.herokuapp.com/auth", {
                    "email": this.email,
                    "password": this.password
                }).then((response) => {
                    this.$store.dispatch('login', response.data.token).then(() => {
                        // eslint-disable-next-line no-console
                        this.$router.push("/listar");
                        axios.get("http://batevolta-api.herokuapp.com/token/getUser", {
                            "headers": {
                                Authorization: 'Bearer ' + this.$store.getters.user.token
                            }
                        }).then((response) => {
                            response.data.token = this.$store.getters.user.token
                            this.$store.dispatch('saveUser', response.data).then(() => {
                                // eslint-disable-next-line no-console
                                console.log(this.$store.getters.user);
                            })
                        }).catch((error) => {
                            // eslint-disable-next-line no-console
                            console.log(error);
                        });
                    }, error => {
                        // eslint-disable-next-line no-console
                        console.log(error);
                    });
                }).catch(
                    () => {
                        this.snackbar = true;
                    });
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
<style scoped>
.background{
    background-image:url("../assets/highway.jpg");
    background-size: cover;
}
</style>