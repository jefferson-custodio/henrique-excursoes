<template>
  <div class="tabelasTecnicas">
    <bg-top 
      :img="'url('+ '/static/img/bg-home.jpg' + ')'" 
      :title="'PRODUTOS COM EXPECIFICAÇÕES TÉCNICAS'">
    </bg-top >
    <section class="tab-content">
      <div class="container container-cus">
        <div class="padding-cus-tab">
          <h2>TABELA TÉCNICA</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
              <div class="tab-down">
                <div class="table-name">
                  <h3>NOME DA TABELA</h3>
                </div>
                <a href="#">Baixar</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>

h2 {
  padding: 75px 0 15px 0;
  font-weight: 700;
  font-size: 28px;
  color: #4a4a4a;
}
.padding-cus-tab{
  padding: 0 30px;
}
.row .col-md-4{
  padding: 8px;
}
.tab-down{
  width: 100%;
  border: 1px solid #909090;
  margin: 40px 0;
  box-shadow: 0 0 5px #909090;
}
.tab-down .table-name{
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9b9b9b;
  padding: 0 25px;
}
.tab-down .table-name h3{
  font-weight: 700;
  text-align: center;
}
.tab-down a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #0855a2;
  border: px solid #0855a2;
  color: #fff;
  font-size: 30px;
}
.tab-down a:hover, .tab-down a:focus{
  text-decoration: none;
  background-color: #156cc4;
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
