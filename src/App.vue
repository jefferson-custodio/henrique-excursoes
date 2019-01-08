<template>
  <div id="app">
    <header>
      <div class="top-header">
        <div class="container">
          <div class="top-header-content">
            <span><i class="fas fa-map-marker-alt"></i>Mauá - SP</span>
            <span><i class="fab fa-whatsapp"></i><a href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5511975691249">(11) 9 7569-1249</a></span>
          </div>
        </div>
      </div>
      <div class="bottom-header">
        <div class="container">
          <div class="header-flex">
            <div class="logo-hen">
              <a><span>Henrique</span> <br> Excursões</a>
            </div>

            <nav class="nav-header">
              <router-link :to="'/'">Home</router-link>
              <router-link :to="'/excursoes'">Pacotes de Viagem</router-link>
              <router-link :to="'/excursoes'">Nossa Frota Turística Particular</router-link>
              <router-link :to="'/contato'">Contato</router-link>
            </nav>
          </div>
          
        </div>
        
      </div>
      
   	</header>

    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <footer>
      <div class="container">
        <div class="bottom-footer text-center">
          <small>{{ year }}  © Todos os direitos reservados a Henrique Excursões. <span>Desenvolvido por <a target="_blank" href="https://www.instagram.com/jeffcustodio_/?hl=pt-br">Jefferson Custódio</a></span> </small>
        </div>
      </div>
      
    </footer>
  </div>
</template>

<style scoped>
header {
  display: block;
  z-index: 2;
  position: relative;
  background-color: #fff;
}
.top-header {
  background-color: #003366;
  color: #fff;
  text-align: right;
}
.top-header-content i {
  padding: 5px;
}
.top-header-content a {
  color: #fff;
}
.top-header-content span:first-of-type {
  margin-right: 10px;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
}
.nav-header {
  height: 100%;
}
.nav-header a{
  color: #000;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 15px;
}
.nav-header a:hover, .nav-header a:focus {
  background-color: #003366 !important;
  color: #fff !important;
  text-decoration: none;
}

footer {
  background-color: #003366;
}
.bottom-footer small {
  font-size: 14px;
  color: #fff;
}
.bottom-footer small span{
  display: block;
  margin-top: -5px;
  color: rgb(189, 189, 189);
}
.bottom-footer small span a {
  color: orange;
  text-decoration: underline ;
}
.bottom-footer small span a:hover {
  color: rgb(240, 240, 240);
}
</style>


<script>
export default {
  name: 'app',
  data: function () { 
    return {
      year: '',
    }
  },
  mounted: function () {
    this.year = new Date().getFullYear()
    
    
  },
  methods: {
    
  }
}
</script>
<style src="./styles/app.css"></style>

