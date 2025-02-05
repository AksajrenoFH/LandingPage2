function signin(){
    window.scrollTo({
        top:10000,
        left:0,
        behavior: "smooth"
    })
}

function signup(){
    window.scrollTo({
        top:3400,
        left:0,
        behavior: "smooth"
    })
}

function tentang(){
  window.scrollTo({
      top:600,
      left:0,
      behavior: "smooth"
  })
}

function populer(){
  window.scrollTo({
    top:1100,
    left:0,
    behavior:"smooth"
  })
}

function testimoni(){
  window.scrollTo({
    top:1770,
    left:0,
    behavior:"smooth"
  })
}

function paket(){
  window.scrollTo({
    top:2550,
    left:0,
    behavior:"smooth"
  })
}



// let mybutton = document.getElementById("myBtn");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function buttonSaya(){
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-top").style.top = "0";
  } else {
    document.getElementById("nav-top").style.top = "-50px";
  }
}

// $('menu-close').click(function(){
//   $('.nav-top ol').removeClass('active')
// })

// $('menu-btn').click(function(){
//   $('.nav-top ol').addClass('active')
// })

document.getElementById('menu-btn').onclick = function() {
    document.getElementById('nav').classList.add('active')
    document.getElementById('menu-close').style.display = 'block'
    document.getElementById('menu-btn').style.display = 'none'
}

document.getElementById('menu-close').onclick = function() {
    document.getElementById('nav').classList.remove('active')
    document.getElementById('menu-close').style.display = 'none'
    document.getElementById('menu-btn').style.display = 'block'
}