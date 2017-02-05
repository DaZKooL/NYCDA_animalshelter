(function($) {
    $(function() {

        $('.button-collapse').sideNav();

    });

    // end of document ready
})(jQuery); // end of jQuery name space

//  to get json data 
$.getJSON("https://api.myjson.com/bins/ercc1", function(data) {
    console.log(data);
    var cats = data.animalshelter.animals.cats;
    var dogs = data.animalshelter.animals.dogs;
    var guineapigs = data.animalshelter.animals.guineapigs;
    var rabbits = data.animalshelter.animals.rabbits;
    console.info(cats.length);
    for (var i = 0; i < cats.length; i++) {
        $(".row").append('<div class="col s12 m4 l4">' +
            ' <div class="card">' +
            '<div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="' + cats[i].pic + '">' +
            '</div>' +
            '<div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4"> ' + cats[i].name + ' <i class="mdi-navigation-more-vert right"></i></span>' +
            '<p><a href="#">Project link</a></p>' +
            '</div>' +
            '<div class="card-reveal" style="display: none; transform: translateY(0px);">' +
            '<span class="card-title grey-text text-darken-4">' + cats[i].name + ' <i class="mdi-navigation-close right"></i></span>' +
            '<p> ' + cats[i].descr + ' </p>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    for (var i = 0; i < dogs.length; i++) {
        $(".row").append('<div class="col s12 m4 l4">' +
            ' <div class="card">' +
            '<div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="' + dogs[i].pic + '">' +
            '</div>' +
            '<div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4"> ' + dogs[i].name + ' <i class="mdi-navigation-more-vert right"></i></span>' +
            '<p><a href="#">Project link</a></p>' +
            '</div>' +
            '<div class="card-reveal" style="display: none; transform: translateY(0px);">' +
            '<span class="card-title grey-text text-darken-4">' + dogs[i].name + ' <i class="mdi-navigation-close right"></i></span>' +
            '<p> ' + dogs[i].descr + ' </p>' +
            '</div>' +
            '</div>' +
            '</div>');
    }


});