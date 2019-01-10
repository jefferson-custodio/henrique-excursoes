<template>
  <div class="frota">
   <section class="frota-content">
     <div class="container">
       <div class="frota-turistica">
          <h2>Nossa Frota Turística Particular</h2>
          <div class="row">
            <div class="col-md-6">
          <div class="row wrap-bus">
              <div class="col-md-6 left-bus"><img src="/static/img/g7-dd-1800.jpeg" alt="foto do onibus"></div>
              <div class="col-md-6">
                <ul>
                  <li><i class="fas fa-bus"></i>G7 DD 1800</li>
                  <li><i class="fas fa-toilet-paper"></i>Banheiro</li>
                  <li><i class="fas fa-snowflake"></i>Ar Condicionado</li>
                  <li><i class="fas fa-satellite-dish"></i>Wi-fi</li>
                  <li><i class="fas fa-tv"></i>Tv - Dvd</li>
                  <li><i class="fas fa-glass-martini-alt"></i>Frigobar</li>
                </ul>
                  </div>
            </div>
          <div class="row wrap-bus">
              <div class="col-md-6 left-bus"><img src="/static/img/g7-1600.jpg" alt="foto do onibus"></div>
              <div class="col-md-6">
                <ul>
                  <li><i class="fas fa-bus"></i>G7 1600</li>
                  <li><i class="fas fa-toilet-paper"></i>Banheiro</li>
                  <li><i class="fas fa-snowflake"></i>Ar Condicionado</li>
                  <li><i class="fas fa-satellite-dish"></i>Wi-fi</li>
                  <li><i class="fas fa-tv"></i>Tv - Dvd</li>
                  <li><i class="fas fa-glass-martini-alt"></i>Frigobar</li>
                </ul>
                  </div>
            </div>
          </div>
          <div class="col-md-6">
          <div class="row wrap-bus">
              <div class="col-md-6 left-bus"><img src="/static/img/irizar.jpg" alt="foto do onibus"></div>
              <div class="col-md-6">
                <ul>
                  <li><i class="fas fa-bus"></i>Irizar</li>
                  <li><i class="fas fa-toilet-paper"></i>Banheiro</li>
                  <li><i class="fas fa-snowflake"></i>Ar Condicionado</li>
                  <li><i class="fas fa-satellite-dish"></i>Wi-fi</li>
                  <li><i class="fas fa-tv"></i>Tv - Dvd</li>
                  <li><i class="fas fa-glass-martini-alt"></i>Frigobar</li>
                </ul>
                  </div>
            </div>
            <div class="row wrap-bus">
              <div class="col-md-6 left-bus"><img src="/static/img/g7-1200.jpg" alt="foto do onibus"></div>
              <div class="col-md-6">
                <ul>
                  <li><i class="fas fa-bus"></i>G7 1200</li>
                  <li><i class="fas fa-toilet-paper"></i>Banheiro</li>
                  <li><i class="fas fa-snowflake"></i>Ar Condicionado</li>
                  <li><i class="fas fa-satellite-dish"></i>Wi-fi</li>
                  <li><i class="fas fa-tv"></i>Tv - Dvd</li>
                  <li><i class="fas fa-glass-martini-alt"></i>Frigobar</li>
                </ul>
                  </div>
            </div>
          </div>
          </div>
          </div>

     </div>
   </section>
  </div>
</template>
<style scoped>

.frota-content .wrap-bus {
  border: 3px solid #003366;
}
.frota-content {
  padding-top: 120px;
  min-height: calc(100vh - 50px);
}
.frota-content .frota-turistica .row{
  margin: 10px -10px;
}
.wrap-bus .col-md-6:nth-of-type(2){
  background-color: #fff;
  padding-left: 0;
  display: inline-flex;
  align-items: center;
}
.frota-content .left-bus {
  padding: 0;
  overflow: hidden;
}
.frota-content .left-bus img{
  width: 100%;
  min-height: 190px;
}
.frota-turistica h2 {
  text-align: center;
  font-weight: 600;
  color: #ff0000;
  padding-top: 40px;
}
.wrap-bus ul li {
  font-size: 15px;
  font-weight: 600;
  list-style: none;
  padding: 2px 0;
}
.wrap-bus ul li:first-of-type {
  font-weight: 800;
  font-size: 20px;
}
.wrap-bus ul li i{
  padding: 0 10px 0 0;
  color: #ff0000;
}

.frota-content .left-bus img:hover, .frota-content .left-bus img:focus {
  transform: scale(1.3) rotate(-10deg);
  transition: 1s !important;
}

</style>

<script>
  
export default {
  name: 'frota',
  
  components: {
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
