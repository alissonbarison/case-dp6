// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){

//Google Analytics
(function (i, s, o, g, r, a, m) {
   i['GoogleAnalyticsObject'] = r;
   (i[r] =
      i[r] ||
      function () {
         (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
   (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
   a.async = 1;
   a.src = g;
   m.parentNode.insertBefore(a, m);
})(
   window,
   document,
   'script',
   'https://www.google-analytics.com/analytics.js',
   'ga'
);

ga('create', 'UA-215872932-1', 'auto');
ga('send', 'pageview');

const sendEvents = (category, action, rotule) => {
   console.log(
      'Categoria: ' + category,
      'Ação: ' + action,
      'Rótulo: ' + rotule
   );
   ga('send', 'event', category, action, rotule);
};

//event for menu-lista-contato
document
   .getElementsByClassName('menu-lista-contato')[0]
   .addEventListener('click', () => {
      sendEvents('menu', 'entre_em_contato', 'link_externo');
   });

//event for menu-lista-download
document
   .getElementsByClassName('menu-lista-download')[0]
   .addEventListener('click', () => {
      sendEvents('menu', 'download_pdf', 'download_pdf');
   });

//register events for page analise
function loadAnalise() {
   //events for card lorem
   document.querySelectorAll('.card-montadoras').forEach((card) => {
      card.addEventListener('click', (e) => {
         sendEvents('analise', 'ver_mais', card.getAttribute('data-name'));
      });
   });
}

//register events for page sobre
function loadSobre() {
   let form = document.getElementById('formContato');

   //event for form submit
   form.addEventListener('submit', () => {
      sendEvents('contato', 'enviado', 'enviado');
   });

   //events for form inputs
   //input nome
   document.getElementById('nome').addEventListener('change', (e) => {
      let inputValue = e.target.value.trim();
      if (inputValue.length === 0) {
         return false;
      }
      sendEvents('contato', e.target.id, 'preencheu');
   });

   //input email
   document.getElementById('email').addEventListener('change', (e) => {
      let inputValue = e.target.value.trim();
      if (inputValue.length === 0) {
         return false;
      }
      sendEvents('contato', e.target.id, 'preencheu');
   });

   //input telefone
   document.getElementById('telefone').addEventListener('change', (e) => {
      let inputValue = e.target.value.trim();
      if (inputValue.length === 0) {
         return false;
      }
      sendEvents('contato', e.target.id, 'preencheu');
   });

   //input aceito
   document.getElementById('aceito').addEventListener('change', (e) => {
      if (!e.target.checked) {
         return false;
      }
      sendEvents('contato', e.target.id, 'preencheu');
   });
}

/*
//jQuery version
(function (jQuery) {
   //event for menu-lista-contato
   jQuery('.menu-lista-contato').on('click tap', function () {
      sendEvents('menu', 'entre_em_contato', 'link_externo');
   });

   //event for menu-lista-download
   jQuery('.menu-lista-download').on('click tap', function () {
      sendEvents('menu', 'download_pdf', 'download_pdf');
   });

   //events for card lorem
   jQuery('.cards-montadoras').on('click tap', '.card-montadoras', function () {
      //get the name off buttun clicked by user
      var buttonName = jQuery(this).data().name;
      sendEvents('analise', 'ver_mais', buttonName);
   });

   //event for form submit
   jQuery('.contato').on('submit', function (e) {
      sendEvents('contato', 'enviado', 'enviado');
   });

   //events for contato form inputs
   //inputs names: nome, email, telefone, aceito,
   jQuery('.contato input').on('change', function (e) {
      e.preventDefault();

      //get the name off input changed by user
      var inputId = jQuery(this).attr('id');
      var inputValue = jQuery(this).val().trim();

      //if it is a text input, validate if there is any text
      if (inputId !== 'aceito' && inputValue.length == 0) {
         return false;
      }
      if (inputId == 'aceito' && !jQuery(this).is(':checked')) {
         return false;
      }
      sendEvents('contato', inputId, 'preencheu');
   });
})(jQuery);
*/
