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
})