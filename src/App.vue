<template>
<div id="app">
    <!-- <Navbar/>
    <Header/>
    <my-header></my-header>
    <my-navbar></my-navbar> -->
 <router-view></router-view>   
</div>

</template>

<script>
// import Navbar from "./components/block/Navbar.vue"
// import Header from  "./components/block/Header.vue"
export default {
    name:'app',
    // components:{
    //     Navbar,
    //     Header
    // }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&family=Lato:wght@400;700&display=swap');
@import "./assets/scss/style.scss";
</style>