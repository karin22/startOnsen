
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
            $("#menu")[0].open();
        });
        $("#btnKebabs").click(function () {
            localStorage.setItem("selected", "kebab");
            $("#content")[0].load("fastfood.html");

        });
        $("#btnPizza").click(function () {
            localStorage.setItem("selected", "pizza");
            $("#content")[0].load("fastfood.html");

        });
        $("#btnFastfood").click(function () {
            localStorage.setItem("selected", "fastfood");
            $("#content")[0].load("fastfood.html");

        });
        $("#btnThai").click(function () {
            localStorage.setItem("selected", "thai");
            $("#content")[0].load("fastfood.html");

        });
        $("#Backhome").click(function () {

            $("#content")[0].load("tabbar.html");

        });

        db.collection("recommended").orderBy("id", "asc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var item =
                    `<ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
            <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}');background-size: 100%;">
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
                $("#content")[0].load("tabbar.html");
                $("#menu")[0].close();

            }).catch(function (error) {
                console.log(error.message);
            });
        });
        $("#SignInbtn").click(function () {
            firebase.auth().signOut().then(function () {
                $("#content")[0].load("login.html");
                $("#menu")[0].close();
            }).catch(function (error) {
                console.log(error.message);
            });
        });

        $("#homebtn").click(function () {

            $("#content")[0].load("tabbar.html");
            $("#menu")[0].close();
        });
    }

    if (page.id === 'login') {


        $("#btnRegist").click(function () {

            $("#content")[0].load("regist.html");

        });
        $("#btnGoogle").click(function () {

            firebase.auth().signInWithPopup(provider).then(function (result) {

                //Do something when login complete
                $("#content")[0].load("tabbar.html")
                    .catch(function (error) {

                        console.log(error.message);

                    });
            });

        });

        $("#btnLogin").click(function () {

            var username = $("#user").val();
            var password = $("#pass").val();
            console.log(username + password);
            firebase.auth().signInWithEmailAndPassword(username, password).then(function (result) {
                $("#content")[0].load("tabbar.html")
            }).catch(function (error) {

                console.log(error.message);

            });

        });
        $("#backhomebtn").click(function () {

            $("#content")[0].load("tabbar.html");

        });

    }
    if (page.id === 'regist') {

        $("#btnRegist1").click(function () {
            var email = $("#Registemail").val();
            var password = $("#Registpass").val();
            if (email && password != null) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                $("#content")[0].load("tabbar.html")
                    .catch(function (error) {
                        // Handle Errors here.
                        console.log(error.message);

                    });
            } else { alert("Chack your regist"); }
        });

        $("#back").click(function () {

            $("#content")[0].load("login.html")

        });

    }
    if (page.id === 'fastfood') {
        var category = localStorage.getItem("selected");
        $("#head").append(category);
        db.collection("fastfood").where("type", "==", category).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item =
                    `<ons-card style="margin-top: 40px;"><div class="detail">
                 <div class="col-6">
                       <img src="${doc.data().photoURL}" style="width:80%;"> 
                      <p>${doc.data().name}</p>
               </div>
                  <div class="col-6" style="margin-top: 50px;">
                      <ons-button class="btn" id="${doc.data().id}">Menu</ons-button>
                  </div>
                 </div>   </ons-card> `;



                $("#listFastfood").append(item);


            });
            $("#001").click(function () {
                localStorage.setItem("selectedType", "kfc");
                $("#content")[0].load("MenuKfc.html");


            });
            $("#005").click(function () {
                localStorage.setItem("selectedType", "sizzler");
                $("#content")[0].load("MenuKfc.html");


            });

            $("#003").click(function () {
                localStorage.setItem("selectedType", "Mc");
                $("#content")[0].load("MenuKfc.html");


            });

        });

        $("#back").click(function () {

            $("#content")[0].load("tabbar.html");

        });

        $("#Backhome").click(function () {

            $("#content")[0].load("tabbar.html");

        });



    }
    if (page.id === 'Kfc') {

        var category = localStorage.getItem("selectedType");
        if (category == "kfc") {
            var image = '<img src="image/Kfc_logo-9.jpg" style="width:80%">';
            $("#image").append(image);
            localStorage.setItem("logo", category); //////set เอารูปไปโชว์ในหน้าบิล
        }
        if (category == "sizzler") {
            var image = '<img src="image/Sizzler-logo.jpg" style="width:50%">';
            $("#image").append(image);
            localStorage.setItem("logo", category);
        } if (category == "Mc") {
            var image = '<img src="image/Mclogo.png" style="width:50%">';
            $("#image").append(image);
            localStorage.setItem("logo", category);
        }
        ////////// set ไว้เพื่อใช้ในฟังก์ชัน + -
        var total = 0;
        var total1 = 0;
        var total2 = 0;
        var total3 = 0;



        db.collection("KFC").where("type", "==", category).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item =
                    `  <div class="Food">
                  <div class="col-6">
                 <img
                   src="${doc.data().photoURL}"
                   style="width:60%">
               </div>
               <div class="col-6">
                 <p>${doc.data().detail}</p>
                 <p>THB ${doc.data().price}  
                 <ons-icon icon="md-plus-circle" class="iconFood" id="plus${doc.data().id}"></ons-icon>
                 <ons-button class="btnFood" id="count${doc.data().id}">0</ons-button>
                 <ons-icon icon="md-minus-circle" class="iconFood" id="minus${doc.data().id}"></ons-icon></p>
               </div>
               </div>`;

                $("#food").append(item);
            });

            ////////////// ฟังก์ชันที่ให้สำหรับปุ่ม + - และโชว์ค่า ส่งค่าต่างๆ 
            firebase.auth().onAuthStateChanged(function (user) {

                if (user) {
                    var num = 0;
                    /////////set ค่าไว้เมื่อไม่มีการกดปุ่ม + หรือ -
                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "001").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail1", null);
                                localStorage.setItem("price1", null);
                                localStorage.setItem("count1", null);
                            });
                        });
                    }

                    $("#plus001").click(function () {
                        $("#total").empty();
                        $("#count001").empty();
                        num = num + 1;
                        $("#count001").append(num);
                        total1 = num * 149;
                        total = total1 + total2 + total3;
                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "001").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail1", `${doc.data().detail}`);
                                localStorage.setItem("price1", `${doc.data().price}`);
                                localStorage.setItem("count1", num);
                            });
                        });
                    });
                    $("#minus001").click(function () {
                        if (num != 0) {
                            $("#total").empty();
                            $("#count001").empty();
                            num = num - 1;
                            total1 = num * 149;
                            total = total1 + total2 + total3;   ///// เพื่อให้ค่า total เท่ากับราคาของที่มีการเลือกไว้ทั้งหมดในหน้านั้น
                            $("#total").append(total);              //// เอาค่าtotal มาโชว์ในแถบด้านล่าง
                            localStorage.setItem("setTotal", total); ///// set ค่า total ไว้เพื่อเอาไปเรียกใช้ในหน้าบิล
                            $("#count001").append(num);

                        } if (num == 0) {
                            db.collection("KFC").where("id", "==", "001").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail1", null);
                                    localStorage.setItem("price1", null);
                                    localStorage.setItem("count1", null);
                                });
                            });
                        }
                    });



                } else {
                    $("#plus001").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {

                    var num = 0;
                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "002").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail2", null);
                                localStorage.setItem("price2", null);
                                localStorage.setItem("count2", null);
                            });
                        });
                    }
                    $("#plus002").click(function () {
                        $("#count002").empty();
                        $("#total").empty();
                        num = num + 1;

                        $("#count002").append(num);
                        total2 = num * 99;
                        total = total1 + total2 + total3;
                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "002").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail2", `${doc.data().detail}`);
                                localStorage.setItem("price2", `${doc.data().price}`);
                                localStorage.setItem("count2", num);
                            });
                        });
                    });
                    $("#minus002").click(function () {
                        if (num != 0) {
                            $("#total").empty();
                            $("#count002").empty();
                            num = num - 1;
                            total2 = num * 99;
                            total = total1 + total2 + total3;
                            $("#count002").append(num);
                            $("#total").append(total);
                            localStorage.setItem("setTotal", total);
                        }
                        if (num == 0) {
                            db.collection("KFC").where("id", "==", "002").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail2", null);
                                    localStorage.setItem("price2", null);
                                    localStorage.setItem("count2", null);
                                });
                            });
                        }
                    });



                } else {
                    $("#plus002").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var num = 0;
                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "003").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail3", null);
                                localStorage.setItem("price3", null);
                                localStorage.setItem("count3", null);
                            });
                        });
                    }
                    $("#plus003").click(function () {
                        $("#count003").empty();
                        $("#total").empty();
                        num = num + 1;

                        $("#count003").append(num);
                        total3 = num * 299;
                        total = total1 + total2 + total3;

                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "003").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail3", `${doc.data().detail}`);
                                localStorage.setItem("price3", `${doc.data().price}`);
                                localStorage.setItem("count3", num);
                            });
                        });

                    });

                    $("#minus003").click(function () {
                        if (num != 0) {

                            $("#count003").empty();
                            $("#total").empty();
                            num = num - 1;
                            total3 = num * 299;
                            total = total1 + total2 + total3;
                            $("#count003").append(num);
                            $("#total").append(total);
                            localStorage.setItem("setTotal", total);

                        } if (num == 0) {
                            db.collection("KFC").where("id", "==", "003").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail3", null);
                                    localStorage.setItem("price3", null);
                                    localStorage.setItem("count3", null);
                                });
                            });
                        }
                    });



                } else {
                    $("#plus005").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var num = 0;
                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "004").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail1", null);
                                localStorage.setItem("price1", null);
                                localStorage.setItem("count1", null);
                            });
                        });
                    }
                    $("#plus004").click(function () {
                        $("#count004").empty();
                        $("#total").empty();
                        num = num + 1;

                        $("#count004").append(num);
                        total1 = num * 385;
                        total = total1 + total2 + total3;
                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "004").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {

                                localStorage.setItem("detail1", `${doc.data().detail}`);
                                localStorage.setItem("price1", `${doc.data().price}`);
                                localStorage.setItem("count1", num);
                            });
                        });
                    });
                    $("#minus004").click(function () {
                        if (num != 0) {
                            $("#total").empty();
                            $("#count004").empty();
                            num = num - 1;
                            total1 = num * 385;
                            total = total1 + total2 + total3;
                            $("#total").append(total);
                            localStorage.setItem("setTotal", total);
                            $("#count004").append(num);

                        } if (num == 0) {
                            db.collection("KFC").where("id", "==", "004").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail1", null);
                                    localStorage.setItem("price1", null);
                                    localStorage.setItem("count1", null);
                                });
                            });
                        }
                    });




                } else {
                    $("#plus004").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var num = 0;

                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "005").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail2", null);
                                localStorage.setItem("price2", null);
                                localStorage.setItem("count2", null);
                            });
                        });
                    }
                    $("#plus005").click(function () {
                        $("#count005").empty();
                        $("#total").empty();
                        num = num + 1;

                        $("#count005").append(num);
                        total2 = num * 285;
                        total = total1 + total2 + total3;

                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "005").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {

                                localStorage.setItem("detail2", `${doc.data().detail}`);
                                localStorage.setItem("price2", `${doc.data().price}`);
                                localStorage.setItem("count2", num);
                            });
                        });
                    });
                    $("#minus005").click(function () {
                        if (num != 0) {
                            $("#total").empty();
                            $("#count005").empty();
                            num = num - 1;
                            total2 = num * 285;
                            total = total1 + total2 + total3;
                            $("#total").append(total);
                            localStorage.setItem("setTotal", total);
                            $("#count005").append(num);

                        } if (num == 0) {
                            db.collection("KFC").where("id", "==", "005").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail2", null);
                                    localStorage.setItem("price2", null);
                                    localStorage.setItem("count2", null);
                                });
                            });
                        }
                    });




                } else {
                    $("#plus005").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var num = 0;
                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "006").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail3", null);
                                localStorage.setItem("price3", null);
                                localStorage.setItem("count3", null);
                            });
                        });
                    }
                    $("#plus006").click(function () {
                        $("#count006").empty();
                        $("#total").empty();
                        num = num + 1;

                        $("#count006").append(num);
                        total3 = num * 239;
                        total = total1 + total2 + total3;

                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "006").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {

                                localStorage.setItem("detail3", `${doc.data().detail}`);
                                localStorage.setItem("price3", `${doc.data().price}`);
                                localStorage.setItem("count3", num);
                            });
                        });
                    });
                    $("#minus006").click(function () {
                        if (num != 0) {
                            $("#total").empty();
                            $("#count006").empty();
                            num = num - 1;
                            total3 = num * 239;
                            total = total1 + total2 + total3;
                            $("#total").append(total);
                            localStorage.setItem("setTotal", total);
                            $("#count006").append(num);

                        } if (num == 0) {
                            db.collection("KFC").where("id", "==", "006").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail3", null);
                                    localStorage.setItem("price3", null);
                                    localStorage.setItem("count3", null);
                                });
                            });
                        }
                    });


                } else {
                    $("#plus006").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var num = 0;
                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "007").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail1", null);
                                localStorage.setItem("price1", null);
                                localStorage.setItem("count1", null);
                            });
                        });
                    }
                    $("#plus007").click(function () {
                        $("#count007").empty();
                        $("#total").empty();
                        num = num + 1;

                        $("#count007").append(num);
                        total1 = num * 195;
                        total = total1 + total2 + total3;
                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "007").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {

                                localStorage.setItem("detail1", `${doc.data().detail}`);
                                localStorage.setItem("price1", `${doc.data().price}`);
                                localStorage.setItem("count1", num);
                            });
                        });
                    });
                    $("#minus007").click(function () {
                        if (num != 0) {
                            $("#total").empty();
                            $("#count007").empty();
                            num = num - 1;
                            total1 = num * 195;
                            total = total1 + total2 + total3;
                            $("#total").append(total);
                            localStorage.setItem("setTotal", total);
                            $("#count007").append(num);

                        } if (num == 0) {
                            db.collection("KFC").where("id", "==", "007").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail1", null);
                                    localStorage.setItem("price1", null);
                                    localStorage.setItem("count1", null);
                                });
                            });
                        }
                    });


                } else {
                    $("#plus007").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var num = 0;
                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "008").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail2", null);
                                localStorage.setItem("price2", null);
                                localStorage.setItem("count2", null);
                            });
                        });
                    }
                    $("#plus008").click(function () {
                        $("#count008").empty();
                        $("#total").empty();
                        num = num + 1;

                        $("#count008").append(num);
                        total2 = num * 185;
                        total = total1 + total2 + total3;
                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "008").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {

                                localStorage.setItem("detail2", `${doc.data().detail}`);
                                localStorage.setItem("price2", `${doc.data().price}`);
                                localStorage.setItem("count2", num);
                            });
                        });
                    });
                    $("#minus008").click(function () {
                        if (num != 0) {
                            $("#total").empty();
                            $("#count008").empty();
                            num = num - 1;
                            total2 = num * 185;
                            total = total1 + total2 + total3;
                            $("#total").append(total);
                            localStorage.setItem("setTotal", total);
                            $("#count008").append(num);

                        } if (num == 0) {
                            db.collection("KFC").where("id", "==", "008").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail2", null);
                                    localStorage.setItem("price2", null);
                                    localStorage.setItem("count2", null);
                                });
                            });
                        }
                    });


                } else {
                    $("#plus008").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var num = 0;
                    if (num == 0) {
                        db.collection("KFC").where("id", "==", "009").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                localStorage.setItem("detail3", null);
                                localStorage.setItem("price3", null);
                                localStorage.setItem("count3", null);
                            });
                        });
                    }
                    $("#plus009").click(function () {
                        $("#count009").empty();
                        $("#total").empty();
                        num = num + 1;

                        $("#count009").append(num);
                        total3 = num * 189;
                        total = total1 + total2 + total3;
                        $("#total").append(total);
                        localStorage.setItem("setTotal", total);
                        db.collection("KFC").where("id", "==", "009").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {

                                localStorage.setItem("detail3", `${doc.data().detail}`);
                                localStorage.setItem("price3", `${doc.data().price}`);
                                localStorage.setItem("count3", num);
                            });
                        });
                    });
                    $("#minus009").click(function () {
                        if (num != 0) {
                            $("#total").empty();
                            $("#count009").empty();
                            num = num - 1;
                            total3 = num * 189;
                            total = total1 + total2 + total3;
                            $("#total").append(total);
                            $("#count009").append(num);
                            localStorage.setItem("setTotal", total);
                        } if (num == 0) {
                            db.collection("KFC").where("id", "==", "009").get().then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    localStorage.setItem("detail3", null);
                                    localStorage.setItem("price3", null);
                                    localStorage.setItem("count3", null);
                                });
                            });
                        }
                    });


                } else {
                    $("#plus009").click(function () {
                        alert("Please Login!!");
                        $("#content")[0].load("login.html");
                    });


                }
            });

        });


        $("#back").click(function () {

            $("#content")[0].load("fastfood.html");
            localStorage.clickcount = 0;

        });
        $("#Backhome").click(function () {

            $("#content")[0].load("tabbar.html");
            localStorage.clickcount = 0;

        });
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                $("#order").click(function () {
                    if (total == 0) {

                    } else
                        $("#content")[0].load("orderCf.html");
                });

            } else {
                $("#order").click(function () {
                    alert("Please Login!!");
                    $("#content")[0].load("login.html");
                });


            }
        });

    }
    if (page.id === 'orderCf') {
        var detail = [localStorage.getItem("detail1"), localStorage.getItem("detail2"), localStorage.getItem("detail3")];///ใน array บางค่าเป็น null
        var price = [localStorage.getItem("price1"), localStorage.getItem("price2"), localStorage.getItem("price3")];
        var count = [localStorage.getItem("count1"), localStorage.getItem("count2"), localStorage.getItem("count3")];
        console.log(localStorage.getItem("logo"));

        var category = localStorage.getItem("logo");
        if (category == "kfc") {
            var image = '<img src="image/Kfc_logo-9.jpg" style="width:30%">';
            $("#logo").append(image);

        }
        if (category == "sizzler") {
            var image = '<img src="image/Sizzler-logo.jpg" style="width:30%">';
            $("#logo").append(image);

        } if (category == "Mc") {
            var image = '<img src="image/Mclogo.png" style="width:30%">';
            $("#logo").append(image);

        }

        for (i = 0; i < detail.length; i++) { /////ตรวจหาค่า null เพื่อลบค่านั้นออก
            if (detail[0] == "null") {
                detail.shift();
                price.shift();
                count.shift();
                if (detail[0] == "null") {
                    detail.shift();
                    price.shift();
                    count.shift();
                }
                if (detail[1] == "null") {
                    detail.pop();
                    price.pop();
                    count.pop();
                }
            }
            if (detail[2] == "null") {
                detail.pop();
                if (detail[0] == "null") {
                    detail.shift();
                    price.shift();
                    count.shift();
                }
                if (detail[1] == "null") {
                    detail.pop();
                    price.pop();
                    count.pop();
                }
            }
            if (detail[1] == "null") {
                detail.splice(1, 1);
                price.splice(1, 1);
                count.splice(1, 1);
            }

        }

        for (x = 0; x < detail.length; x++) {////นั้นค่าที่เหลือมาโชว์
            var all = [];
            all.push(detail[x], count[x], price[x]);

            for (i = 0; i < all.length; i++) {
                if (x == 0) {
                    var showAll = "<td>" + all[i] + "</td>"
                    $("#td").append(showAll);
                }
                if (x == 1) {
                    var showAll = "<td>" + all[i] + "</td>"
                    $("#td1").append(showAll);
                }
                if (x == 2) {
                    var showAll = "<td>" + all[i] + "</td>"
                    $("#td2").append(showAll);
                }

            }

        }

        sum = '<p >Total &nbsp &nbsp &nbsp &nbsp' + localStorage.getItem("setTotal") + '  THB</p>';

        $("#total").empty();
        $("#total").append(sum);

        $("#back").click(function () {

            $("#content")[0].load("MenuKfc.html");

        });

        $("#Backhome").click(function () {

            $("#content")[0].load("tabbar.html");

        });

    }

});