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
        
           

        }
    



});