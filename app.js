const allBtn = document.getElementsByClassName("add-btn");
// console.log(allBtn);

for (let btn of allBtn) {
  // console.log(btn);
  btn.addEventListener("click", (event) => {
    // console.log(event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText);
    const name = event.target.parentNode.parentNode.childNodes[1].innerText;
    const price =
      event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    // console.log(price); sorry for changing catgory variables with price var
    const catgory =
      event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    // console.log(catgory);
    const selectedContainer = document.getElementById(
      "selected-players-container"
    );

    const budget = getConvertValue('budget');
    document.getElementById("budget").innerText = budget - parseInt(price);

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = catgory;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);
    div.classList.add("flex");
    div.classList.add("justify-between");

    updateTotalCost(price);
    updateGrandTotal();
  });
}

function updateGrandTotal(status) {
  // console.log(status);
  const totalCost = getConvertValue("total-cost");
  if (status == undefined) {
    document.getElementById("grand-total").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;

    if (couponCode == "rosa") {
      const discounted = totalCost * 0.2;
      document.getElementById("grand-total").innerText = totalCost - discounted;
    } else {
      alert("Please enter coupon code that is valid");
    }
  }
}
function updateTotalCost(value) {
  // console.log(value);
  const totalCost = getConvertValue("total-cost");
  const convertedPrice = parseInt(value);
  const sum = totalCost + convertedPrice;
  document.getElementById("total-cost").innerText = sum;
}
function getConvertValue(id) {
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}
