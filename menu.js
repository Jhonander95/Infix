/* const ipad = window.matchMedia('screend and (max.width: 767px)'); */
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
console.log(burgerButton);

burgerButton.addEventListener('click', function() {
  menu.classList.toggle('is-active')
})


      /* ipad.addListener(screenValidation); */

/*       function screenValidation(event) {
        if(event.matches){
          burgerButton.addEventListener('click', hidenShow);
        }else {
          burgurButton.removeEventListener('click', hidenShow);
        }
      }

      function hidenShow (){
        if (menu.classList.contains('is-active')){
          menu.classList.remove('is-active')
        }else{
          menu.classList.add('is-active'); 
        }
       
      } */
