var rwagkey="16eeee7089554d7191b4a1a048ccb468";
enter_into_div_new=function(name, developer, desc, genre, platform, date, pic, divpar)
{
       var txt2 = "<div class='gamect'><a id=gname>"+name+"</a>";
           txt2 += "<img id='gamepic' src='" + pic + "' alt='" + name + "'>";
           txt2 += "<div class='info'> <ul class='infolist'>";
           txt2 += "<li>Developer: " + developer + "</li>";
           txt2 += "<li>Realese Date: " + date + "</li>";
           txt2 += "<li>Description: " + desc + "</li>";
           txt2 += "<li>Genre: " + genre + "</li>";
           txt2 += "<li>Platform: "+platform+"</li>";
           txt2 += "</ul></div></div>";
           /*$(divpar).css({
			           height: function( index, value ) {
				               return parseFloat( value ) * 1.111;
			                  }
	             });*/
           $(txt2).appendTo(divpar);

}

var iload = {
    "url": "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games?sort-by=popularity",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "json",
    },
    async: true
};

findSpecifcImage = function(id){
    return {
    "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
    "method": "POST",
    "timeout": 0,
    "headers": {
       "Client-ID": "2l5fakiq5dh3h3qxtgkiru333fqshf",
       "Authorization": "Bearer lck032y3lpvgszwf1ucpc53btskknt",
       "Content-Type": "json",
     },
     "data": "fields *; limit 1;"
   }
}

ajax1 = function(aja)
{
  $(document.getElementById('feturecnt')).empty();
  console.log("start");
 return $.ajax(aja).done(function(response){
   loadgames(response);
   $(document.getElementById("loadingf")).fadeOut("slow");
  });
}

ajax2 = function(aja)
{
 return $.ajax(aja).done(function(response){console.log(response)});
}

loadgames = function(games){
       for(var i=0; i<games.length && i<20; i++)
       {
       enter_into_div_new(games[i].title, games[i].developer, games[i].short_description,
                             games[i].genre, games[i].platform, games[i].release_date,
                             games[i].thumbnail, document.getElementById('feturecnt'));
       }
}

$(document).ready(function() {
  console.log("start");
  $(document).ajaxStart(ajax1(iload)).ajaxStop(function () {}).ajaxError(function (e,xhr,opt){});
});
