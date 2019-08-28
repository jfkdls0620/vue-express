<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-6 col-md-4"></div>
            <div class="col-xs-6 col-md-4 text-center">
                <h1>회원가입</h1>
                <div class="input-row">
                    <label for="id">아이디</label>
                    <input type="text" id="id" v-model="user.userid">
                </div>
                <div class="input-row">
                    <label for="name">이름</label>
                    <input type="text" id="name" v-model="user.name">
                </div>
                <div class="input-row">
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" v-model="user.password">
                </div>
                <button @click="signUp" class="btn btn-primary">가입하기</button>
            </div>
            <div class="col-xs-6 col-md-4"></div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user: {
                userid: '',
                name: '',
                password: ''
            }
        }
    },
    methods: {
        signUp: function (event) {
            this.$http.post('/api/users/signUp', {
                user: this.user
            })
                .then((res) => {
                    if (res.data.success == true) {
                        alert(res.data.message);
                        this.$router.push('/login')
                    }
                    if (res.data.success == false) {
                        alert(res.data.message);
                    }
                })
                .catch(function (error) {
                    console.dir(error);
                })
        }
    }
}
</script>