const input = document.getElementsByClassName('input-fields');

for (let i=0; i<input.length; i++) {
    input[i].addEventListener('focus', function() {
        this.style.backgroundColor = 'rgb(255, 255, 143)'
    });
    input[i].addEventListener('blur', function() {
        this.style.backgroundColor = 'white'
    })
};


function buttonClick() {
    const username = document.querySelectorAll('input')[0].value;
    const email = document.querySelectorAll('input')[1].value;
    const password = document.querySelectorAll('input')[2].value;
    const again = document.querySelectorAll('input')[3].value;
    const message = document.getElementById('empty-fields-message');
    const form = document.getElementById('form');

    const regUsernameLength = /^[a-zA-Z0-9_-]{3,20}$/;
    const regUsername = /^[a-zA-Z0-9_-]+$/;
    const regEmail = /^([a-zA-Z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/;
    const regPassword = /^[a-zA-Z0-9]{6,15}$/;

    
    if(username == "" || email == "" || password == "" || again == "" ||
        username == " " || email == " " || password == " " || again == " ") {
        message.style.display = "block";
        setTimeout(function buttonClick() {
            message.style.display = "none";
        }, 3000);
        return;
    };

    if(regUsernameLength.test(username) == false && 
        regEmail.test(email) == false && 
        regPassword.test(password) == false) {
        message.style.display = "block";
        message.style.width = "250px";
        message.backgroundColor = "red";
        message.style.textAlign = "center";
        message.innerHTML = "*Düzgün məlumatları daxil edin";
        setTimeout(function buttonClick() {
            message.style.display = "none";
        }, 3000);
        return;
    };

    if(regUsername.test(username) != true) {
        form.style.height = "320px";
        message.style.display = "block";
        message.style.width = "250px";
        message.backgroundColor = "red";
        message.style.textAlign = "center";
        message.innerHTML = "*İstifadəçi adında xüsusi simvol olmamalıdır (istisna \"-\" və \"_\")";
        setTimeout(function buttonClick() {
            message.style.display = "none";
            form.style.height = "300px";
        }, 3000);
        return;
    };

    if(regUsernameLength.test(username) != true) {
        form.style.height = "320px";
        message.style.display = "block";
        message.style.width = "250px";
        message.backgroundColor = "red";
        message.style.textAlign = "center";
        message.innerHTML = "*İstifadəçi adı 3 - 20 simvoldan ibarət olmalıdır";
        setTimeout(function buttonClick() {
            message.style.display = "none";
            form.style.height = "300px";
        }, 3000);
        return;
    };

    if(regEmail.test(email) != true) {
        message.style.display = "block";
        message.style.width = "250px";
        message.backgroundColor = "red";
        message.style.textAlign = "center";
        message.innerHTML = "*Düzgün elektron ünvan daxil edin";
        setTimeout(function buttonClick() {
            message.style.display = "none";
        }, 3000);
        return;
    };

    if(regPassword.test(password) != true) {
        form.style.height = "320px";
        message.style.display = "block";
        message.style.width = "270px";
        message.backgroundColor = "red";
        message.style.textAlign = "center";
        message.innerHTML = "*Şifrə yalnız 6 - 15 hərf və rəqəmdən ibarət ola bilər";
        setTimeout(function buttonClick() {
            message.style.display = "none";
            form.style.height = "300px";
        }, 3000);
        return;
    };

    if(password != again) {
        message.style.display = "block";
        message.style.width = "250px";
        message.style.backgroundColor = "yellow";
        message.style.textAlign = "center";
        message.innerHTML = "*Daxil edilən şifrələr eyni olmalıdır";
        setTimeout(function buttonClick() {
            message.style.display = "none";
        }, 3000);
        return;
    };
    
    if(true) {
        localStorage.setItem('Username', username);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
        window.location.replace("page(aze).html");
    }
}   


