var rwagkey="16eeee7089554d7191b4a1a048ccb468";
enter_into_div_toprated=function(name, /*developer,*/ release_date, rating, genre, platform, pic, divpar)
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
    "url": "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key="+rwagkey+"&ordering=-metacritic",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "json",
    },
    async: true
};

ajax1 = function(aja)
{
  $(document.getElementById('tpratedct')).empty();
  console.log("start");
 return $.ajax(aja).done(function(response){
   loadgames(response);
   $(document.getElementById("loadingtp")).fadeOut("slow");
    });
}

loadgames = function(response){
       var games =response.results;
       for(var i=0; i<games.length; i++)
       {
       enter_into_div_toprated(games[i].name, /*games[i].developer,*/ games[i].released, games[i].metacritic,
                             games[i].genres, games[i].platforms,
                             games[i].background_image, document.getElementById('tpratedct'));
       }
}

$(document).ready(function() {
  load();
  $(document).ajaxStart(ajax1(iload)).ajaxStop(function () {}).ajaxError(function (e,xhr,opt){});
});

load = function(){
   var l=document.getElementById("loadingtp");
   if(l!=null){
     $(l).fadeIn("slow");
   }
}
