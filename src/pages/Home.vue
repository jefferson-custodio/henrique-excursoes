<template>
  <div class="home">
    <section class="top-pag">
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
    </section>
    <div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>
<style scoped>
.top-pag {
  background-image: url('/static/img/praia-por-do-sol.jpg');
  background-size: cover;
  background-position: center;
  height: calc(100vh - 110px);
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
  padding: 0 40px;
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
</style>

<script>

import BgTop from '@/pages/modules/BgTop'
  
export default {
  name: 'home',
  
  components: {
    'bg-top' : BgTop,
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
   
  },
  methods: {
    
  },
  head: {
    title: {
      inner: 'Home'
    },
    meta: [{
      name: 'description',
      content: 'My description here for SEO',
      id: 'description'
    }]
  }
}
</script>
