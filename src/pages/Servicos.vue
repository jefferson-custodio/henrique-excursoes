<template>
  <div class="servicos">
    <bg-top 
      :img="'url('+ '/static/img/bg-home.jpg' + ')'" 
      :title="'MAIS DE 5 MIL ITENS À SUA DISPOSIÇÃO'">
    </bg-top >
    <section class="serv-content">
      <div class="serv-sr container container-cus">
        <div class="padding-cus-serv">
          <h2>SERVIÇOS</h2>
          <p>Sempre com o objetivo de acompanhar as mudanças e o crescimento do mercado, a Santa Rosa passou por diversas modificações e adequações. </p>
          <p>A mais significativa delas, foi a segmentação das diversas atividades incorporadas à empresa há mais de quatro décadas. </p>
          <p>Essa segmentação, resultou em empresas que oferecem produtos específicos para seus nichos de mercado, como: </p>
          <ul>
            <li><p>- Comercialização de tubos das mais diversas medidas e/ou sob medida, chapas e vigas de aço, tarugos, conexões, válvulas, máquinas, equipamentos e outros realizada pela santa Rosa comércio e indústria de metais; </p></li>
            <li><p>- Comercialização e beneficiamento de sucatas metálicas realizada pela Sudeste Paulista Comércio de Metais; </p></li>
            <li><p>- Comercialização de tubos, chapas, vigas, tarugos, conexões e válvulas em aço inoxidável, bem como sucatas de aço inoxidável, suas ligas e outras ligas especiais realizada pela Santa Rosa Ligas Metálicas; de mão-de-obra especializada e locação de equipamentos realizada pela Ivamar Transportes, Comércio e Representação.</p></li>
          </ul>
          <p>Toda essa experiência adquirida ao longo do tempo e moldada pelas transformações necessárias, está agregada aos nossos produtos e serviços, à disposição dos nossos diversos clientes, que incluem empresas de:</p>
          <ul class="list-kind">
            <li><p>- Base</p></li>
            <li><p>- Engenharia e Construção;</p></li>
            <li><p>- Papel e Celulosa.</p></li>
            <li><p>- Açúcar e Etanol. </p></li>
            <li><p>- Poços Artesianos. </p></li>
            <li><p>- Óleo e Gás. </p></li>
            <li><p>- Revendas</p></li>
            <li><p>Entre outras.</p></li>
          </ul>
          <p>Trabalhamos com logística de insumos metálicos, locações de equipamento (Carregadeira, eletroímã, caminhões roll-on e roll-off, caçambas, guindastes.</p>
          <p>A Santa Rosa é referência há mais de 40 anos em bons preços e diversidade de materiais.</p>
          <div class="logos-address row">
            <div class="col-md-6">
              <img class="img-fluid" src="/static/img/logo-santa-rosa-serv.jpg" alt="logo santa rosa">
              <div class="address">
                <p>Av. Monteiro Lobato, 1667 </p>
                <p>Macedo - Guarulhos - SP</p>
                <p>Cep 07190-001</p>
                <p>Tel (11) 2468-0303 / 2468-0207</p>
              </div>
            </div>
            <div class="col-md-6">
              <img class="img-fluid" src="/static/img/logo-sudesta-paulista.jpg" alt="logo sudesta paulista">
              <div class="address">
                <p>Av. Três de Março, 179 </p>
                <p>Alto da Boa Vista - Sorocaba - SP</p>
                <p>Cep 18087-180</p>
                <p>Tel (15) 3228-1400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.serv-sr{
  padding-top: 70px;
}
.serv-sr h2{
  padding-bottom: 40px;
  font-weight: 700;
  font-size: 28px;
  color: #4a4a4a;

}
.padding-cus-serv{
  padding: 0 40px;
}
ul {
  list-style: none;
  padding: 0;
}
.list-kind{
  line-height: 10px;
  padding: 8px 0;
}
p{
  font-size: 20px;
}

.logos-address{
  padding: 100px 0;
}
.address{
  margin: 40px 0;
  padding: 10px;
  line-height: 1;
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
