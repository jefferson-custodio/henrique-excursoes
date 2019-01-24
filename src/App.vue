<template>
  <div id="app">
    <header class="header">
      <div class="top-header">
        <div class="container">
          <div class="top-header-content">
            <span><i class="fas fa-map-marker-alt"></i>Mauá - SP</span>
            <span><i class="fab fa-whatsapp"></i><a target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5511975691249">(11) 9 7569-1249</a></span>
          </div>
        </div>
      </div>
      <div class="bottom-header">
        <div class="container">
          <div class="header-flex">
            <div class="logo-hen">
              <a href="www.henriqueexcursoes.com.br"><span>Henrique</span> <br> Excursões</a>
            </div>
            <nav class="nav-header">
              <ul>
                <li><router-link :to="'/'">Home</router-link></li>
                <li><router-link :to="'/pacotes'">Pacotes de Viagem</router-link></li>
                <li><router-link :to="'/frota-turistica'">Nossa Frota Turística Particular</router-link></li>
                <li><router-link :to="'/contato'">Contato</router-link></li>
              </ul>
            </nav>
            <div class="icone-header"><button><i class="fas fa-bars"></i></button></div>
          </div>
        </div>
      </div>
      <div class="wrap-nav-mobile">
        <nav class="nav-mobile">
          <ul>
            <li><router-link :to="'/'">Home</router-link></li>
            <li><router-link :to="'/pacotes'">Pacotes de Viagem</router-link></li>
            <li><router-link :to="'/frota-turistica'">Nossa Frota Turística Particular</router-link></li>
            <li><router-link :to="'/contato'">Contato</router-link></li>
          </ul>
        </nav>
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
  position: relative;
  z-index: 3;
  background-color: #fff;
  position: fixed !important;
  width: 100%;
  top: 0;
  left: 0;
   box-shadow: 0 0 15px #fff;
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
.nav-header ul{
  list-style: none;
  height: 100%;
}
.nav-header ul li{
  display: inline-flex;
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
.nav-header a:hover, .nav-header a:focus, .nav-mobile a:hover, .nav-mobile a:focus{
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
.icone-header {
  display: none;
}
.icone-header button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.icone-header i{
  color: #003366;
  font-size: 34px;
}


.wrap-nav-mobile {
  height: 0;
  overflow: hidden;
  transition: .6s !important;
}
.nav-on {
  height: 175px !important;
  transition: .6s !important;
  z-index: 3;
}
@media(max-width: 330px){
  .nav-on {height: 190px !important;}
}

.nav-mobile ul {
  padding: 0 !important;
}
.nav-mobile ul , .nav-mobile ul li{
  list-style: none;
  width: 100%;
  display: block;
}
.nav-mobile ul li a{
  color: #000;
  font-size: 15px;
  display: block;
  align-items: center;
  height: 100%;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 15px;
}
.logo-hen a:hover{
  text-decoration: none;
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
    
    $(".icone-header").click(function () {
      $(".wrap-nav-mobile").toggleClass('nav-on');
      if ($('.fas').hasClass('fa-times')) {
        $(".icone-header .fas").removeClass('fa-times').addClass('fa-bars');
      } else {
        $(".icone-header .fas").removeClass('fa-bars').addClass('fa-times');
      }
    });
    $(".nav-mobile a").click(function () {
      $(".wrap-nav-mobile").removeClass('nav-on');
      $(".icone-header .fas").removeClass('fa-times').addClass('fa-bars');
    })
    

    $(document).ready(function () {
      $(window).scroll(function () {
         if ($(this).scrollTop() > 10) {
         $(".top-header-content").addClass("hide");
         $(".header").addClass("fixed");
       } else {
         $(".top-header-content").removeClass('hide');
         $(".header").removeClass("fixed");
       }
      })
    })
  },
  methods: {
    
  }
}
</script>
<style src="./styles/app.css"></style>

