
//paralax scrolling time

// document.body.addEventListener('DOMMouseScroll'. (event) => {
//     event.preventDefault();
//     const scrolling = window.pageYOffset + event.detail/2;
//     window.scrollTO(window.pageXOffset, scrolling);
// });

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
// buat scroll


    // buat nambah class baru 
    // if(wScroll = $('.nav-link').offset().top) {
    //     // console.log('ok');
    //  $('.nav-link').addClass('muncul');}

    if(wScroll > $('.p1').offset().top -300) {
        // console.log('ok');
        $('.p1').addClass('muncul');
    }

    if(wScroll > $('.p1').offset().top -250) {
        // console.log('ok');
        $('.img2').addClass('muncul');}

    if(wScroll > $('.img3').offset().top-370 ) {
            // console.log('ok');
            $('.img3').addClass('muncul');}

     if(wScroll > $('.text3').offset().top-350 ) {
                // console.log('ok');
             $('.text3').addClass('muncul');}
      if(wScroll > $('.text4').offset().top-320 ) {
     // console.log('ok');
     $('.text4').addClass('muncul');}
     if(wScroll > $('.img4').offset().top-190 ) {
        // console.log('ok');
        $('.img4').addClass('muncul');}
    if(wScroll > $('.penemuan').offset().top-200 ) {
         // console.log('ok');
         $('.penemuan').addClass('muncul');}

    if(wScroll > $('.img5').offset().top-360 ) {
    // console.log('ok');
     $('.img5').addClass('muncul');}

     if(wScroll > $('.text55').offset().top-400 ) {
        // console.log('ok');
        $('.text55').addClass('muncul');}
             
     if(wScroll > $('.text66').offset().top-400 ) {
        // console.log('ok');
        $('.text66').addClass('muncul');}

        if(wScroll > $('.text77').offset().top-400 ) {
            // console.log('ok');
            $('.text77').addClass('muncul');}

        if(wScroll > $('.text77').offset().top-400 ) {
            // console.log('ok');
            $('.text77').addClass('muncul');}
            
        if(wScroll > $('.hk1').offset().top-350 ) {
            // console.log('ok');
            $('.hk1').addClass('muncul');}
            
        if(wScroll > $('.hk2').offset().top-300 ) {
            // console.log('ok');
            $('.hk2').addClass('muncul');}
            
        if(wScroll > $('.hk3').offset().top-250 ) {
            // console.log('ok');
            $('.hk3').addClass('muncul');}

      if(wScroll > $('.text88').offset().top-300 ) {
                // console.log('ok');
                $('.text88').addClass('muncul');}

      if(wScroll > $('.img6').offset().top-400 ) {
                // console.log('ok');
                $('.img6').addClass('muncul');}
       if(wScroll > $('.footer').offset().top-700 ) {
                // console.log('ok');
                $('.footer').addClass('muncul');}  

      if(wScroll > $('.btn22').offset().top-100 ) {
                // console.log('ok');
                $('.btn22').addClass('muncul');}     
    });

// buat onload

$(window).on('load', function(){
    $('.nav-link').addClass('muncul');
    $('.text1').addClass('munculin');
    $('.text2').addClass('munculin');
    $('.img1').addClass('munculin');
    $('.newt').addClass('munculin');
    $('.btn').addClass('munculin');



});
