<template>
    <div class="wrap">
        <h1>5월 마지막주 영화 예매 순위</h1>
        <ul class="movies">
            <li v-for="movie in movies" v-bind:key="movie.id" class="item">
                <router-link :to="{ name: 'show', params: { id: movie.id }}" class="img-box">
                    <span class="rank">{{movie.id}}</span>
                    <img v-bind:src="movie.poster" class="poster">
                </router-link>
                <div class="detail">
                    <strong class="tit">{{movie.name}}</strong><br>
                    <span class="rate">예매율 <span class="num">{{movie.rate}}</span></span><br>
                    <router-link :to="{ name: 'show', params: { id: movie.id }}" class="link">자세히보기</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created () {
        // 컴포넌트가 생성될 때, /api/movies에 요청을 보냅니다.
        this.$http.get('/api/movies')
            .then((response) => {
                this.movies = response.data
            })
    },
    data () {
        return {
            movies: []
        }
    }
}
</script>

<style>
ul.movies{padding: 0;margin: 0;}
ul.movies li{display: inline-block;list-style: none;margin:0 20px;}
ul.movies li .img-box{position:relative;display: block;}
ul.movies li .img-box span{display: block;position:absolute;top:0;left:0;background-color:#000;color: #fff;padding: 5px;font-weight: bold;}
</style>