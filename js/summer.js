let total = 0;

function clickHandle(target){
    const totalSpan = document.getElementById('total-span');
    const clickElement = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = clickElement;
    totalSpan.appendChild(li);

    const cardPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const convertNumber = parseFloat(cardPrice);
    // const twoDesimal = convertNumber.toFixed(2);
    
    total = total + convertNumber;
    const twoDesimal = total.toFixed(2);
     

    const totalPrice = document.getElementById('total-price');
    const mainTotalPrice = document.getElementById('main-total');
    const totalPriceDecimal = totalPrice.innerText = twoDesimal;
    mainTotalPrice.innerText = twoDesimal;
    
    
    let btnApply = document.getElementById('btn-apply');
    let makePurchase = document.getElementById('btn-parchase');
     

    if(totalPriceDecimal >= 200){
        btnApply.disabled = false;
    }

    else{
        btnApply.disabled = true;
    }

    if(totalPriceDecimal > 0){
        makePurchase.disabled = false;
      } 




}
function applyButton(){
    let inputApply = document.getElementById('input-apply');
    let discountPrice = document.getElementById('discount-price');
    let mainTotalPrice = document.getElementById('main-total');

    if(inputApply.value === 'SELL200'){
        let discount = total * 20/100;
        let discountTotal = total - discount;
        discountPrice.innerText = discount.toFixed(2); 
        mainTotalPrice.innerText = discountTotal.toFixed(2);  
    }
    else{
        alert('This is wrong coupon number');
    }

    inputApply.value = '';
} 

    function btnGoHome(){
        window.location.href = 'index.html';

        
        
        
        
    }

