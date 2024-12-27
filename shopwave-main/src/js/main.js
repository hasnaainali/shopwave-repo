addToCart(
  "cardOne",
  "cardOne-Title",
  "cardOne-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardOne", "total-price", "btn-buy");
addToCart(
  "cardTwo",
  "cardTwo-Title",
  "cardTwo-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardTwo", "total-price", "btn-buy");
addToCart(
  "cardThree",
  "cardThree-Title",
  "cardThree-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardThree", "total-price", "btn-buy");
addToCart(
  "cardFour",
  "cardFour-Title",
  "cardFour-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardFour", "total-price", "btn-buy");
addToCart(
  "cardFive",
  "cardFive-Title",
  "cardFive-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardFive", "total-price", "btn-buy");
addToCart(
  "cardSix",
  "cardSix-Title",
  "cardSix-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardSix", "total-price", "btn-buy");
addToCart(
  "cardSeven",
  "cardSeven-Title",
  "cardSeven-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardSeven", "total-price", "btn-buy");
addToCart(
  "cardEight",
  "cardEight-Title",
  "cardEight-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardEight", "total-price", "btn-buy");
addToCart(
  "cardNine",
  "cardNine-Title",
  "cardNine-Price",
  "item-list",
  "total-price",
  "total",
  "input-coupon"
);
enablePurchaseButton("cardNine", "total-price", "btn-buy");

couponButton("input-coupon", "btn-coupon", "coupon-code", "total-price");

calculateDiscountPrice(
  "btn-coupon",
  "input-coupon",
  "total-price",
  "discount",
  "total"
);

document.getElementById("btn-buy").addEventListener("click", function () {
  const purchaseModal = document.getElementById("purchase-modal");
  purchaseModal.showModal();
});
document.getElementById("btn-home").addEventListener("click", function () {
  location.reload();
});

document
  .getElementById('coupon-code')
  .addEventListener('click', (event) => copyDiscountCodeButton(event));

