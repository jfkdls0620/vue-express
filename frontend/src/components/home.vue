<template>
    <div class="container">
        <div v-if="getUser">
            <h1><img src="../assets/logo.png" alt=""></h1>
            <!--<ul>-->
                <!--<li v-for="(user, key) in getUser" :key="key">{{ key +":" + user }}</li>-->
            <!--</ul>-->
            <p>ㅎㅇ {{ getUser.userid }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            getUser() {
                return this.$store.getters.getUser
            }
        }
    }
</script>