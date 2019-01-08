<template>
    <div class="content-top " :style="'background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),' + img + ';'">
        <div v-show="$route.path != '/' ?  true : false " class="text-center">
            <i class="icon-cus stars"></i>
            <h1>{{ title }}</h1>
        </div>
        <div class="flex-content" v-show="$route.path == '/' ?  true : false ">
            <div class="width-cus">
                <h2>O que você procura?</h2>
                <nav class="navbar-cus">
                    <form class="form-inline">
                        <input class="form-control " type="search" placeholder="Pesquisar produto" aria-label="Search">
                        <button type="submit">Pesquisar</button>
                    </form>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bg-top',
    data: function () {
        return {

        }
    },
    props: [
        'img',
        'title'
        
    ],
    
    created: function () {

    },
    mounted: function () {
        
    },
    methods: {

    },
    computed: {
        link: function () {
            return '/' + this.url

        }

    }
}
</script>

<style scoped>

.content-top{
    min-height: 450px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

}
.stars{
    background-image: url('/static/img/5-stars.png');
    width: 80px;
    height: 16px;
    margin: auto;
}
h1{
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;

}
.navbar-cus{
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    margin: auto;
}
.navbar-cus input{
    margin: 0;
    height: 65px;
    width: 80%;
    border: none;
    font-size: 13px;
    padding: 5px 30px;
    
}
.navbar-cus button{
    margin: 0;
    height: 65px;
    font-weight: 500;
    color: #fff;
    width: 20%;
    background-color: #0855a2;
    border: none;
    font-size: 13px;
    transition: .4s;
    cursor: pointer;
}

.width-cus h2{
    font-weight: 500;
    color: #fff;
}
.navbar-cus button:hover, .navbar-cus button:focus {
    margin: 0;
    height: 65px;
    width: 20%;
    background-color: #156cc4;
}
.flex-content{
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;

}
.width-cus{
    width: 65%;
    text-align: left;
    max-width: 885px;;
}
@media(max-width: 450px){
    .navbar-cus button{
        font-size: 11px;
        width: 30%;
    }
    .navbar-cus input{
        font-size: 11px;
        width: 70%;
    }
    .width-cus{
        width: 90%;
        text-align: left;
        max-width: 885px;;
    }
}
</style>