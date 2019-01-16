<template>
  <div class="pacotes">
    <section class="top-pacotes-content">
      <div class="top-pacotes">
        <h1>Pacotes de Viagem</h1>
        <div class="top-carro">
          <div class="item-carro">
            <div class="prop-ti">
              <h2><span>Parques</span> <br> Aquáticos</h2>
            </div>
          </div>
          <div class="item-carro">
            <div class="prop-ti">
              <h2><span>Parques</span> <br> De  Diversão</h2>
            </div>
          </div>
          <div class="item-carro">
            <div class="prop-ti">
              <h2><span>Praias</span></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="wrap-div-rot">
      <div class="div-title-rot">
        <h2>Viagens</h2>
      </div>
    </div>
    <section class="wrap-pacotes">
      <div class="container">
        <div class="pacote-de-viagem" v-for="(item, index) in viagemInfo" :key="index">
          <div class="wrap-title-pa">
            <div class="borda-left-title">
              <div>
                <div class="buble-border"><div class="buble-2"></div></div>
              </div>
            </div>
            <div class="right-title"><h2>{{ item.local }}</h2></div>
          </div>
          <div class="categoria">
            <span><i class="fas fa-map-marker-alt"></i>{{ item.categoria }}</span>
          </div>
          <div class="row wrap-card">
          <div class="col-md-2 frag-row">
            <div class="circle"></div>
          </div>
          <div class="col-md-4 frag-row frag-carro">
            <div class="carro-pacote">
              <div v-for="(item2, index) in item.imagens" :key="index" class="item-carro-pacote"><img :src="item2.link" :alt="item2.alt"></div>
            </div>
          </div>
          <div class="col-md-6 frag-row">
            <ul class="info-cards">
              <li><i class="far fa-clock"></i>Saída | {{ item.saida }}</li>
              <li><i class="fas fa-clock"></i>Chegada | {{ item.chegada }}</li>
              <li><i class="fas fa-utensils"></i> {{ item.refeicao }}</li>
              <li><i class="fas fa-dollar-sign"></i>À partir de R$ {{ item.preco }}</li>
              <li><i class="fas fa-calendar-day"></i>{{ item.data }}</li>
            </ul>
            <div class="button-card">
              <router-link :to="'/contato'">Reserve Aqui</router-link>
            </div>
            
          </div>
          
        </div>
          <img class="img-line" src="/static/img/Cordinha-dos-Cards-Alta-Resolução.png" alt="img-corrente">
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.pacotes {
  min-height: calc(100vh - 48px);
}
.top-pacotes-content {
  padding-top: 110px;
}
.top-pacotes {
  position: relative;
}
.top-pacotes h1{
  font-size: 50px;
  font-weight: bolder;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 40px;
  left: 0;
  text-align: center;
  z-index: 1;
  color: #fff;
  text-shadow: 0 0 10px #000;
  text-transform: uppercase;
}

.item-carro {
  width: 100%;
  height: calc(99vh - 110px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/static/img/praia.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}
.item-carro:nth-of-type(2){
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/static/img/parques-aquáticos.jpg');
}
.item-carro:nth-of-type(3){
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/static/img/parques-de-diversao.jpg');
}
.prop-ti {
  border-left: 10px solid #003366;
}
.prop-ti h2{
  font-size: 100px;
  width: fit-content;
  font-weight: 700;
  line-height: .9;
  color: rgba(0, 51, 102, 1) !important;
  padding-left: 30px;
}
.prop-ti h2 span{
  font-size: 100px;
  color: rgba(255, 0, 0, 1);
}
.wrap-div-rot {
  overflow: hidden;
  width: 100%;
  transform: translateY(-30px);
}
.div-title-rot{
  background-color: #003366;
  width: 120vw;
  height: 200px;
  clip-path: polygon(0% 100%, 0% -19%, 100% 0%, -48% 123%);
}
.div-title-rot h2{
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  padding: 40px 0 0 25px;
}

.frag-row {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}
.frag-row:nth-of-type(1) {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-left: 2px solid #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.frag-row:last-of-type{
  border-right: 2px solid #000;
}
.frag-carro {
  height: 250px;
  overflow: hidden;
}
.frag-carro img{
  width: 100%;
  min-height: 220px;
  object-fit: cover;
}
.wrap-card {
  min-height: 250px;
  margin: 70px 0;
}
.circle {
  border-radius: 50%;
  border: #003366 6px solid;
  width: 60px;
  height: 60px;
}
.frag-carro {
  padding: 10px;
  position: relative;
}
.wrap-title-pa {
  width: 260px;
  display: block;
  position: absolute;
  top: -53px;
  left: 100px;
  font-size: 0;
  z-index: 2;
  transform: rotate(-15deg);
}
.right-title {
  display: inline-flex;
  background-color: #003366;
  height: 80px;
  font-size: 0;
  vertical-align: top;
  width: 220px;
  align-items: center;
}
.borda-left-title {
  display: inline-flex;
  background-color: #003366;
  width: 80px;
  height: 40px;
  transform: rotate(-90deg);
  vertical-align: -45px;
  margin: -20px;
  clip-path: polygon(0% 100%, 30% 0%, 70% 0%, 100% 100%);
  font-size: 0;
  align-items: center;
  justify-content: center;

}
.pacote-de-viagem {
  position: relative;
}
.item-carro-pacote {
  height: 225px;
  width: 100%;
  overflow: hidden;
}
.item-carro-pacote img {
  width: 100% !important;
  object-fit: cover;
}
.buble-border {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buble-border .buble-2{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: #003366 1px solid;
  background-color: #fff;
  position: relative;
}
.right-title h2{
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  margin: 0;
  width: 100%;
  text-align: center;
}
.pacote-de-viagem .img-line{
  width: 56px;
  position: absolute;
  top: 9px;
  left: 67px;
  z-index: 2;
}
.info-cards {
  list-style: none;
  padding: 10px 0;
}
.info-cards li{
  color: #afabac;
  font-size: 25px;
}
.info-cards li:first-of-type, .info-cards li:nth-of-type(2){
  display: inline-block;
}
.info-cards li i {
  color: #003366;
  font-size: 25px;
  margin: 10px;
}
.button-card {
  display: inline;
  position: absolute;
  right: 15px;
  bottom: 15px;
}
.button-card a{
  display: flex;
  background-color: #003366;
  border-radius: 30px;
  color: #fff;
  width: 150px;
  text-transform: uppercase;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.categoria {
  position: absolute;
  top: -28px;
  right: 10px;
  text-align: right;
  color: #afabac;
  font-size: 20px;
}
.categoria i{
  color: #003366;
  margin-right: 8px;
}
@media(min-width: 767px) {
  .wrap-card {height: 250px;}
}
</style>

<script>
export default {
  
  name: 'pacotes',
  
  components: {
    
  },
  data: function () {
    return {
      viagemInfo: [],

    }
  },
  created: function () {    
  },
  mounted: function () {   
    this.getViagens();

    $('.top-carro').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
    }
    );
  },
  methods: {
    getViagens(){
      this.$http.get('https://pacotes-henrique-vlwvfhugfy.firebaseio.com/.json')
      .then((response) =>{
        this.viagemInfo = response.body.pacotes;
        console.log(this.viagemInfo);
        this.$nextTick(() => {
          this.sliderPacotes();
        });
        
      }, (response)=>{
        console.log('Erro em obter arquivos');
        console.log(response);
      })
    },
    sliderPacotes(){
        $('.carro-pacote').slick({
          autoplay: true,
          autoplaySpeed: 2500,
          pauseOnHover: true,
        });
    }
  },
  head: {
    title: {
      inner: 'Pacotes de Viagem'
    },
    meta: [{
      name: 'description',
      content: 'My description here for SEO',
      id: 'description'
    }]
  }
}
</script>
