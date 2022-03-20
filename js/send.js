const myForm = document.querySelector('#myForm');
       const send = document.querySelector('#send');
 
       send.addEventListener('click', event => {
           event.preventDefault();
 
           if (validateForm(myForm)) {
            const data = {
                name: myForm.elements.name.value,
                phone: myForm.elements.phone.value,
                email: myForm.elements.email.value
            }
     
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'http://localhost:8080/data');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () => {
                if (xhr.response.status) {
                    console.log('Всё ок!');
                }
            });
           }
       });
 
       function validateForm(form) {
           let valid = true;
 
           if (!validateField(form.elements.name)) {
               valid = false;
           }
 
           if (!validateField(form.elements.phone)) {
               valid = false;
           }
 
           if (!validateField(form.elements.email)) {
               valid = false;
           }
 
           return valid;
       }
 
       function validateField(field) {
           if (!field.checkValidity()) {
               field.nextElementSibling.textContent = field.validationMessage;
 
               return false;
           } else {
               field.nextElementSibling.textContent = '';
 
               return true;
           }
       }