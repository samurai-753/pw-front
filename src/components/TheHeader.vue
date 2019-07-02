<template>
    <v-toolbar class="blue darken-2" app>
        <div class="container-header">
            <div class="left-container">
                <v-icon class="menu-icon" @click="toggleDrawer"> menu </v-icon>
                <router-link to="/">
                    <img class="img-logo" src="../assets/liquid-letter-s-01.png"/>
                </router-link>
            </div>
            <div>
                <the-login/>
            </div>
        </div>
    </v-toolbar>
</template>

<script>

import TheLogin from "./TheLogin"
import { mapActions } from 'vuex'


export default {
    name: 'TheHeader',
    components: {
        TheLogin
    },
    data () {
        return {
        }
    },
    methods: {
        toggleDrawer() {
            this.toggleDrawer()
        },
        ...mapActions(['toggleDrawer'])
    }
}
</script>

<style scoped>
.container-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.menu-icon {
    margin-right: 10px;
}

.left-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.img-logo {
    width: 50px;
    margin-left: 10px;
}
</style>
