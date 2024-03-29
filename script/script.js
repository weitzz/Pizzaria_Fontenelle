var quant = ("div#testimony-center ul").length;
var limit = (quant * 336)* -1;
var widthPage = limit + 336;
var viewWidht = $("div#testimonials-center").width();

$('div#testimony-center').css('width',limit*-1);

$('div#testimonials-right').click(function(){
     positionCurrent = $('div#testimony-center').position().left
     newPosition = positionCurrent - viewWidht;

     if(limit < positionCurrent - viewWidht){
     $('div#testimony-center').animate({left:newPosition},1000)

     }

     if(limit > positionCurrent - viewWidht){
     $('div#testimonials-right ion-icon').css('opacity',0.5);
     $('div#testimonials-right ion-icon').css('cursor','not-allowed');
     }

     $('div#testimonials-left ion-icon').css('opacity',1);
     $('div#testimonials-left ion-icon').css('cursor','pointer');

})
$('div#testimonials-left').click(function(){
    positionCurrent = $('div#testimony-center').position().left
    if(newPosition + viewWidht <= 0){
        newPosition = positionCurrent + viewWidht;
        $('div#testimony-center').animate({left:newPosition},1000)
    }
    if(newPosition ==0){
        $('div#testimonials-left ion-icon').css('opacity',0.5);
        $('div#testimonials-left ion-icon').css('cursor','not-allowed');
    }
    $('div#testimonials-right ion-icon').css('opacity',1);
    $('div#testimonials-right ion-icon').css('cursor','pointer');
})

//CLICK assinatura

$('div.plans-bottom').click(function(){
    $('.form').addClass('login-active').removeClass('signup-active')
})


//links rede sociais

$('ion-icon#instagram').click(function(){
    window.open('http://www.instagram.com',"_blank");
})
$('ion-icon#facebook').click(function(){
    window.open('http://www.facebook.com',"_blank");
})
$('ion-icon#twitter').click(function(){
    window.open('http://www.twitter.com',"_blank");
})


/*animations*/ 

AOS.init();


   $(window).on('scroll',function(){
       if($(window).scrollTop()){
           $('nav').addClass('navStatic');
           $('nav div').addClass('static');
           $('nav ul').addClass('menuStatic');
           $('nav ul li a ').addClass('itenStatic');
           $('nav ion-icon').addClass('iconStatic');
           $('nav ul#icon-menu-mobile ion-icon').css('color','#404040');
           $('nav ul#icon-menu-mobile').css('margin-top','5px');
       }
       else{
        $('nav').removeClass('navStatic');
        $('nav div').removeClass('static');
        $('nav ul').removeClass('menuStatic');
        $('nav ul li a ').removeClass('itenStatic');
        $('nav ion-icon').removeClass('iconStatic');
        $('nav ul#icon-menu-mobile ion-icon').css('color','#fff');
        $('nav ul#icon-menu-mobile').css('margin-top','70px');
       }
   })
//animate links
$('nav div').click(function(){
    $('html,body').animate({scrollTop:$('header').offset().top},2000,function(){
            if($(window).width() < 812){
                hideMenu();
                control=true;
            }
        
    })
})
   $('nav ul li:eq(0)').click(function(){
       $('html,body').animate({scrollTop:$('section#perfect-sunday').offset().top},2000,function(){
        if($(window).width() < 812){
            hideMenu();
            control=true;
        }
       })

   });

   $('nav ul li:eq(1)').click(function(){
    $('html,body').animate({scrollTop:$('section#pizza').offset().top},2000,function(){
        if($(window).width() < 812){
            hideMenu();
            control=true;
        }
    })
});

$('nav ul li:eq(2)').click(function(){
    $('html,body').animate({scrollTop:$('section#testimonials').offset().top},2000,function(){
        if($(window).width() < 812){
            hideMenu();
            control=true;
        }
    })
});

$('nav ul li:eq(3)').click(function(){
    $('html,body').animate({scrollTop:$('section#plans').offset().top},2000,function(){
        
        if($(window).width() < 812){
            hideMenu();
            control=true;
        }
    })
});

$('nav ul li:eq(4)').click(function(){
    $('html,body').animate({scrollTop:$('section#transition-footer').offset().top},2000,function(){
        if($(window).width() < 812){
            hideMenu();
            control=true;
        }
    })
});


$('div#banner a:eq(0)').click(function(){
    $('html,body').animate({scrollTop:$('section#plans').offset().top},2000,function(){
        if($(window).width() < 812){
            hideMenu();
            control=true;
        }
    })
});


//menuStatic

function  showMenu(){
    $('nav ul#left').css('display','flex');
    $('nav ul#right').css('display','flex');

}
function hideMenu(){
    $('nav ul#left').css('display','none');
    $('nav ul#right').css('display','none');
}

let control = true
$('nav ul#icon-menu-mobile').click(function(){
    if(control=== true){
        showMenu();
        control =false;
    }else{
        hideMenu();
        control =true;
    }
   
})

$(window).resize(function(){
    if($(window).width()> 812){
        showMenu();
    }else{
        hideMenu();
    }
})



   //MODAL LOGIN & SIGNUP
$(document).on('click','.create-account,.already-account',function(){
    $('.form').addClass('login-active').removeClass('signup-active')
});

$(document).on('click','.signup-btn',function(){
    $('.form').addClass('signup-active').removeClass('login-active')
})

//signup-btn

$(document).on('click','.form-cancel',function(){
    $('.form').removeClass('login-active').removeClass('signup-active')
})

//VALIDATION

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const messageErro = document.getElementById('warning');

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let warnings = ''
    let logIn = false
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      messageErro.innerHTML = ''
    if(name.value.length < 6){
        warnings += `Nome inválido! <br>`
        logIn = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `Email inválido! <br>`
        logIn = true
    }
    if(password.value.length < 8){
        warnings += `Senha inválida!(Mínimo de 8 caracteres) <br>`
        logIn = true
    }
    if(logIn){
        messageErro.innerHTML = warnings
    }else{
        messageErro.innerHTML = `Enviado!`
    }
})


