$(document).ready(function () {

var navID = ['home', 'hobbies', 'education', 'work', 'portfolio']


    $('.nav-page').click(function () {
        
        $('.nav-page').removeClass('active').addClass('inactive');

        if ($(this).hasClass('inactive')) {
            $(this).removeClass('inactive').addClass('active');
            console.log('#'+this.id + 'page')
            $('#'+this.id + 'page').removeClass('main-hidden').addClass('main-display')
            
        }

        for (let i=0; i < navID.length; i++) {
                if (navID[i] !== this.id) {
                $('#'+navID[i] + 'page').removeClass('main-display').addClass('main-hidden')
                // console.log(this.id)
                console.log(navID[i])
                console.log('#'+navID[i] + 'page')
                // console.log($(navID[i] + 'page').removeClass('main-display').addClass('main-hidden'))
                }
               
        }
    })

$('.secret-sound').on('click', function(){
    var secret = $("#secret")[0];
		secret.play()
})

$('#photography-card').click(function(){
    $('#photography').fadeIn('fast');
    $('#hobbiespage').toggle('normal');
    $('.header').slideUp('fast')
})

var galleryImage = []
$('.img-preview').click(function(){
    imgClone = $(this).clone();
    console.log(imgClone)
    console.log(this)
$('.gallery-display').append(imgClone);
$(imgClone).removeClass('img-preview')
$(imgClone).addClass('img-full')
$('.gallery-display').fadeIn('slow');
$('#photography').fadeOut('fast');
})

$('.gallery-display').click(function(){
    $('#photography').fadeIn('slow');
$('.gallery-display').fadeOut('fast');
    $('.gallery-display').empty();
    $(this).removeClass('img-preview')
$(this).addClass('img-full')
})

$('.close-gallery').click(function(){
    $('#photography').toggle('normal');
    $('#hobbiespage').fadeIn('fast');
    $('.header').slideDown('slow')
})
})