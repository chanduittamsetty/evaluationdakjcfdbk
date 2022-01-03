function alerting(){
    alert('Your order is accepted')
    setTimeout(function(){
        alert('your order is being coocked')
    },3000);
    setTimeout(function(){
        alert('your order is ready')
    },8000);
    setTimeout(function(){
        alert('your order is out for delivery')
    },10000);
    setTimeout(function(){
        alert('your order is delivered')
    },12000);
}