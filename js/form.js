
const contact_btn = document.querySelector('.pup__up');
const close_btn = document.querySelector('.close-btn');
const contact_container = document.querySelector('#myForm');
contact_btn.addEventListener('click', () => {
    contact_container.classList.toggle('activ')
});
//close_btn.addEventListener('click', () => {
//   contact_container.classList.remove('activ')
//});

const popupCloseIcon=document.querySelectorAll(".close-btn");
if (popupCloseIcon.length>0){
      for(let index=0; index<popupCloseIcon.length; index++){
          const el=popupCloseIcon[index];
          el.addEventListener('click',function(e){
              popupClose(el.closest('popup'));
              e.preventDefault();
          });
      }
}
