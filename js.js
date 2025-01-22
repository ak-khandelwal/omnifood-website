const nav = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const cross = document.querySelector('.mobile-nav-logo');
const mobile_nav = document.querySelector('.mobile-nav');
const gttb = document.querySelector('.go-to-top-btn')
const preloader_container = document.querySelector('.preloader-container')
const nav_links = document.querySelectorAll('.nav-items a:link')
const nav_mobile_links = document.querySelectorAll('.mobile-nav a:link')
console.log()
const section_all = document.querySelectorAll('section')

//code logic for desktop
nav_links.forEach((item)=>{
  console.log(item.href.slice(0))
  item.onclick = function(e){
    e.preventDefault();

    section_all.forEach((section)=>{
      // console.log(section.getBoundingClientRect())
      if(item.href.includes(section.id)){
        // const top = section.getBoundingClientRect().top;
        const nav_height=nav.getBoundingClientRect().height;
        window.scrollTo({top:section.offsetTop-nav_height,behavior:'smooth'})
      }
    })
  }
})

//code logic for mobile
nav_mobile_links.forEach((link) => {
  link.onclick = function (e) {
    e.preventDefault();
    cross.click();
    section_all.forEach((section) => {
      if (link.href.includes(section.id)) {
        // const top = section.getBoundingClientRect().top;
        const nav_height = nav.getBoundingClientRect().height;
        window.scrollTo({
          top: section.offsetTop - nav_height,
          behavior: "smooth",
        });
      }
    });
  };
});

//resize window
window.onresize = function(){
  mobile_nav.style.transform = "translateX(100%)";

}

//preloader
window.addEventListener('load',()=>{
  console.log('load');
  preloader_container.classList.add('hide-preloader')
  document.body.style.overflow = 'visible';
})


//fixed nav logic
window.addEventListener('scroll',function(){
  const scrollHeight = window.pageYOffset;
  
  if(scrollHeight>200){
    gttb.style.display = 'block';
    nav.style.position = 'fixed'
    nav.style.width='100%'
    nav.style.backgroundColor='white'
    nav.style.opacity='.95'
    nav.style.boxShadow='0px 0px 5px rgb(225,224,224)'
  }
  else{
    nav.style.position = 'relative'
    nav.style.backgroundColor='var(--primary-color-2)'
    nav.style.boxShadow='none'
    gttb.style.display = "none";

  }
})

//nav logic

hamburger.addEventListener('click',function(){
  mobile_nav.style.transform='translateX(0)'
})
cross.addEventListener('click',function(){
  mobile_nav.style.transform='translateX(100%)'

})