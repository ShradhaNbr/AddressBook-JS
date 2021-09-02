  
class AddressBook {
   
    get name() { return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[\\sa-zA-Z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Invalid Name';    
    }

    get address() { return this._address;}
    set address(address) {
        let words = address.split(' ');
        console.log(words);
        for ( let i =0 ; i<words.length ; i++){
            console.log(words[i]);
            let addressRegex = RegExp('^[A-Za-z0-9]{3,}$');
            if(!addressRegex.test(words[i]))
                throw 'Invalid Address';   
        }
        this._address = address;
    }

    get city() { return this._city;}
    set city(city) {
        this._city = city;    
    }

    get state() { return this._state;}
    set state(state) {
        this._state = state;
    }

    get zipCode() { return this._zipCode;}
    set zipCode(zipCode) {
        this._zipCode = zipCode; 
    }

    get number() { return this._number;}
    set number(number) {
        let phoneNumberRegex = RegExp('^[\\+]?(91)?[6-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(number))
            this._number = number;
        else throw 'Invalid Phone Number'; 
    }
    toString(){
        return "[ First Name: "+this.firstName+", Last Name: "+this.lastName+", Address: "+this.address+
                ", City: "+this.city+", State: "+this.state+", Zip Code: "+this.zipCode+", Phone Number: "+
                this.phoneNumber+", Email: "+this.email+" ]";

    }
}