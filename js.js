// js je ucitana na pocetku, pre doma


// const datum = new Date();
// datum.setDate(45);

// console.log(datum)

// //document.cookie = `rasha=podatak1; expires=` + datum.toUTCString();

// console.log(document.cookie)



// let kolacic = document.cookie;


// let niz = kolacic.split(";");

// console.log(niz);
// let podatak = niz[0].split("=")[1];

// console.log(podatak)



// const datum = new Date();
// datum.setMonth(datum.getMonth() + 6);
// let broj_poseta = parseInt(uzmiCookies("brojac"));
// broj_poseta++;
// document.cookie=`brojac=${broj_poseta}; expires=${datum.toUTCString()}`;

// function uzmiCookies(podatak) {

//     let kukis = document.cookie.split(";");
//     console.log(kukis);
//     for (let i = 0; i < kukis.length; i++) {
//         let leviDeo = kukis[i].split("=")[0];
//         if (leviDeo.trim() == podatak) {

//             return kukis[i].split("=")[1];
//         }



//     }

//     return 0;
// }
// let datum = new Date();

// datum.getTime() - 1;


// document.cookie = "brojac=10; expires=" + datum.toUTCString();





//local storage

// localStorage.setItem("mail","radovan.brajovic@gmail.com");

// sessionStorage.setItem("mail2","[{},{}]")


// let ls=localStorage.getItem("mail");

// localStorage.removeItem("mail")
// console.log(ls)





//primer log in sa cookies


if (window.location.href == "http://127.0.0.1:5500/index.html") {
    const register = document.getElementById("register");
    register.addEventListener("click", registrujSe)
}

function registrujSe() {
    let username = document.getElementById("user").value;
    let duzina = document.getElementById("duz").value;

    let text = "1234567890zxcvbnmasdfghjklpoiuytrewqZXCVBNMLKJHGFDSAQWERTYUIOP!?#$%";
    var brojac = 0;
    let pass = "";

    while (brojac < duzina) {

        let random = Math.round(Math.random() * text.length - 1);
        if (random < text.length - 1) {
            if (!pass.includes(text[random])) {
                pass += text[random];
                brojac++;
            }

        }
    }

    // let user = { username: username, password: pass }
    let vreme = new Date();
    vreme.setMinutes(vreme.getMinutes() + 45);

    document.cookie = "username=" + username + "; expires=" + vreme.toUTCString();

    // document.cookie = "user=" +JSON.parse(user)+"; expires="+vreme.toUTCString();
    document.cookie = "password=" + pass + "; expires=" + vreme.toUTCString();

    alert("Vasa loznika je " + pass);

}

if (window.location.href == "http://127.0.0.1:5500/login.html") {
    document.getElementById("login").addEventListener("click", proveri);
}

function proveri() {
    const userP = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;

    // let decodeCookie = decodeURIComponent(document.cookie);



    let niz = document.cookie.split("; ");



    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {

        if (niz[i].split("=")[0] == "username") {

            if (niz[i].split("=")[1] == userP) {
                brojac++;
            }
        }

        if (niz[i].split("=")[0] == "password") {

            if (niz[i].split("=")[1] == pass) {
                brojac++;
            }
        }
    }

    if (brojac == 2) {
        alert("Uspesan login");
    }
    else {
        alert("Neuspesan login")
    }



}