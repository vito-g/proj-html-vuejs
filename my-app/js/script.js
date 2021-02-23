new Vue({

 el: '#root',
 data: {
   ul: ["Home", "Shop", "Products", "Categories", "News", "Elements"],
   buttonShop: "SHOP NOW!",
   elIcons: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram","fab fa-youtube"],
   elShopping: ["Shopping Cart", "My Account", "CART"],
   titleFooter: ['TOP RATED PRODUCTS', 'RECENT POSTS', 'TAGS'],

   objMain: {

     productsItemsMan: [
       {picture: 'img/images/black_elegant_leather_jacket-400x520.jpg', name: 'Black Leather Jacket', tag: ['Men,', 'Jackets,', 'Jeans'], cost: ['$235', '$200']},
       {picture: 'img/images/black_leather_suit-400x520.jpg', name: 'Black Leather Suit', tag: ['Jackets,', 'Men'], cost: ['$176']},
       {picture: 'img/images/blue_jacket_and_white_stripe_tee-400x520.jpg', name: 'Blue Jacket & Stripe Tee', tag: ['Jackets,', 'Men,', 'Suits'], cost: ['$580']},
       {picture: 'img/images/modern_black_leather_suit-400x520.jpg', name: 'Modern Black Leather Suit', tag: ['Jackets,', 'Men'], cost: ['$96']}
     ],

     collection: [
       {picture: 'img/images/winter_collection_bg.jpg', name: 'Winter Collection', description: 'STYLISH AND WARM'},
       {picture: 'img/images/spring_collection_bg.jpg', name: 'Spring Collection', description: 'BRIGHT AND COLORFUL'},
       {picture: 'img/images/autumn_collection_bg.jpg', name: 'Autumn Collection', description: 'RICH AND COMFORTABLE'}
     ],

     bestSellerItems: [
       {picture: 'img/images/spring_printed_dress-400x520.jpg'},
       {picture: 'img/images/modern_love_tee-400x520.jpg'},
       {picture: 'img/images/black_leather_jacket-400x520.jpg'},
       {picture: 'img/images/black_elegant_leather_jacket-400x520.jpg'},
       {picture: 'img/images/hipster_black_top-400x520.jpg'},
     ],

     bestSellerItemsBottom: [
       {picture: 'img/images/promo_box_1_bg.jpg'},
       {picture: 'img/images/promo_box_2_bg.jpg'}
     ]

   },

   objFooter: {

     contact: {street: '12345 North Main Street,', state: 'New York, NY 555555', phone: 'Phone: 1.800.555.6789', email: 'Email: info@company.com', web: 'Web: Theme-fusion.com'},

     topRatedProducts: [
       {product: 'Leather Gloves', vote: 5, cost: ['$45'], picture: 'img/images/leather_gloves-120x156.jpg'},
       {product: 'Black Leather Jacket', vote: 4, cost: ['$235', '$200'], picture: 'img/images/black_elegant_leather_jacket-120x156.jpg'},
       {product: 'Spring Printed Dress', vote: 0, cost: ['$47'], picture: 'img/images/spring_printed_dress-120x156.jpg'}
     ],

     recentPost: ['Aenean lobortis sapien enim viverra', 'Duis ac massa semper maximus', 'Nunc fermint nulla eu justo sem id', 'Aliquam posuere magna eget nibh', 'Cras ac   nulla ac consecte rutrum', 'Fusce mattis nunc ut aliquam'],

     tag: ['Black', 'boots', 'Brown', 'Casual', 'D&G', 'Fabric', 'flowers', 'Grey', 'hat', 'Hipster', 'lines', 'multi-purpose', 'New York', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter'],

     copyright: ['© Copyright 2012 - 2021', 'Avada Theme by Theme Fusion', 'All Rights Reserved', 'Powered by WordPress'],

     cards: ['https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/payment_cards_footer.png']
   }


 }

});
Vue.config.devtools = true;
