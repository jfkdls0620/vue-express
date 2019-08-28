<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-6 col-md-4"></div>
            <div class="col-xs-6 col-md-4 text-center">
                <h1>로그인</h1>
                <div class="input-row">
                    <label for="id">아이디</label>
                    <input type="text" id="id" v-model="user.userid">
                </div>
                <div class="input-row">
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" v-model="user.password">
                </div>
                <button @click="login" class="btn btn-primary">로그인</button><br>
                <div class="input-row">
                    <button class="social-button" @click="googleLogin">구글 로그인</button>
                </div>
                <router-link to="/signUp">가입하기</router-link>
            </div>
            <div class="col-xs-6 col-md-4"></div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'

export default {
    data: function () {
        return {
            user: {
                userid: '',
                password: ''
            }
        }
    },
    methods: {
        login: function (event) {
            this.$http.post('/api/users/login', {
                user: this.user
            })
                .then(
                    (res) => {  //로그인 성공
                        sessionStorage.setItem('user', JSON.stringify(this.user));
                        this.$store.state.user = this.user;
                        this.$router.push('/');
                    },
                    (err) => { // error 를 보여줌
                        alert('로그인실패');
                    })
                .catch(err => {
                    alert(err);
                })
        },
        googleLogin(){
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then((result) => {
                this.$router.replace('/');
            }).catch((err) => {
                alert('error'+ err.message);
            });
        }
    }
}

</script>
<style lang="scss" scoped>
body {
    background-color: #76b852; /* fallback for old browsers */
}
</style>
