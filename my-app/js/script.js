new Vue({

 el: '#root',
 data: {
   ul: ["Home", "Shop", "Products", "Categories", "News", "Elements"],
   buttonShop: "SHOP NOW!",
   elIcons: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram","fab fa-youtube"],
   elShopping: ["Shopping Cart", "My Account", "CART"],
   titleFooter: ['TOP RATED PRODUCTS', 'RECENT POSTS', 'TAGS'],
   objFooter: {

     contact: {street: '12345 North Main Street,', state: 'New York, NY 555555', phone: 'Phone: 1.800.555.6789', email: 'Email: info@company.com', web: 'Web: Theme-fusion.com'},

     topRatedProducts: [
       {product: 'Leather Gloves', vote: 5, cost: ['$45'], picture: 'img/images/leather_gloves-120x156.jpg'},
       {product: 'Black Leather Jacket', vote: 4, cost: ['$235', '$200'], picture: 'img/images/black_elegant_leather_jacket-120x156.jpg'},
       {product: 'Spring Printed Dress', vote: 0, cost: ['$47'], picture: 'img/images/spring_printed_dress-120x156.jpg'}
     ],

     recentPost: ['Aenean lobortis sapien enim viverra', 'Duis ac massa semper maximus', 'Nunc fermint nulla eu justo sem id', 'Aliquam posuere magna eget nibh', 'Cras ac   nulla ac consecte rutrum', 'Fusce mattis nunc ut aliquam'],

     tag: ['Black', 'boots', 'Brown', 'Casual', 'D&G', 'Fabric', 'flowers', 'Grey', 'hat', 'Hipster', 'lines', 'multi-purpose', 'New York', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter'],

     copyright: ['© Copyright 2012 - 2021', 'Avada Theme by Theme Fusion', 'All Rights Reserved', 'Powered by WordPress']
   }
 }

});
Vue.config.devtools = true;
