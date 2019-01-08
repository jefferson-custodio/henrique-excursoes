<template>
    <div class="banner-static " :style="'background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),' + img + ';'">
        <div class="content-banner-s" >
            <div class="row">
                <router-link :to="'/'" tag="div" style="background-color: #fff;" class="col-md-4 flex-s">
                    <h2>Chapas e Bobinas</h2>
                    <div class="arrow-custom-bottom"></div>
                </router-link>
                <div class="col-md-4" style="background-image: url('/static/img/banner-static1.png');">

                </div>
                <router-link :to="'/'" tag="div" style="background-color: #fff;" class="col-md-4 flex-s">
                    <h2>Outros Produtos</h2>
                    <div class="arrow-custom-bottom"></div>
                </router-link>
            </div>
            <div class="row">
                <div class="col-md-4" style="background-image: url('/static/img/banner-static2.png');">

                </div>
                <router-link :to="'/'" tag="div" style="background-color: #fff;" class="col-md-4 flex-s">
                    <div class="arrow-custom-top"></div>
                    <h2>Conexões</h2>
                </router-link>
                <div class="col-md-4" style="background-image: url('/static/img/banner-static3.png');">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'noticia-md',
data: function () {
return {
}
},
props: [
    'img',
],
data: function () {
return {
}
},
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
.banner-static .row{
    margin: 0;
}
h2{
    text-align: center;
    font-weight: 700;
    color: #0855a2;
}
.banner-static{
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    display: flex;
    align-items: center;
    justify-content: center;
    

}
.content-banner-s{
    height: 500px;
    width: 75%;
    max-width: 885px;
    overflow: hidden;
}
.flex-s{
    display: flex;
    align-items: center;
    justify-content: center;
}
.content-banner-s .col-md-4{
    height: 100%;
    position: relative;
    transition: .4s;
    background-repeat: no-repeat;
    background-size: cover;
}
.content-banner-s .row:nth-of-type(1) .col-md-4:nth-child(odd){
    z-index: 8;
    
}
.content-banner-s .row:nth-of-type(1) .col-md-4:nth-child(odd):hover{
    height: 120%;
    z-index: 8;
    background: #0855a2!important;
    
}
.content-banner-s .row:nth-of-type(1) .col-md-4:nth-child(odd):hover .arrow-custom-bottom{
    border-top-color: #0855a2!important;
    
}
.content-banner-s .row:nth-of-type(1) .col-md-4:nth-child(odd):hover h2{
    color: #ffff;
}

.content-banner-s .row:nth-of-type(2) .col-md-4:nth-child(even){
    z-index: 8;
    height: 100%;
    
}
.content-banner-s .row:nth-of-type(2) .col-md-4:nth-child(even):hover{
    height: 120%;
    z-index: 8;
    transform: translateY(-50px);
    background: #0855a2!important;
    
}
.content-banner-s .row:nth-of-type(2) .col-md-4:nth-child(even):hover .arrow-custom-top{
    border-bottom-color: #0855a2!important;
    
}
.content-banner-s .row:nth-of-type(2) .col-md-4:nth-child(even):hover h2{
    color: #ffff;
}
.content-banner-s .row{
    height: 50%;;
}
.arrow-custom-bottom{
    width: 0;
    height: 0;
    border: 35px solid #0855a2;
    border-color: transparent;
    border-top-color: #ffffff;
    position: absolute;
    bottom: -60px;
    z-index: 9;
    transition: .4s
}
.arrow-custom-top{
    width: 0;
    height: 0;
    border: 35px solid #0855a2;
    border-color: transparent;
    border-bottom-color: #fff;
    position: absolute;
    top: -60px;
    z-index: 9;
    transition: .4s
}
@media(max-width: 767px){

    .content-banner-s .col-md-4{
        height: 34%;
        position: relative;
        transition: .4s;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .content-banner-s .row:nth-of-type(1) .col-md-4:nth-child(odd):hover{
        height: 45%;
        z-index: 8;
        background: #0855a2!important;
    }
    .content-banner-s .row:nth-of-type(2) .col-md-4:nth-child(even){
        z-index: 8;
        height: 34%;
        
    }
    .content-banner-s .row:nth-of-type(2) .col-md-4:nth-child(even):hover{
        height: 45%;
        z-index: 8;
        transform: translateY(0px);
        background: #0855a2!important;
        
    }
    .content-banner-s .row:nth-of-type(2) .col-md-4:nth-child(even) .arrow-custom-top{
        transform: rotate(180deg);
        top: 75px;
    }
    .content-banner-s .row:nth-of-type(2) .col-md-4:nth-child(even):hover .arrow-custom-top{
        transform: rotate(180deg);
        top: 103px;
    }
}
</style>