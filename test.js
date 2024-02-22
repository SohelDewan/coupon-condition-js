const allBtn = document.getElementsByClassName('add-btn');

for(let btn of allBtn){
    btn.addEventListener('click', (event) => {
        // console.log(event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText);
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const catgory = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-players-container');
// not to select players more than 4 and return false
        const initialCount = updateValue('cart');
        if(initialCount + 1 > 4){
            alert("You cannot select players more than 4");
            return;
        }
// update for budget cart and letf how much left
        const budget =  updateValue('budget');
        document.getElementById('budget').innerText = budget - parseInt(price);
        const cartCount =  updateValue('cart');
        document.getElementById('cart').innerText = cartCount + 1;
        const cartLetf =  updateValue('remain');
        document.getElementById('remain').innerText = cartLetf - 1;


        const div = document.createElement('div');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = name;
        p2.innerText = catgory;
        p3.innerText = price;

        div.classList.add('flex');
        div.classList.add('justify-between');
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);
        updateTotalCost(price);
        updateGrandTotal();

    });
}

// function updateTotalCost(price) {
//     const totalCost = document.getElementById('total-cost').innerText;
//     const convertedCost = parseInt(totalCost);
//     const sum = convertedCost + parseInt(price);
//     document.getElementById('total-cost').innerText = sum;
//     // console.log(sum);
// }

function updateGrandTotal(status){
    const totalCost = updateValue('total-cost');
    if(status == undefined){
        // console.log("okay");
        document.getElementById('grand-total').innerText = totalCost;
    }else{
        // console.log("nokay");
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode == "rosa") {
            // const discounted = totalCost * 0.2;
            // console.log(discounted);
            document.getElementById('grand-total').innerText = totalCost * 0.8;
        }else{
            alert("Please enter coupon code that is valid");
        }
    }
}
function updateTotalCost(value){
    // console.log(value);
    const totalCost = updateValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}

function updateValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}