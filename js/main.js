let toggle = document.querySelector('.navbar__toggle');
toggle.addEventListener('click', ()=>{
    let navbar = document.querySelector('.menu__list');
    navbar.classList.toggle('menu--collapse');
})
//--modal
let elem = document.createElement('div');
elem.style.overflowY = 'scroll';
elem.style.width = '50px';
elem.style.height = '50px';
document.body.append(elem);
let scrollWidth = elem.offsetWidth - elem.clientWidth;
elem.remove();



let form = document.querySelector('.header-content__form');
let clonForm = form.cloneNode(true);
let bodyDisabled = document.querySelector('.open-modal');

function showModal (){

  let closeBtn = clonForm.querySelector('.form__close')
  clonForm.style.cssText = 'position:fixed; top:50%;left:50%;transform:translate(-50%, -50%)';
  document.body.append(clonForm);
  document.body.style.cssText += `overflow:hidden;padding:0 ${scrollWidth}px 0 0;`;
  closeBtn.style.display = 'block';
  bodyDisabled.style.display = 'block'

  closeBtn.addEventListener('click', hiddenModal);

}

function hiddenModal(){
    document.body.style.cssText += 'overflow:auto; padding:0;';
      clonForm.style.cssText ='display:none';
      bodyDisabled.style.display = 'none'

}

let  orderBtn = document.querySelector('.order .form__btn');

orderBtn.addEventListener('click',showModal)
