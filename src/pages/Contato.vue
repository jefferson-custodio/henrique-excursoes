<template>
  <div class="contato">
    <section class="cont-content">
      <div class="wrap-div-rot">
        <div class="div-title-rot">
          <h2>Contato</h2>
        </div>
      </div>
      <div class="container container-cus">
        <div class="padding-cus-cont">
          <div class="content-after-ap row">
            <div class="col-md-6">
              <div class="contato-ap">
                <p>Preencha as informações à seguir e entraremos em contato com você.</p>
              </div>
              <form action="https://formspree.io/henrique.excursoes@gmail.com" method="POST">
                  <input required type="name" name="Nome" placeholder="Nome Completo*">
                  <input required type="email" name="E-mail" placeholder="Email*">
                  <input required type="tel" name="Telefone" placeholder="Telefone*">
                  <input required type="text" name="Assunto" placeholder="Assunto*">
                <textarea name="Mensagem" placeholder="Mensagem"></textarea>
                <div class="contato-ap">
                  <p>Todos os itens marcados com * são obrigatórios. </p>
                </div>
                <button type="submit">Me ligue</button>
              </form>
            </div>
            <div class="col-md-6">
              <div class="cont-col-left">
                <i class="fas fa-at"></i>
                <p>henrique@excursões</p>
              </div>
              <div class="cont-col-left">
                <i class="fab fa-instagram"></i>
                <p>henrique_excursões</p>
              </div>
              <div class="cont-col-left">
                <i class="fab fa-facebook-square"></i>
                <p>facebook.com/herique</p>
              </div>
              <div class="cont-col-left">
                <i class="fab fa-whatsapp"></i>
                <p>(99) 9 9999-9999</p>
              </div>
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
  padding-top: 110px;
}
.container-cus{
  margin-top: -100px;
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
  height: 45px;
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
  width: 200px;
  border-radius: 100px;
  margin: auto;
  display: block;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  border: none;
  cursor: pointer;
  transition: .4s;
  background: rgb(255,78,0); /* Old browsers */
  background: -moz-linear-gradient(left, rgba(255,78,0,1) 0%, rgba(245,0,8,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(255,78,0,1) 0%,rgba(245,0,8,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(255,78,0,1) 0%,rgba(245,0,8,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff4e00', endColorstr='#f50008',GradientType=1 ); /* IE6-9 */
}
form button:hover, form button:focus{
  transform: scale(1.05);

}
.wrap-div-rot {
  overflow: hidden;
  width: 100%;
  transform: translateY(-30px);
}
.div-title-rot{
  display: flex;
  align-items: center;
  background-color: #ff001e;
  width: 120vw;
  height: 300px;
  clip-path: polygon(0% 100%, 0% -19%, 100% 8%, -48% 123%);
}
.div-title-rot h2{
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  padding: 0 0 60px 20px;
}
.cont-col-left i {
  font-size: 45px;
  color: #003366;
}
@media(max-width: 540px){
  .div-title-rot h2{padding-bottom: 80px; font-size: 45px; line-height: .9;}
  .div-title-rot{height: 200px;}
}
@media(max-width:400px){
  .div-title-rot h2{padding-bottom: 100px; font-size: 40px;}
  .div-title-rot{height: 180px;}
}
</style>

<script>


export default {
  name: 'home',

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
      inner: 'Contato'
    },
    meta: [{
      name: 'description',
      content: 'My description here for SEO',
      id: 'description'
    }]
  }
}
</script>
