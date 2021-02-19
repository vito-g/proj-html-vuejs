new Vue({

 el: '#root',
 data: {
   ul: ["Home", "Shop", "Products", "Categories", "News", "Elements"],
   buttonShop: "SHOP NOW!",
   elIcons: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram","fab fa-youtube"],
   elShopping: ["Shopping Cart", "My Account", "CART"],
   numBoxFooterStripeA: 4,

   objFooter: {

     contact: {street: '12345 North Main Street,', state: 'New York, NY 555555', phone: 'Phone: 1.800.555.6789', email: 'Email: info@company.com', web: 'Web: Theme-fusion.com'},

     topRatedProducts: [
       {product: 'Leather Gloves', vote: 'fas fa-star', cost: '$45'},
       {product: 'Black Leather Jacket', vote: 'fas fa-star', cost: '$235 $200'},
       {product: 'Spring Printed Dress', vote: 'fas fa-star', cost: '$47'}
     ],

     recentPost: ['Aenean lobortis sapien enim viverra', 'Duis ac massa semper maximus', 'Nunc fermint nulla eu justo sem id', 'Aliquam posuere magna eget nibh', 'Cras ac   nulla ac consecte rutrum', 'Fusce mattis nunc ut aliquam'],

     tag: ['Black', 'boots', 'Brown', 'Casual', 'D&G', 'Fabric', 'flowers', 'Grey', 'hat', 'Hipster', 'lines', 'multi-purpose', 'New York', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter']
   }
 }
});
Vue.config.devtools = true;
