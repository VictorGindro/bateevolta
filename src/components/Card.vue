 <template>
     <v-card elevation="24" max-width="225" color="rgb(195,222,233)">
         <v-system-bar color="rgb(247,245,215)" lights-on height="50" class="justify-center">
             <v-btn icon color="white">
                 <v-icon color="rgb(70, 180, 199)">supervisor_account</v-icon>
             </v-btn>
             <!-- <v-spacer/> -->
             <div>Kevin</div>
             <v-spacer />
             <div class="mt-1">
                 <v-list-item-subtitle class="fill-height">Ida: 16/12/2020</v-list-item-subtitle>
                 <v-list-item-subtitle class="fill-height">Volta: 19/12/2020</v-list-item-subtitle>
             </div>
         </v-system-bar>
         <v-list two-line>
             <v-img aspect-ratio="2.00" src="https://wallpaperbro.com/img/212940.jpg">
                 <v-list-item>
                     <v-list-item-avatar>
                         <Popup />
                     </v-list-item-avatar>
                     <v-list-item-content>
                         <v-list-item-title class="fill-height" align="center" justify="center">Santos
                         </v-list-item-title>
                         <v-list-item-title class="fill-height" align="center" justify="center">Praia Grande
                         </v-list-item-title>
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
  export default {
        components: {
    Popup
  },
    data () {
      return {
        slides: [
          'First',
        ],
        colors:[
            '#72DFD0',
        ]
      }
    },
  }
</script>
<style scoped>
.background{
    background-image: url("https://wallpaperbro.com/img/212940.jpg");
    color: rgb(70, 180, 199);
}
</style>