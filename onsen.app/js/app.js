
//  // Your web app's Firebase configuration
//  var firebaseConfig = {
//     apiKey: "AIzaSyDrcRZdk6aaySis7IfPWg-zJDk-BL__c_s",
//     authDomain: "food-1ef28.firebaseapp.com",
//     databaseURL: "https://food-1ef28.firebaseio.com",
//     projectId: "food-1ef28",
//     storageBucket: "food-1ef28.appspot.com",
//     messagingSenderId: "608405620855",
//     appId: "1:608405620855:web:26d1be7043611fa50cde72"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//         //use firestore
//         var db = firebase.firestore();

//         db.collection("recommended").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//         console.log(doc.data().name);
//         console.log(doc.data().id);
//     });
// });
     
    
document.addEventListener('init', function(event) {

    var page = event.target;


console.log(page.id);

    if (page.id ==='tabbar') {
        //code for tapbar
        
        $("#menubtn").click(function(){
        var menu = document.getElementById('menu');
        menu.open();
    });
    $("#btnFastfood").click(function(){

        var content = document.getElementById('content');
          var menu = document.getElementById('menu');
        content.load('fastfood.html')
         .then(menu.close.bind(menu));

    });
    $("#Backhome").click(function(){

        var content = document.getElementById('content');
        var menu = document.getElementById('menu');
        content.load('tabbar.html')
        .then(menu.close.bind(menu));
       
    });
//     $("#carousel").empty();
          
//     db.collection("recommended").get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
         
//         var item = `<ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
//         <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
//         </div>
//         <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
//     </ons-carousel-item>`

//         $("#carousel").append(item);
          
//       });

// });
    
  
      
    }

    
    if (page.id ==="sidemenu") {
        //code for tap1
          
        $("#logoutbtn").click(function(){

            var content = document.getElementById('content');
              var menu = document.getElementById('menu');
            content.load('login.html')
             .then(menu.close.bind(menu));
        });
        
        $("#homebtn").click(function(){

            var content = document.getElementById('content');
              var menu = document.getElementById('menu');
            content.load('tabbar.html')
             .then(menu.close.bind(menu));
        });
    }
    
    if (page.id ==='login') {
   
        // var login = function() {
        //     var username = document.getElementById('username').value;
        //     var password = document.getElementById('password').value;
          
        //     if (username === 'bob' && password === 'secret') {
        //       ons.notification.alert('Congratulations!');
        //     } else {
        //       ons.notification.alert('Incorrect username or password.');
        //     }
        //   };
          $("#btnRegist").click(function(){

      
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('regist.html')
            .then(menu.close.bind(menu));
           
        });
        $("#btnLogin").click(function(){

         
          

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                .then(menu.close.bind(menu));
               
            });
           
        
    }
        if (page.id ==='regist') {
         
            $("#btnRegist1").click(function(){

    
    
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('login.html')
                .then(menu.close.bind(menu));
               
            });

        }
        if (page.id ==='fastfood') {
         
            $("#back").click(function(){

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                .then(menu.close.bind(menu));
               
            });
            
            $("#Backhome").click(function(){

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                .then(menu.close.bind(menu));
               
            });
            $("#btnKfc").click(function(){

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('MenuKfc.html')
                .then(menu.close.bind(menu));
               
            });

        }
        if (page.id ==='Kfc') {
         
            $("#back").click(function(){

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('fastfood.html')
                .then(menu.close.bind(menu));
               
            });
            $("#Backhome").click(function(){

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                .then(menu.close.bind(menu));
               
            });
            $("#btnOrder").click(function(){

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('orderCf.html')
                .then(menu.close.bind(menu));
               
            });

        }
        if (page.id ==='orderCf') {
         
            $("#back").click(function(){

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('MenuKfc.html')
                .then(menu.close.bind(menu));
               
            });
        
            $("#Backhome").click(function(){

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                .then(menu.close.bind(menu));
               
            });

        }
    



});