var url='www.themealdb.com/api/json/v1/1/filter.php?a=India';
getdetails();
async function getdetails(){
    try{
        let response=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
        let data= await response.json();
        let meals=data.meals;
        console.log(meals);
        displaymeals(meals);
    }
    catch(err){
        console.log(err);
    }
}
var cartarr=JSON.parse(localStorage.getItem('cartdet')) || [];
function displaymeals(arr){
    arr.map(function(elm){
        let div=document.createElement('div');
        let img=document.createElement('img');
        var y=elm.strMealThumb;
        img.src=y;
        let name=document.createElement('h2');
     
        var z=elm.strMeal;
        name.textContent=z;
        let price=document.createElement('h3');
        var x=Math.floor(Math.random()*(500-100))+100;
        price.textContent=x;
        let but=document.createElement('button');
        but.textContent='add To Cart';
        but.addEventListener('click',function(elm){
            var obj={
                cname:z,
                curl:y,
                cprice:x
            }
            cartarr.push(obj);
            localStorage.setItem('cartdet',JSON.stringify(cartarr));
        })
        div.append(img,name,price,but);
        document.getElementById('cont').append(div);


    })
}
function gotocart(){
    window.location.href='cart.html';
}

