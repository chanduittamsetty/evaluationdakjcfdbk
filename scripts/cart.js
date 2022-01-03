var cartarr=JSON.parse(localStorage.getItem('cartdet')) || [];
displaycart(cartarr);
function displaycart(arr){
    document.getElementById('cartcont').textContent="";
    arr.map(function(elm,index){
        let image=document.createElement('img');
        image.src=elm.curl;
        let dname=document.createElement('h2');
        dname.textContent=elm.cname;
        let dprice=document.createElement('h2');
        dprice="  Rs-"+elm.cprice;
        var butt=document.createElement('button');
        butt.textContent='Remove';
        butt.addEventListener('click',function(){
            cartarr.splice(index,1);
            localStorage.setItem('cartdet',JSON.stringify(cartarr));
            displaycart(cartarr);
            carttotal(cartarr);

            console.log('here');
        })
        let ddive=document.createElement('div');
        ddive.append(image,dname,dprice,butt);
        var container=document.getElementById('cartcont');
        container.append(ddive);
    })
}
carttotal(cartarr);
function carttotal(carr){
    document.getElementById('carttotal').textContent="";
    var total=0;
    carr.map(function(elm){
        total=total+elm.cprice;
    })

    let tot=document.createElement('h2');
    tot.textContent=`Cart Total = Rs-${total}.00`;
    let check=document.createElement('button');
    check.textContent='CheckOut';
    check.addEventListener('click',function(){
        window.location.href='checkout.html'
    })
    document.getElementById('carttotal').append(tot,check);
}