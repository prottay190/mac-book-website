function updateProduct(product, price, isIncrase){
    const productInput = document.getElementById(product + '-incrase');
    const productPrice = productInput.innerText;
    if(isIncrase){
        productInput.innerText = parseInt(productPrice) * price;
    }
    else if(productPrice < 180){
        productInput.innerText = parseInt(productPrice) + price;
    }
    
//   total 
  calculatedTotal();
};


//total

function getInputValue(product){
    const productInput = document.getElementById(product + '-incrase');
    const productPrice = parseInt(productInput.innerText);
    return productPrice;
  
}
 function calculatedTotal(){
    const mainPrice = document.getElementById('starting-price').innerText;
    const mainTotal = parseInt(mainPrice);
    
     const memoryTotal = getInputValue('memory');
     const stotageTotal = getInputValue('storage');
     const deliveryTotal = getInputValue('delivary');
     let allTotal = memoryTotal + stotageTotal + deliveryTotal;
     let macTotalPrice = mainTotal + allTotal;
    //  updateHTml
    document.getElementById('mac-total-cost').innerText = macTotalPrice;
    return macTotalPrice;
 }
 //storage function
 
 //promo code function
 function getMacTotal(){
    const promoInput = document.getElementById('promo-input');
    const promoText = promoInput.value;

    //clear 
    promoInput.value = '';
       const macText = document.getElementById('mac-price');
       const macNumber = macText.innerText;
    if(promoText == 'stevekaku'){
        macText.innerText = parseInt(macNumber) - 20 * 12;
    
    }
 }
 
//memory details
document.getElementById('memory-conastant').addEventListener('click',function(){
  updateProduct('memory', 0, true);
});

document.getElementById('memory-plus').addEventListener('click', function(){
    updateProduct('memory', 180, false);
});
//storage details
document.getElementById('storage-conastant').addEventListener('click', function(){
    updateProduct('storage', 0, true);
});
document.getElementById('storage-add').addEventListener('click', function(){
    const storageInput = document.getElementById('storage-incrase');
    const storageNumber = storageInput.innerText;
    if(storageNumber < 100){
        storageInput.innerText = parseInt(storageNumber) + 100;
        calculatedTotal();
    }

});
document.getElementById('storage-plus').addEventListener('click', function(){
    const storageInput = document.getElementById('storage-incrase');
    let storageNumber = storageInput.innerText;
     storageNumber = 0;
    if(storageNumber < 180){
        storageInput.innerText = parseInt(storageNumber) +180 ;
        calculatedTotal();
    }
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
        calculatedTotal()
    }
});
//  promo code 
document.getElementById('promo-btn').addEventListener('click', function(){
     getMacTotal()
});

