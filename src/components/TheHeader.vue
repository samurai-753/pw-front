<template>
    <v-toolbar class="blue darken-2" app>
        <div class="container-header">
            <div class="left-container">
                <v-icon class="menu-icon" @click="toggleDrawer"> menu </v-icon>
                <img @click="goHome" class="img-logo" src="../assets/liquid-letter-s-01.png"/>
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
        goHome() {
            this.$router.push("/")
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
    border-radius: 20px;
    height: 35px;
    width: 35px;
}

.menu-icon:hover{
    background-color: rgb(207, 207, 207, 0.5);
    border-radius: 20px;
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

.img-logo:hover{
    cursor: pointer;
    background-color: rgb(207, 207, 207, 0.1);
    border-radius: 20px;
}
</style>
