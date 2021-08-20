function updateProduct(product, price, isIncrase){
    const productInput = document.getElementById(product + '-incrase');
    const productPrice = productInput.innerText;
    if(isIncrase){
        productInput.innerText = parseInt(productPrice) * price;
    }
    else if(productPrice < 180){
        productInput.innerText = parseInt(productPrice) + price;
    }
    return productPrice;
    
}
//memory details
document.getElementById('memory-conastant').addEventListener('click',function(){
  updateProduct('memory', 0, true);
});

document.getElementById('memory-plus').addEventListener('click', function(){
    updateProduct('memory', 180, false);
});
//delivery details
document.getElementById('delivery-conastant').addEventListener('click', function(){
    updateProduct('delivary', 0, true);
});
document.getElementById('delivery-plus').addEventListener('click', function(){
    const deliveryInput = document.getElementById('delivary-incrase');
    const deliveryCost = deliveryInput.innerText;
    if( deliveryCost < 20){
        deliveryInput.innerText = parseInt(deliveryCost) + 20;
    }
})