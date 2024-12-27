function getItemTitleById(itemTitleId) {
  const itemTitle = document.getElementById(itemTitleId).innerText;
  return itemTitle;
}

function getItemPriceById(itemPriceId) {
  const itemPrice = document.getElementById(itemPriceId).innerText;
  const price = parseFloat(itemPrice);
  return price;
}

function emptyCouponField(couponFieldId) {
  const couponField = document.getElementById(couponFieldId);
  couponField.value = "";
}

function setTitleAndPrice(ParentElementId, itemTitle, itemPrice) {
  const parentElement = document.getElementById(ParentElementId);
  const childElement = document.createElement("li");
  childElement.innerHTML = `${itemTitle} = ${itemPrice} tk`;
  childElement.classList.add("font-medium", "my-2");
  parentElement.appendChild(childElement);
}

function setElementValueById(elementId, newValue) {
  const elementField = document.getElementById(elementId);
  elementField.innerText = newValue;
}

function addToCart(
  clickEventId,
  itemTitleId,
  itemPriceId,
  ParentElementId,
  totalPriceId,
  totalFinalId,
  couponFieldId
) {
  document
    .getElementById(clickEventId)
    .addEventListener("mousedown", function () {
      const itemTitle = getItemTitleById(itemTitleId);
      const itemPrice = getItemPriceById(itemPriceId);
      setTitleAndPrice(ParentElementId, itemTitle, itemPrice);
      calculateTotalPrice(totalPriceId, totalFinalId, itemPrice);
      emptyCouponField(couponFieldId);
    });
}
function enablePurchaseButton(eventClickId, currentPriceId, purchaseButtonId) {
  document
    .getElementById(eventClickId)
    .addEventListener("mouseup", function () {
      const price = getItemPriceById(currentPriceId);
      const button = document.getElementById(purchaseButtonId);
      if (price > 0) {
        button.removeAttribute("disabled");
      } else {
        button.setAttribute("disabled", "true");
      }
    });
}
function couponButton(
  eventInputId,
  discountButtonId,
  couponCodeId,
  totalPriceId
) {
  document.getElementById(eventInputId).addEventListener("keyup", function () {
    const inputField = document.getElementById(eventInputId);
    const inputValue = inputField.value;
    const couponCode = getItemTitleById(couponCodeId);
    const totalPrice = getItemPriceById(totalPriceId);
    const button = document.getElementById(discountButtonId);
    if (inputValue === couponCode && totalPrice >= 200) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "true");
    }
  });
}
function calculateTotalPrice(totalPriceId, totalFinalId, itemPrice) {
  const formerPrice = getItemPriceById(totalPriceId);
  const newPrice = formerPrice + itemPrice;
  setElementValueById(totalPriceId, newPrice);
  setElementValueById(totalFinalId, newPrice);
}

function calculateDiscountPrice(
  eventButtonId,
  InputFieldId,
  totalPriceId,
  discountElementId,
  finalPriceId
) {
  document.getElementById(eventButtonId).addEventListener("click", function () {
    const inputField = document.getElementById(InputFieldId);
    inputField.value = "";
    const button = document.getElementById(eventButtonId);
    button.setAttribute("disabled", "true");
    const totalPrice = getItemPriceById(totalPriceId);
    const discountPrice = totalPrice * 0.2;
    const discountPriceElement = document.getElementById(discountElementId);
    discountPriceElement.innerText = discountPrice.toFixed(2);
    const finalPrice = totalPrice - discountPrice.toFixed(2);
    const finalPriceElement = document.getElementById(finalPriceId);
    finalPriceElement.innerText = finalPrice.toFixed(2);
  });
}

const copyDiscountCodeButton = async (event) => {
  navigator.clipboard.writeText(event.target.innerText);
}
