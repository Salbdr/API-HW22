document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerform');
    const loginForm = document.getElementById('loginform');
    if (registerForm) {
        registerForm.addEventListener('submit', register );
    }
    if (loginForm) {
        loginForm.addEventListener('submit', login );
    }
});


var api = 'https://665736e39f970b3b36c86772.mockapi.io/API';


async function register(e){
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;

    if(email.value ==='' || password===''){
        console.log("enter data")
    }
    else{

    var res = await fetch(api, {
        method: 'POST',
        headers :{
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email, 
            password , 
            name})

    })
    if (res.ok){
        var data = await res.json();
        console.log('done', data)
        window.location.href = "index.html"
    }else{
        console.log('not ok');
    }
}


}
async function login(e){
    e.preventDefault();
    var email = document.getElementById('typeEmailX').value;
    var password = document.getElementById('typePasswordX').value;
   

    if(email.value ==='' || password===''){
        console.log("enter data")
    }
    else{

    var res = await fetch(api, {
        method: 'POST',
        headers :{
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email, 
            password , 
            })

    })
    if (res.ok){
        var data = await res.json();
        window.location.href = "homePage.html"
        document.getElementById('welcome').innerHTML = `welcom ${data.email}`
        console.log('done', data.email)
    }else{
        console.log( res.status);
    }
}
}


