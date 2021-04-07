var quant = $("div#testimony-center ul").length;
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
    alert('clicou')
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
/*
$('section#perfect-sunday').waypoint(function(direction){
    if(direction === "down"){
        $('div.sheet1').addClass('animate__animated animate__fadeInUp');
        $('div.shrimp').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.sheet2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.sheet3').addClass('animate__animated animate__fadeInUp');
        $('div.tomato').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.cheese').addClass('animate__animated animate__fadeInUp animate__slower');
    }
    if (direction === "up"){
        $('div.sheet1').removeClass('animate__animated animate__fadeInUp');
        $('div.shrimp').removeClass('animate__animated animate__fadeInUp');
        $('div.sheet2').removeClass('animate__animated animate__fadeInUp');
        $('div.sheet3').removeClass('animate__animated animate__fadeInUp');
        $('div.tomato').removeClass('animate__animated animate__fadeInUp');
        $('div.cheese').removeClass('animate__animated animate__fadeInUp');
    }
    
    },{
        offset:'450px;'
    })
*/

   $(window).on('scroll',function(){
       if($(window).scrollTop()){
           $('nav').addClass('navStatic');
           $('nav div').addClass('static');
           $('nav ul').addClass('menuStatic');
           $('nav ul li a ').addClass('itenStatic');
           $('nav ion-icon').addClass('iconStatic');
       }
       else{
        $('nav').removeClass('navStatic');
        $('nav div').removeClass('static');
        $('nav ul').removeClass('menuStatic');
        $('nav ul li a ').removeClass('itenStatic');
        $('nav ion-icon').removeClass('iconStatic');
       }
   })
//animate links
   $('nav ul li:eq(0)').click(function(){
       $('html,body').animate({scrollTop:$('section#perfect-sunday').offset().top},2000)
   });

   $('nav ul li:eq(1)').click(function(){
    $('html,body').animate({scrollTop:$('section#pizza').offset().top},2000)
});

$('nav ul li:eq(2)').click(function(){
    $('html,body').animate({scrollTop:$('section#testimonials').offset().top},2000)
});

$('nav ul li:eq(3)').click(function(){
    $('html,body').animate({scrollTop:$('section#plans').offset().top},2000)
});

$('nav ul li:eq(4)').click(function(){
    $('html,body').animate({scrollTop:$('section#transition-footer').offset().top},2000)
});

$('nav div a:eq(0)').click(function(){
    $('html,body').animate({scrollTop:$('header div#banner').offset().top},2000)
});


$('div#banner a:eq(0)').click(function(){
    $('html,body').animate({scrollTop:$('section#plans').offset().top},2000)
});

   //Login


   const form = document.getElementById('form')
   const userName = document.getElementById('username')
   const email = document.getElementById('email')
   const password = document.getElementById('password')
   const passwordCheck = document.getElementById('password_check')


   form.addEventListener('submit',e =>{
       e.preventDefault();


       checkInputs();
   });

   function checkInputs(){
       //pegar valores dos inputs
   const userNameValue = userName.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const passwordCheckValue = passwordCheck.value.trim();

   if(userNameValue === " "){
       //mostrar erro
       //add error class
        setErrorFor(userName,"Preencher campo!")
   }else{
       //add success class
       setSuccessFor(userName)
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add class
    formControl.className = "form-control error"
    // add menssagem de erro
    small.innerText = message;



}

function setSuccessFor(){

}
