<template>
    <div class="container">
        <ul>
            <li v-for="(user, index) in users" :key="index">
                <h2>No. {{ index +1 }}</h2>
                <dl>
                    <dt>아이디</dt>
                    <dd>{{user.userid}}</dd>
                    <dt>이름</dt>
                    <dd>{{user.name}}</dd>
                </dl>
            </li>
        </ul>

    </div>
</template>
<style lang="scss" scoped>
li{
    list-style: none;
    
}

</style>
<script>
export default {
    data () {
        return {
            users: []
        }
    },
    created () {
        this.$http.get('/api/users')
            .then((response) => {
                this.users = response.data
            })
    }
}
</script>