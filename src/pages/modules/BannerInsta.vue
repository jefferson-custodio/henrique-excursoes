<template>
    <div class="banner-insta ">
        <div class="banner-content container">
            <h2>últimas Viagens</h2>
            <span><i class="fab fa-instagram"></i> @henriqueexcusoes</span>
            <div class="row">
                <div class="col-md-8">
                    <div class="slider-inta">
                        <div class="item-slider" v-for="(item, index) in idImgs" :key="index"><a target="_blank" :href="item.link"><span class="local" v-if="item.location == null ? false : true "> {{ item.location.name }} </span> <span class="descricao" v-if="item.caption == null ? false : true ">{{ item.caption.text }}</span><img :src="item.images.standard_resolution.url" alt="imagem do instagram"></a></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="slider-inta-nav">
                        <div class="item-slider-nav"  v-for="(item, index) in idImgs" :key="index"><img :src="item.images.standard_resolution.url" alt="imagem do instagram"></div>
                    </div>
                </div>
            </div>
            <div class="wrap-button">
                <div class="button-inta button">
                   <a class="button-a" href="https://www.instagram.com/henriqueexcursoes/"><i class="fab fa-instagram"></i>Instagram</a> 
                </div>
                <div class="button-face button">
                    <a class="button-a" href="#"><i class="fab fa-facebook-f"></i>Facebook</a>
                </div>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
.banner-content {
    text-align: center;
    color: #fff;
}
.banner-content h2{
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 800;
}
.banner-content i {
    padding-bottom: 40px;
}
.banner-insta{
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/static/img/onibus-estrada.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    padding: 60px 20px;
}
.slider-inta {
    max-width: 540px;
    max-height: 540px;
    display: block;
    margin: 10px auto;
}
.slider-inta img {
    display: block !important;
    width: 100%;
    margin: auto;
    border-radius: 5px;
    object-fit: cover;
}
.slider-inta-nav {
    max-height: 550px;
    padding-top: 8px;
    overflow: hidden;
}
.slider-inta-nav img{
    max-height: 202px;
    margin: auto;
}
.wrap-button {
    max-width: 800px;
    display: block;
    margin: auto;
    padding-top: 30px;
}
.wrap-button .button {
    border-radius: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
} 
.wrap-button .button a{
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
}
.wrap-button .button:nth-of-type(2) a{
    background: linear-gradient(45deg, #3B5998 0%,  rgb(26, 40, 70) 100%)
}
.wrap-button .button i{
    padding: 2px 6px 0 0;
}
.item-slider {
    position: relative;
}
.item-slider .local{
    top: 0;
    right: 0;
    position: absolute;
    color: #fff;
    font-weight: 600;
    padding: 10px;
    text-shadow: 0 0 10px #000;
}
.item-slider .descricao {
    position: absolute;
    color: #fff;
    font-weight: 600;
    padding: 10px;
    text-shadow: 0 0 10px #000;
    left: 0;
    bottom: 0;
}
</style>
<script>
export default {
data: function () {
return {
}
},
props: [

],
data: function () {
return {
    idImgs: [],
}
},
created: function () {

},
mounted: function () {
    this.getInstaCarro()
},
methods: {
    getInstaCarro(){
      this.$http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=10346380246.4e1b17b.e23bfc3c8edb436eb47af87b8d09105e')
      .then((response) =>{
        var instaImgs = response.body.data;
        if (instaImgs.length >= 25) {
            instaImgs = instaImgs.slice(0, 25);
        }
        this.idImgs = instaImgs;
        console.log(this.idImgs);
        this.$nextTick(() => {
        this.initSlider();
    });

      }, (response)=>{
        console.log('Erro em obter arquivos');
        console.log(response);
      })
    },

    initSlider: function () {
    $('.slider-inta').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.slider-inta-nav',
        nextArrow: '<button class="slick-next" type="button"><i style="color: #fff; font-size: 25px;" class="fas fa-angle-right"></i></button>   ',
        prevArrow: '<button class="slick-prev" type="button" ><i style="color: #fff; font-size: 25px;" class="fas fa-angle-left"></i></button>',
    });
        $('.slider-inta-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-inta',
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
         responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        vertical: false,
        verticalSwiping: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      }
    }
  ]
});
    }
},
computed: {

}
}
</script>

