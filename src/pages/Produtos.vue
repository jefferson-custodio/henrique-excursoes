<template>
  <div class="quem-somos">
    <bg-top 
      :img="'url('+ '/static/img/bg-home.jpg' + ')'" 
      :title="'UMA PARCERIA DE PESO'">
    </bg-top >
    <section class="quem-somos-content">
      <div class="container container-cus">
        <div class="padding-cus-quem">
          <div class="produtos-ap">
            <h2>PRODUTOS</h2>
            <p>A Santa Rosa oferece uma grande variedade de produtos em diversos segmentos, como materiais elétricos, maquinas e equipamentos, tarugos, conexões, cantoneiras, entre outros diversos materiais. Tendo como foco principal os tubos, chapas e vigas em diversas bitolas e tamanhos, oferecendo qualidade, variedade, oportunidades, atendimento e ótimos preços.</p>
          </div>
          <div class="row">
            <div class="col-md-3">
              <h3>Barra Quadrada</h3>
              <h3>Conexões</h3>
            </div>
            <div class="col-md-3">
              <h3>Barra Redonda</h3>
              <h3>Tubos</h3>
            </div>
            <div class="col-md-3">
              <h3>Chapas</h3>
              <h3>Válvulas</h3>
            </div>
            <div class="col-md-3">
              <h3>Cantoneiras</h3>
              <h3>Vigas</h3>
            </div>

          </div>
          <div class="row bg-after-figs">
            <div class="col-md-4">
              <h3>Diversos</h3>
            </div>
            <div class="col-md-4">
              <ul>
                <li>Parafusos;</li>
                <li>Porcas;</li>
                <li>Arruelas;</li>
                <li>Abraçadeiras;</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>Cabos de Aços;</li>
                <li>Manilhas;</li>
                <li>Materiais Elétricos;</li>
                <li>Etc;</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
    
  </div>
</template>
<style scoped>

h2 {
  font-weight: 700;
  font-size: 28px;
  color: #4a4a4a;
  padding: 60px 0 50px 0;
}
p{
  font-size: 20px;
  padding: 8px 0;
}
.padding-cus-quem {
  padding: 40px 40px 0 40px;
}
.row .col-md-3 h3{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  color: #fff;
  padding: 10px;
  margin: 20px 0;
  width: 100%;
  height: 220px;
  background-image: url(/static/img/barra-ferro-exemplo.jpg);
  background-position: center;
}
.col-md-3 {
  padding: 9px;
  width: 230px !important;
  margin: auto !important;
}
.bg-after-figs{
  background-image: url(/static/img/metais-bg-exemplo.jpg);
  background-position: center;
}
.col-md-4, .col-md-4 h3, .col-md-4 ul li {
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
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
      inner: 'Produtos'
    },
    meta: [{
      name: 'description',
      content: 'My description here for SEO',
      id: 'description'
    }]
  }
}
</script>
