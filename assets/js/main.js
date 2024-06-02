/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
 function linkAction (){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
/*=============== ADD BLUR TO HEADER ===============*/

const bluhead=()=>{
const header=document.getElementById('header');
this.scrollY >= 50 ? header.classList.add('blur-header')
                   : header.classList.remove('blur-header')
}
window.addEventListener('scroll',bluhead);




let lastScrollTop =0;
const navbar = document.getElementById('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Downscroll
    navbar.classList.add('hidden');
  } else {
    // Upscroll
    navbar.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
/*=============== EMAIL JS ===============*/
const conform = document.getElementById('contact-form'),
      conmess = document.getElementById('contact-message');

console.log(conmess);

const sendEmail = (e) => {
  e.preventDefault(); // Fixed typo here

  emailjs.sendForm('service_lhat9ly', 'template_0p160z9', '#contact-form', 'dqL1yCC0uq3JBUcVM') 

    .then(() => {
      conmess.textContent = 'Message sent successfully ✅';
      
      setTimeout(()=>{
        conmess.textContent=''
      },3000)
      conform.reset()
    }, () => {
      conmess.textContent = 'Message not sent successfully ❌';
    });
}

conform.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
