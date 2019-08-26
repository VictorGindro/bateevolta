<template>
    <v-card elevation="24" max-width="225" color="#CEF7F5">
        <v-system-bar lights-out height="50" class="justify-center">
            <v-btn icon="supervisor_account"  color="white">
                <v-icon color="teal">supervisor_account</v-icon>
            </v-btn>
            <!-- <v-spacer/> -->
            <div>Kevin</div>
        </v-system-bar>
        <v-list color="rgb(247, 245, 215)" two-line>
            <v-list-item>
                <v-list-item-avatar>
                    <v-btn class="mx-2" fab small color="white">
                        <v-icon color="teal">directions_bus</v-icon>
                    </v-btn>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="fill-height" align="center" justify="center">Santos</v-list-item-title>
                    <v-list-item-subtitle class="fill-height" align="center" justify="center">Praia Grande
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                </v-list-item-action>
            </v-list-item>
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
    background-color:#CEF7F5;
    color: rgb(247, 245, 215);
}
</style>