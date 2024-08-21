let form = document.getElementById('gform');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let name= document.getElementById('name-field').value;
    
    let email = document.getElementById('email-field').value;
    let subject = document.getElementById('subject-field').value;
    let message = document.getElementById('message-field').value;
    let pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (name==="" || email==="" || subject==="" || message===""){
        displayError(form,'Please enter all values.');
        
    }
    else if(!(pattern.test(email))){
        displayError(form,'Please enter a valid email.');
        
    }
    else{
        const formData = {
            name : name,
            email : email,
            subject : subject,
            message : message
        }
        emailjs.init({
            publicKey: "0SrvJcQqg5MO8J20G",
        });
        emailjs.send("service_w1spzbr", "template_c7852oy", formData).then((res)=>alert("submitted successfully"));
    }
    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }
})

