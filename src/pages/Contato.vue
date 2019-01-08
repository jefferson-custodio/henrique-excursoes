<template>
  <div class="contato">
    <bg-top 
      :img="'url('+ '/static/img/bg-home.jpg' + ')'" 
      :title="'Venha nos visitar!'">
    </bg-top >
    <section class="cont-content">
      <div class="container container-cus">
        <div class="padding-cus-cont">
          <div class="contato-ap">
            <h2>CONTATO</h2>  
            <p>Faça-nos uma visita e conheça nossos estoques que estão em constante renovação. </p>
          </div>
          <div class="content-after-ap row">
            <div class="col-md-6">
              <div class="cont-col-left">
                <img src="/static/img/icon-phone.png" alt="Icone de telefone">
                <p>(11) 2468-9000</p>
              </div>
              <div class="cont-col-left">
                <img src="/static/img/icon-msg.png" alt="Icone de telefone">
                <p>contato@santarosametais.com.br </p>
              </div>
              <div class="cont-col-left">
                <img src="/static/img/icon-anc.png" alt="Icone de telefone">
                <p>Rua Duque de Caxias, 144 Vila Fátima - Guarulhos - SP 07191-010</p>
              </div>
            </div>
            <div class="col-md-6">
              <form action="">
                  <input type="name" placeholder="Nome Completo*">
                  <input type="email" placeholder="Email*">
                  <input type="tel" placeholder="Telefone*">
                  <input type="text" placeholder="Assunto*">
                <textarea name="" id="" placeholder="Mensagem"></textarea>
                <button type="submit">ENVIAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.cont-content{
  text-align: center;
}
.padding-cus-cont{
  padding: 0 40px 100px 40px;
}
h2 {
  padding: 75px 0 15px 0;
  font-weight: 700;
  font-size: 28px;
  color: #4a4a4a;
}
.contato-ap {
  max-width: 600px;
  margin: auto;
}
.contato-ap p{
  font-size: 20px;
}
.content-after-ap {
  padding-top: 60px;
}
.cont-col-left{
  max-width: 300px;
  margin: auto;
  padding: 15px 0;
}
.cont-col-left p{
  color: #909090;
  font-size: 19px;
  padding-top: 15px;
}
.cont-col-left:nth-of-type(3){
  padding: 0 20px;
}
input, textarea {
  width: 100%;
  height: 65px;
  margin: 8px 0;
}
input::placeholder, textarea::placeholder {
  font-size: 20px;
  color: #9b9b9b;
}
input, textarea {
  border: 1px solid #909090;
  padding: 0 20px;
}
textarea {
  min-height: 155px;
  padding-top: 10px;
}
form button {
  width: 100%;
  display: block;
  background-color: #0855a2;
  color: #fff;
  font-size: 20px;
  font-weight: 650;
  height: 60px;
  border: 2px solid #0855a2;
  transition: .4s;
}
form button:hover, form button:focus{
  background-color: #156cc4;
  border: 2px solid #156cc4;
  transition: .4s;

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
    
  },
  methods: {
    
  },
  head: {
    title: {
      inner: 'Serviços'
    },
    meta: [{
      name: 'description',
      content: 'My description here for SEO',
      id: 'description'
    }]
  }
}
</script>
