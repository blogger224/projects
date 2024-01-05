const navSlide = () => {
  const blogger = document.querySelector('.blogger');
  const nav= document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');

  blogger.addEventListener('click',()=>{
nav.classList.toggle('nav-active');
//animation link
navLinks.forEach((link, index)=>{
  if(link.style.animation){
  link.style.animation='';
  }else{
    link.style.animation =`navlinkFade 0.5s ease forwards ${index / 7 + 1}s`;
  
  }
    });
    //blogger animation
    blogger.classList.toggle('toggle');
  });
  
  
 
}

navSlide();