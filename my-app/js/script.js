new Vue({

 el: '#root',
 data: {
   ul: ["Home", "Shop", "Products", "Categories", "News", "Elements"],
   buttonShop: "SHOP NOW",
   elIcons: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram","fab fa-youtube"],
   elShopping: ["Shopping Cart", "My Account", "CART"],
   cart: '#2f3034'
 }
});
Vue.config.devtools = true;
