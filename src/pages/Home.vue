<template>
  <div class="home">
    <section class="top-pag">
      <div class="wrap-top-content">
        <div class="top-content">
        <div class="content-left">
          <div class="logo-hen">
            <h1><span>Henrique</span> <br> Excursões</h1>
          </div>
        </div>
        <div class="content-right">
          <div class="carro-top">
            <div class="carro-top-content">
              <figure>
                <img src="/static/img/bus.png" alt="onibus">
                <figcaption>Ônibus Executivos !</figcaption>
              </figure>
            </div>
            <div class="carro-top-content">
              <figure>
                <img src="/static/img/Safe.png" alt="segurança">
                <figcaption>Garantia de Segurança !</figcaption>
              </figure>
            </div>
            <div class="carro-top-content">
              <figure>
                <img src="/static/img/pig.png" alt="cofre">
                <figcaption>Preços Que Cabem No Seu Bolso !</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </section>
    <div class="padding"></div>
    <div class="promo promo-1">
      <div class="container">
        <h2>Querendo embarcar em uma Excursão ?</h2>
        <p>Então não perca mais tempo !</p>
        <li><router-link class="button-a" :to="'/pacotes'">Pacotes de Viagem</router-link></li>
      </div>
    </div>
    <div class="padding"></div>
    <section class="content-after-promo">
      <div class="container">
        <div class="row">
          <div class="col-md-6 about-us">
            <h2>Sobre a empresa <strong>Henrique Excursões</strong></h2>
            <p><strong>Henrique Excursões</strong> é uma empresa localizada em <strong>Mauá - SP</strong> focada em <strong>Excursões</strong> para diversos lugares como <strong>Prais</strong> e <strong> Parques Aquáticos</strong></p>
            <p>Nossas Viagens são <strong>Confortáveis</strong> e <strong>Seguras</strong>, Desfrutando do conforto e Segurança dos Ônibus da <router-link :to="'/frota-turistica'">Nossa Frota Turistica Particular</router-link> </p>
          </div>
          <div class="col-md-6">
            <div class="about-icon-right">
              <i class="fas fa-map-marked-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="padding"></div>
    <div class="content-after-ap">
      <banner-insta></banner-insta>
    </div>
  </div>
</template>
<style scoped>
.top-pag {
  background-image: url('/static/img/praia-por-do-sol.jpg');
  background-size: cover;
  background-position: center;
  height: calc(99vh - 110px);
  margin-top: 110px;
}
.wrap-top-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.top-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-hen h1, .logo-hen h1 span{
  font-size: 100px;
  font-weight: 600;
}
.logo-hen {
  width: fit-content;
  padding:0 0 0 40px;;
  border-left: 10px solid #003366;
}
.content-right {
  width: 400px;
  display: inline-flex;
  justify-content: center;
}
.carro-top {
  width: 250px;
  height: 180px;
}
.carro-top-content {
  overflow: hidden;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carro-top-content figure {
  margin: 0;
}
.carro-top-content figure img {
  width: 150px;
  display: block;
  margin: auto;
}
.carro-top-content figure figcaption{
  font-size: 22px;
  text-align: center;
  color: red;
  font-weight: 500;
  line-height: .95;
}
.promo {
  display: flex;
  width: 100%;
  min-height: 250px;
  padding: 60px 0;
  background-image: linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('/static/img/swimming-pool.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  align-items: center;
  text-align: center;
}
.promo h2 {
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  text-shadow: 0 0 10px #000;
}
.promo p {
  font-size: 30px;
  color: #fff;
  text-shadow: 0 0 10px #000;
}
.promo li{
  list-style: none !important;
}

.about-icon-right {
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.about-icon-right i {
  color: green;
  font-size: 200px;
  margin-top: -22px;
}
.about-us h2{
  text-align: center;
  padding-bottom: 10px;
}
.about-us p{
  font-size: 20px;
  text-align: justify;
}
.about-us p a {
  color: #003366;
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
}
.about-us p a:hover, .about-us p a:focus {
  text-decoration: none;
}
.content-after-promo {
  padding: 40px 5px;
}
@media(max-width: 904px){
  .logo-hen h1, .logo-hen h1 span{font-size: 80px;}
}
@media(max-width: 804px){
  .wrap-top-content{display: flex;align-items: center;}
  .top-content{display: block; height: fit-content !important; width: 100%;}
  .content-right{width: 100%;}
  .carro-top{ display: block; margin: auto; margin-top: 30px;}
  .about-icon-right{padding-top: 40px;}
}
@media(max-width: 505px){
  .top-content{zoom: 80%;}
}
@media(max-width:400px){
  .top-content{zoom: 62%;}
}

</style>

<script>

import BannerInsta from '@/pages/modules/BannerInsta'
  
export default {
  name: 'home',
  
  components: {
    'banner-insta' : BannerInsta,
  },
  data: function () {
    return {

    }
  },
  created: function () {    
  },
  mounted: function () {  
    $('.carro-top').slick({
      infinite: true,
      speed: 600,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000,
    });

    $(document).ready(function () {
      $('.frota-tu').click(function() {
      $('html, body').animate({
        scrollTop: $(".frota-turistica").offset().top
      }, 1000);
    })
    });

  },
  methods: {
    
  },
  head: {
    title: {
      inner: 'Henrique Excursões - Home'
    },
    meta: [{
      name: 'description',
      content: 'Henrique Excursões é uma empresa localizada em Mauá - SP focada em Excursões para diversos lugares como Prais, Parques Aquáticos e cidades turísticas proporcionando ao cliente o conforto e a segurança dos nossos onibus',
      id: 'description'
    }]
  }
}
</script>
