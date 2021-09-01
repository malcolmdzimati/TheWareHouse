window.onload = function ()
{
    var rb=document.getElementById('Reg');
    var db=document.getElementById('su');
    var lg=document.getElementById('si');
    var lgb=document.getElementById('login');
    var lgout=document.getElementById('lgout');
    var lgoutb=document.getElementById('logout');
    var theme=document.getElementById('theme');

    if(document.getElementById("dom-target")){
        var div = document.getElementById("dom-target");
        var myData = div.textContent;
        localStorage.setItem('API_key', myData);
    }

    if(localStorage.getItem('theme')!=null) {
        document.querySelector('#theme').innerHTML = localStorage.getItem('theme');
    }

    console.log(localStorage.getItem("theme"));

    $(theme).on('click', function (clickEvent) {
        if(theme.innerText==='Dark'){
            document.querySelector('#theme').innerHTML = 'Light';
            document.getElementById('footer').style.backgroundColor='rgb(231, 231, 231)';
            document.getElementById('mheader').style.backgroundColor='rgb(231, 231, 231)';
            document.getElementById('nav').style.backgroundColor='rgb(231, 231, 231)';
            localStorage.setItem('theme','Light');
        }else if(theme.innerText==='Light'){
            document.querySelector('#theme').innerHTML = 'Dark';
            document.getElementById('footer').style.backgroundColor='grey';
            document.getElementById('mheader').style.backgroundColor='grey';
            document.getElementById('nav').style.backgroundColor='grey';
            localStorage.setItem('theme','Dark');
        }
    })

    if(theme.innerText==='Dark'){
        document.getElementById('footer').style.backgroundColor='grey';
        document.getElementById('mheader').style.backgroundColor='grey';
        document.getElementById('nav').style.backgroundColor='grey';
        document.querySelector('#theme').innerHTML = 'Dark';
    }else if(theme.innerText==='Light'){
        document.getElementById('footer').style.backgroundColor='rgb(231, 231, 231)';
        document.getElementById('mheader').style.backgroundColor='rgb(231, 231, 231)';
        document.getElementById('nav').style.backgroundColor='rgb(231, 231, 231)';
        document.querySelector('#theme').innerHTML = 'Light';
    }
    $(rb).on('click', function (clickEvent) {
        db.style.display='block';
      })

    $(lgoutb).on('click', function (clickEvent) {
        lgout.style.display='block';
    })

    window.onclick = function(event) {
        if (event.target == lgout) {
            lgout.style.display = "none";
        }
    }

      window.onclick = function(event) {
        if (event.target == db) {
          db.style.display = "none";
        }
      }

    $(lgb).on('click', function (clickEvent) {
        lg.style.display='block';
    })

    window.onclick = function(event) {
        if (event.target == lg) {
            lg.style.display = "none";
        }
    }

      var em= document.getElementById('em');
      $(em).blur(function(){
          if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(em.value))){
              alert("Please Enter Valid Email Adress");
            }
      });

      var password= document.getElementById('pas');
      $(password).blur(function(){
        if(!((/\d/.test(password.value)) && (/[A-Z]/.test(password.value)) && (/[a-z]/.test(password.value)) && password.value.length>=8 && hasSymbol(password.value))){
          alert("Please Enter Valid Password, with one up, and low case letter, a number, a Symbol and 8 characters");
        }
      });

      var rpassword= document.getElementById('rpas');
      $(rpassword).blur(function(){
          if(password.value!=rpassword.value){
            alert("please make sure passwords are the same");
          }
      });
}


function hasSymbol(password) {
        var regex = /^[A-Za-z0-9 ]/
        var isValid = regex.test(password);
        return isValid;
    }
