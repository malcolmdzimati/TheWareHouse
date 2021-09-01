/*asynchronous calls will be used because the there is no need to require the whole page to be update just to fetch data
from the api so the data can be retrieved dynaimcally and this is done asynchronous api calls*/

var rwagkey="16eeee7089554d7191b4a1a048ccb468";
enter_into_div_trending=function(name, /*developer,*/ release_date, rating, genre, platform, tags, pic, divpar)
{
       var txt2 = "<div class='gamect'><a id=gname>"+name+"</a>";
           txt2 += "<img id='gamepic' src='" + pic + "' alt='" + name + "'>";
           txt2 += "<div class='info'> <ul class='infolist'>";
        /*   txt2 += "<li>Developer: " + developer + "</li>";*/
           txt2 += "<li>Release Date: " + release_date + "</li>";
           txt2 += "<li>Rating: " + rating + "</li>";
           txt2 += "<li>Genre: ";
           var arrayLength = genre.length;
           for (var i = 0; i < arrayLength-1; i++) {
                txt2 += genre[i].name + ", ";
           }
           txt2 += genre[arrayLength-1].name+"</li>";
           if(tags!=null){
              txt2 += "<li>Tags: ";
              var arrayLength = tags.length;
              for (var i = 0; i < 3 && i < arrayLength; i++) {
                  txt2 += tags[i].name;
                  if(i<2 && i < arrayLength-1){
                    txt2+=", ";
                  }
              }
              txt2 += "</li>";
           }
           txt2 += "<li>Platform: ";
           var arrayLength = platform.length;
           for (var i = 0; i < arrayLength-1; i++) {
                txt2 += platform[i].platform.name + ", ";
           }
           txt2 += platform[arrayLength-1].platform.name+"</li>";
           txt2 += "</ul></div></div>";
           /*$(divpar).css({
			           height: function( index, value ) {
				               return parseFloat( value ) * 1.111;
			                  }
	             });*/
           $(txt2).appendTo(divpar);

}

var iload = {
    "url": "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key="+rwagkey,
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "json",
    },
    "data": "fields *; limit 9;",
    async: true
};

$(document).ready(function() {
  console.log("start");
  $(document).ajaxStart(ajax1(iload)).ajaxStop(function () {}).ajaxError(function (e,xhr,opt){});
});

loadgames = function(response){
       var games =response.results;
       for(var i=0; i<games.length; i++)
       {
       enter_into_div_trending(games[i].name, /*games[i].developer,*/ games[i].released, games[i].rating,
                             games[i].genres, games[i].platforms, games[i].tags,
                             games[i].background_image, document.getElementById('trendingmainct'));
       }
       $(document.getElementById("loading")).fadeOut("slow");
}

ajax1 = function(aja)
{
  $(document.getElementById('trendingmainct')).empty();
  load();
  console.log("start");
 $.ajax(aja).done(function(response){loadgames(response)});
}

find = function(name){
  return {
      "url": "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key="+rwagkey+"&search="+name,
      "method": "GET",
      "timeout": 0,
      "headers": {
          "Content-Type": "json",
      },
    };
}

genre = function(name){
  return {
      "url": "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key="+rwagkey+"&genres="+name,
      "method": "GET",
      "timeout": 0,
      "headers": {
          "Content-Type": "json",
      },
    };
}

platform = function(name){
  return {
      "url": "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key="+rwagkey+"&parent_platforms="+name,
      "method": "GET",
      "timeout": 0,
      "headers": {
          "Content-Type": "json",
      },
    };
}

window.onload = function () {

    var x =document.getElementById('sbmtbtn');
    var actgenre =document.getElementById('GAction');
    var Rgenre =document.getElementById('GRacing');
    var Advgenre =document.getElementById('GAdvent');
    var Sgenre =document.getElementById('GSport');


    var PlayStation =document.getElementById('PS4Pla');
    var Xbox =document.getElementById('XBPla');
    var PC =document.getElementById('PCPla');

      $(x).on('click', function (clickEvent) {search()});
      $(actgenre).on('click', function (clickEvent) {ajax1(genre(4))});
      $(Rgenre).on('click', function (clickEvent) {ajax1(genre(1))});
      $(Advgenre).on('click', function (clickEvent) {ajax1(genre(3))});
      $(Sgenre).on('click', function (clickEvent) {ajax1(genre(15))});


      $(PlayStation).on('click', function (clickEvent) {ajax1(platform(2))});
      $(Xbox).on('click', function (clickEvent) {ajax1(platform(3))});
      $(PC).on('click', function (clickEvent) {ajax1(platform(1))});

};

search = function(){
  $(document.getElementById('trendingmainct')).empty();
  var text = $(document.getElementById('txta')).val();
  load();
  return $.ajax(find(text)).done(function(response){
    console.log(response);
    $(document.getElementById("loading")).fadeOut("slow");
    loadgames(response);
  });
}

findSpecifcImage = function(id){
    return {
    "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/covers/",
    "method": "POST",
    "timeout": 0,
    "headers": {
       "Client-ID": "2l5fakiq5dh3h3qxtgkiru333fqshf",
       "Authorization": "Bearer lck032y3lpvgszwf1ucpc53btskknt",
       "Content-Type": "json",
     },
     "data": "fields *; where id="+id+";",
      async: true
   },

   result=function(id)
   {
       this.info.data="fields url; where game="+id+";";
       $.ajax(this.info).done(function (response) {
           console.log(response[0].url);
       })
     }
   };

   var findSpecifcDeveloper = {
     info : {
     "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/companies/",
     "method": "POST",
     "timeout": 0,
     "headers": {
        "Client-ID": "2l5fakiq5dh3h3qxtgkiru333fqshf",
        "Authorization": "Bearer lck032y3lpvgszwf1ucpc53btskknt",
        "Content-Type": "json",
      },
      "data": "fields name; where id = 54522;",
       async: true
    },

    result:function(id)
    {
        this.info.data="fields name; where id="+id+";";
        $.ajax(this.info).done(function (response) {
            return response[0].name;
        })
      }
    };

    load = function(){
      $(document.getElementById('trendingmainct')).empty();
       var l=document.getElementById("loading");
       if(l!=null){
         $(document.getElementById("loading")).fadeIn("slow");
       }
    }
