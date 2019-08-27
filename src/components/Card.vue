<template>
    <v-card elevation="24" max-width="220" color="rgb(195,222,233)">
        <v-system-bar color="rgb(247,245,215)" lights-on height="50" class="justify-center">
            <v-btn icon="supervisor_account"  color="white">
                <v-icon color="rgb(70, 180, 199)">supervisor_account</v-icon>
            </v-btn>
            <!-- <v-spacer/> -->
            <div>Kevin</div>
            <v-spacer/>
            <div>17/09/2020</div>
        </v-system-bar >
        <v-list two-line>
            <v-img src="https://wallpaperbro.com/img/212940.jpg">
            <v-list-item dark>
                <v-list-item-avatar>
                    <v-btn class="mx-2" fab small color="white">
                        <v-icon color="rgb(70, 180, 199)">directions_bus</v-icon>
                    </v-btn>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="fill-height" align="center" justify="center">Santos</v-list-item-title>
                    <v-list-item-subtitle  class="fill-height" align="center" justify="center">Praia Grande
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                </v-list-item-action>
            </v-list-item>
            </v-img>
        </v-list>
    </v-card>
</template>

<script>
  export default {
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