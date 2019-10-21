 <template>
     <v-card  elevation="24" class="mx" height="200" width="350" color="rgb(195,222,233)">
         <v-system-bar color="rgb(247,245,215)" lights-on height="50" class="justify-center">
                 <v-icon color="rgb(70, 180, 199)" large>commute</v-icon>
             <v-spacer />
             <div v-if="this.$router.history.current.path !='/turista/compras'" class="mt-1">
                 <v-list-item-subtitle class="fill-height" ><v-icon>local_atm</v-icon> {{viagem.preco}} R$</v-list-item-subtitle>
                 <v-list-item-subtitle class="fill-height" ><v-icon>airline_seat_legroom_reduced</v-icon> {{viagem.qtdVagas}} vagas</v-list-item-subtitle>
             </div>
             <div v-else>
                 <v-list-item-subtitle class="fill-height" ><v-icon>event</v-icon> {{viagem.dataViagem}}</v-list-item-subtitle>
                 <v-list-item-subtitle class="fill-height" ><v-icon>person</v-icon> {{viagem.nomeOrganizador}}</v-list-item-subtitle>
             </div>
         </v-system-bar>
         <v-list two-line>
             <v-img aspect-ratio="2.00" v-if="this.$router.history.current.path !='/turista/compras'" class="teal" :src="viagem.fotoDestaque">
                 <v-list-item>
                     <v-list-item-avatar>
                         <Popup :id="viagem.id" />
                     </v-list-item-avatar>
                     <v-list-item-content >
                         <v-card  class="fill-height" align="center" justify="center">{{viagem.nome}}
                         </v-card>
                         <v-card class="fill-height" color="white" align="center" justify="center">{{viagem.descricao}}
                         </v-card>
                     </v-list-item-content>
                     <v-list-item-action>
                     </v-list-item-action>
                 </v-list-item>
             </v-img>
             <v-img aspect-ratio="2.00" v-else class="teal" :src="viagem.fotoViagem">
                 <v-list-item>
                     <v-list-item-avatar>
                     </v-list-item-avatar>
                     <v-list-item-content >
                         <v-card  class="fill-height" align="center" justify="center">{{viagem.nomeViagem}}
                         </v-card>
                         <v-card class="fill-height" color="white" align="center" justify="center">QR Code: {{viagem.qrCode}}
                         </v-card>
                     </v-list-item-content>
                     <v-list-item-action>
                     </v-list-item-action>
                 </v-list-item>
             </v-img>
         </v-list>
     </v-card>
 </template>

<script>
import Popup from './Popup'
import axios from 'axios'
  export default {
        components: {
    Popup
  },
    data () {
      return {
      }
    },props:{
        viagem: Object,
    },methods:{
        getViagem(id){
            // eslint-disable-next-line
            axios.get("https://batevolta-api.herokuapp.com/viagem/"+id).then((response)=>{console.log(response.data)}).catch((e)=>{console.log(e)});
        }
    }
  }
</script>
<style scoped>
.background{
    background-image: url("httpss://wallpaperbro.com/img/212940.jpg");
    color: rgb(70, 180, 199);
}
</style>