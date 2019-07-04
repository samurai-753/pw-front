<template>
    <v-toolbar class="blue darken-2" app>
        <div class="container-header">
            <div class="left-container">
                <v-icon class="menu-icon" @click="toggleDrawer"> menu </v-icon>
                <img @click="goHome" class="img-logo" src="../assets/liquid-letter-s-01.png"/>
            </div>
            <div v-if="this.userToken === null">
                <the-login/>
            </div>
            <div class="teste" v-else>
                <v-icon medium dark>account_circle</v-icon>
                <p class="white--text nome font-weight-bold">{{this.userName}}</p>
                <v-icon dark class="menu-icon" @click="doLogout"> exit_to_app </v-icon>
            </div>
        </div>
    </v-toolbar>
</template>

<script>

import TheLogin from "./TheLogin"
import { mapActions, mapState } from 'vuex'


export default {
    name: 'TheHeader',
    components: {
        TheLogin
    },
    computed: {
        ...mapState({
            userToken: state => state.userToken,
            userName: state => state.userName
        })
    },
    data () {
        return {
        }
    },
    methods: {
        toggleDrawer() {
            this.toggleDrawer()
        },
        doLogout() {
            // this.$router.push("/")
            this.logout()
            this.$router.push("/")
        },
        goHome() {
            this.$router.push("/")
        },
        ...mapActions(['toggleDrawer', 'logout'])
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

.nome{
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 0px;
    margin-left: 3px;
    margin-right: 20px;
}

.teste {
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    
}

</style>
