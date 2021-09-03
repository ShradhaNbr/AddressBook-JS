  class AddressBook {
   
    /* Using getters and setters
     Regex method to validate the data*/
    get name() { return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[\\sa-zA-Z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Invalid Name';    
    }

    get address() { return this._address;}
    set address(address) {
            let addressRegex = RegExp('^[A-Za-z0-9//s]{3,}$');
            if(addressRegex.test(address))
            this._address = address;
            else  throw 'Invalid Address';   
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
        return "[ Name: "+this._name+", Address: "+this._address+
                ", City: "+this._city+", State: "+this._state+", Zip Code: "+this._zipCode+", Phone Number: "+
                this._number+" ]";

    }
}