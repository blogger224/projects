const closedFace=document.querySelector('.closed');
const openFace=document.querySelector('.open');

//add event listener
closedFace.addEventListener('click',()=>{

if(openFace.classList.contains('open')){
  openFace.classList.add('active');
  
}  
});

