var days=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthmd = [31,    28,    31,    30,    31,    30,     31,    31,    30,    31,    30,    31];

var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

mktable = function(divpar, mnth, yer, y)
{
  var dat = new Date(String(mnth+1).padStart(2, '0')+"/01/"+yer);
  var firstday = dat.getDay()-1;
  var maxday = monthmd[mnth];
  if(mnth==1 && year%4==0){
    maxday=29;
  }

  txt = "<table><tr>";
  for(var i=0; i<7; i++){
    txt += "<th>" + days[i] + "</th>";
  }
  txt += "</tr>";

  var count=1;
  var firstrow=0;
  for(var i=0; i<6; i++){
    txt += "<tr>";
    for(var j=0; j<7; j++){
      if(firstrow>=firstday && count<=maxday){
        if(day!=count || mnth!=month || yer!=year){
            txt += "<td>"+count+"</td>";
        }else{
            txt += "<td id='today'>"+count+"</td>";
        }
        count++;
      }else{
        txt += "<td></td>";
      }
      firstrow++;
    }
    txt += "</tr>";
  }

  txt += "</table>";
  $(txt).appendTo(divpar);

  var txt2="<p id='heading'>"+yer+" "+months[mnth]+"</p>";

  $(txt2).appendTo(y);
}


window.onload = function ()
{
  var x = document.getElementById('con');
  var y = document.getElementById('headcal');
  mktable(x, month, year, y);
  var curm=month;
  var cury=year;

  var nxt =document.getElementById('next');
  $(nxt).on('click', function (clickEvent) {
    $(document.getElementById('heading')).remove();
    $(x).empty();
    curm++;
    if(curm==12){
      curm=0;
      cury++;
    }
    mktable(x,curm,cury,y);
  });
  var pre =document.getElementById('previous');
  $(pre).on('click', function (clickEvent) {
    $(document.getElementById('heading')).remove();
    $(x).empty();
    curm--;
    if(curm==-1){
      curm=11;
      cury--;
    }
    mktable(x,curm,cury,y);
  });
}
