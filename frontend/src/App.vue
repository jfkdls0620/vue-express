<template>
      <div id="app">
          <div class="container">
              <Slide class="slider">
                  <ul>
                      <li><router-link to="/">Home</router-link></li>
                      <li>
                          <button v-if="$store.getters.getUser" @click="logout">로그아웃</button>
                          <router-link v-else to="/login">로그인</router-link>
                      </li>
                      <!--<li><router-link to="/userlist">UserList</router-link></li>-->
                      <li><router-link to="/list">list</router-link></li>
                  </ul>
              </Slide>
              <transition name="page" mode="out-in">
                <router-view></router-view>
              </transition>
          </div>
      </div>
</template>
<style>
.bm-item-list{
    margin-left: 0 !important;
}
</style>
<script>
import { Slide } from 'vue-burger-menu'
export default {
    data() {
        return {

        }
    },
    components: {
        Slide // Register your component
    },
    methods: {
        logout() {
            this.$http.get('/api/users/logout').then((res) => {
                sessionStorage.removeItem('user');
                this.$store.state.user = null;
            }).catch((err) => {
                console.dir(err);
            })
        }
    },

    created() {
        this.$http.get('/api/users').then((res) => {
            const user = res.data;

            if (user.userid) {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$store.state.user = user;
                // this.$router.push('/');
            }
        }).catch((err) => {
            console.dir(err);
        })
    }
}
</script>

<style lang="scss" scoped>

label {cursor:pointer}

.slider{
    ul{
        display: block;
        width: 100%;
        min-width: 300px;
        li{
            margin-bottom: 20px;
            button{
                color: #fff;
                font-size:20px;
                background-color: transparent;
                border:0;
            }
            a{
                color: #fff;
                font-size:20px;
            }
        }
    }
}

.container{
    text-align: center;
    padding: 50px 0;
}
.page-enter-active, .page-leave-active {
    transition: opacity .8s, transform .8s;
}
.page-enter, .page-leave-to {
    opacity: 0;
    transform: translateX(-30%);
}
</style>
