
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDrcRZdk6aaySis7IfPWg-zJDk-BL__c_s",
    authDomain: "food-1ef28.firebaseapp.com",
    databaseURL: "https://food-1ef28.firebaseio.com",
    projectId: "food-1ef28",
    storageBucket: "food-1ef28.appspot.com",
    messagingSenderId: "608405620855",
    appId: "1:608405620855:web:26d1be7043611fa50cde72"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();


document.addEventListener('init', function (event) {

    var page = event.target;

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // var displayName = user.displayName;
            var email = user.email;
            console.log(email + "signed in ");

            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            // ...
        } else {

            console.log("signed out ");
            // User is signed out.

        }
    });

    if (page.id === 'tabbar') {
        //code for tapbar

        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });
        $("#btnFastfood").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('fastfood.html')
                .then(menu.close.bind(menu));

        });
        $("#Backhome").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });




        db.collection("recommended").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var item =
                    `<ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
            <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
            </div>
            <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
        </ons-carousel-item>`;


                $("#carousel").append(item);

            });

        });
    }

    if (page.id === "sidemenu") {
      
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var email = user.email;
                $("#header").append(email);
            } else { $("#header").empty(); }
        });

        $("#logoutbtn").click(function () {
            alert("logout?")
            firebase.auth().signOut().then(function () {
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu));

            }).catch(function (error) {
                console.log(error.message);
            });
        });
        $("#SignInbtn").click(function () {
            firebase.auth().signOut().then(function () {
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('login.html')
                    .then(menu.close.bind(menu));

            }).catch(function (error) {
                console.log(error.message);
            });
        });

        $("#homebtn").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
    }

    if (page.id === 'login') {

        // var login = function() {
        //     var username = document.getElementById('username').value;
        //     var password = document.getElementById('password').value;

        //     if (username === 'bob' && password === 'secret') {
        //       ons.notification.alert('Congratulations!');
        //     } else {
        //       ons.notification.alert('Incorrect username or password.');
        //     }
        //   };
        $("#btnRegist").click(function () {


            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('regist.html')
                .then(menu.close.bind(menu));

        });
        $("#btnGoogle").click(function () {

            firebase.auth().signInWithPopup(provider).then(function (result) {
                //Do something when login complete

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu))
                    .catch(function (error) {
                        // Handle Errors here.
                        console.log(error.message);

                    });
            });

        });

        $("#btnLogin").click(function () {

            var username = $("#user").val();
            var password = $("#pass").val();
            console.log(username + password);
            firebase.auth().signInWithEmailAndPassword(username, password).then(function (result) {
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu))
            }).catch(function (error) {
                // Handle Errors here.
                console.log(error.message);

            });

        });

    }
    if (page.id === 'regist') {

        $("#btnRegist1").click(function () {
            var email = $("#Registemail").val();
            var password = $("#Registpass").val();
            if (email && password != null) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu))
                    .catch(function (error) {
                        // Handle Errors here.
                        console.log(error.message);

                    });
            } else { alert("Chack your regist"); }
        });

        $("#back").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));

        });

    }
    if (page.id === 'fastfood') {

        $("#back").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });

        $("#Backhome").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });
        $("#btnKfc").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('MenuKfc.html')
                .then(menu.close.bind(menu));

        });

    }
    if (page.id === 'Kfc') {

        $("#back").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('fastfood.html')
                .then(menu.close.bind(menu));

        });
        $("#Backhome").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });
        $("#btnOrder").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('orderCf.html')
                .then(menu.close.bind(menu));

        });

    }
    if (page.id === 'orderCf') {

        $("#back").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('MenuKfc.html')
                .then(menu.close.bind(menu));

        });

        $("#Backhome").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });

    }




});