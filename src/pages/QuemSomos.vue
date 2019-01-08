<template>
  <div class="quem-somos">
    <bg-top 
      :img="'url('+ '/static/img/bg-home.jpg' + ')'" 
      :title="'UMA PARCERIA DE PESO'">
    </bg-top >
    <section class="quem-somos-content">
      <div class="container container-cus">
        <div class="padding-cus-quem">
          <div class="nossa-historia">
            <h2>NOSSA HISTÓRIA</h2>
            <p>Fundada em 1966, com a proposta de comercializar tanto os insumos metálicos gerados por empresas como os de obsolência, a Sana Rosa começou a adquirir, transportar, separar, beneficiar e fornecer esses materiais para indústrias, siderúrgicas e fundições - indústrias essas responsáveis pela transformação desses materiais em aço para reutilização nas mais diversas aplicações. </p>
            <p>Ao longo desses anos, outros produtos e serviços foram incorporados ao portfólio da empresa, como tubos, chapas em aço carbono e inox, máquinas, equipamentos e mão-de-obra especializada.</p>
            <p>Essas adaptações, aliadas a responsabilidade, disciplina e busca pela satisfação de todas as partes envolvidas no processo de clientes, a colaboradores foram determinantes para a sobrevivência e posicionamento da Santa Rosa como uma das maiores empresas do setor.</p>
            <p>Hoje, a Santa Rosa, além de fornecer produtos e serviços para inúmeros segmentos, contribui com o meio ambiente, através do envolvimento em processos de compra, coleta e encaminhamento para reutilização de metais e produtos que, de outra forma, poderiam ser descartados de maneira indevida. Por isso, continuaremos a aliar nossa produtividade à responsabilidade socioambiental, em parceria com a empresa Sudeste Paulista, e trabalharemos para sempre oferecer a você as melhores condições do mercado.</p>
          </div>
          <div class="banner-ideais">

          </div>
        </div>
      </div>

      <banner-static :img="'url('+ '/static/img/bg-home.jpg' + ')'" ></banner-static>

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

.banner-ideais {
  height: 400px;
}

</style>

<script>

import BgTop from '@/pages/modules/BgTop'
import BannerStatic from '@/pages/modules/BannerStatic'
  
export default {
  name: 'home',
  
  components: {
    'bg-top' : BgTop,
    'banner-static' : BannerStatic
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
      inner: 'Quem Somos'
    },
    meta: [{
      name: 'description',
      content: 'My description here for SEO',
      id: 'description'
    }]
  }
}
</script>
