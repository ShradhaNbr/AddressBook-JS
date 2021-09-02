//add event listener when document gets loaded
window.addEventListener('DOMContentLoaded',()=>{
    var addressbook = new AddressBook;
    //add listener to verify name entered by user
    const name = document.querySelector('#name');console.log(name.value)
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){        //add listener at name input
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{
            addressbook.name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });

    //add listener to verify address entered by user
    const addr = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    addr.addEventListener('input',function(){        //add listener at address input
        if(addr.value.length == 0){
            addressError.textContent="";
            return;
        }
        try{
            addressbook.address = addr.value;
            addressError.textContent = "";
        }catch(e){
            addressError.textContent = e;
        }
    });
    //add listener to verify phone number entered by user
    const number = document.querySelector('#number');
    const contactError = document.querySelector('.number-error');
    number.addEventListener('input',function(){        //add listener at phone no input
        if(number.value.length == 0){
            contactError.textContent="";
            return;
        }
        try{
            addressbook.number= number.value;
            contactError.textContent = "";
        }catch(e){
            contactError.textContent = e;
        }
    });
});