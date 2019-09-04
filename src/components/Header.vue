<template>

        <v-navigation-drawer color="rgb(41, 163, 163)" v-model="drawer" app clipped dark>
            <v-list dense>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-anchor</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Menu</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Configurações</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

</template>
<script>
export default {
    data: () => ({
    drawer: false,
  }),
}
</script>