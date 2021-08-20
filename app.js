function updateProduct(product, price, isIncrase){
    const productInput = document.getElementById(product + '-incrase');
    const productNumber = productInput.innerText;
    if(isIncrase){
        productInput.innerText = parseInt(productNumber) * 0 ;
    }
    else if(productNumber < 180){
        productInput.innerText = parseInt(productNumber) + 180;
    }
    return productNumber;
    
}
//memory details
document.getElementById('memory-minus').addEventListener('click',function(){
  updateProduct('memory', 180, true)
});

document.getElementById('memory-plus').addEventListener('click', function(){
    updateProduct('memory', 180, false)
})