window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

//Template literal ES6 feature 
const createInnerHTML = () => {
    const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th>"+
                       "<th>ZipCode</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let addressbookList = createAddressBookJSON();

    for  ( const addressbookData of addressbookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${addressbookData._name}</td>
            <td>${addressbookData._address}</td>
            <td>${addressbookData._city}</td>
            <td>${addressbookData._state}</td>
            <td>${addressbookData._zipCode}</td>
            <td>${addressbookData._phoneNumber}</td>
            <td>
                <img name="${addressbookData._id}" onclick="remove(this)" alt="delete" src="../assets/delete-black-18dp.svg">
                <img name="${addressbookData._id}" alt="Edit" onclick="update(this)" src="../assets/create-black-18dp.svg">
            </td>        
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}
//create Employee Payroll JSON objects
const createAddressBookJSON = () => {
    let addressbookList = [
        {
            _name : 'Shradha Nambiar',
            _address : 'SE332',
            _city : 'Kannur',
            _state : 'Kerala',
            _zipCode : '670562',
            _phoneNumber : '+919567552777',
        },
        {
            _name : 'Pooja S.',
            _address : 'Aero553',
            _city : 'Bangalore',
            _state : 'Karnataka',
            _zipCode : '562100',
            _phoneNumber : '+918576335290',
        }

    ];
    return addressbookList;
} 