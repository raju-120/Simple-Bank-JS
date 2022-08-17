
//Step-01: Add the event handler on Submit Button

document.getElementById('btn-submit').addEventListener('click', function(){
    //step-02: Get the element from the input field
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;

    /* step-03: Get the password from the password field */
    
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    
    //Danger : DO NOT check the user name & passweord on client side.
    /* Here we just want to check on a random way for the test case */

    if( email === 'raju@gmail.com' && password === 'amijni123'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User-Name or Password');
    }

    emailFeild.value = '';
    userPassword.value = '';

})