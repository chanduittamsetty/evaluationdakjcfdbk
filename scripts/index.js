function signup(){
    document.getElementById('logindiv').style.display="";
    document.getElementById('signupdiv').style.display='block';
}
function signin(){
    document.getElementById('signupdiv').style.display='';
    document.getElementById('logindiv').style.display='block';
}
function menu(){
    window.location.href='menu.html';
}
var arr=JSON.parse(localStorage.getItem('signupdetails')) || [];
function getdetails(){
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    var obj={
        email:email,
        password:pass
    }
    arr.push(obj);
    localStorage.setItem('signupdetails',JSON.stringify(arr));

}
function checkdetails(){
    var xemail=document.getElementById('xemail').value;
    var xpass=document.getElementById('xpass').value;
    arr.map(function(elm){
        if((elm.email==xemail) && (elm.password==xpass)){
                alert('loggedin');


        }
    });
}
function openmenu(){
    window.location.href='menu.html';
}