const fullName = 'Jordan Mike';
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}


// const getFirstName = (fullName) => {
//     return fullName.split(" ")[0];
// };

const getFirstName = (fullName) => fullName.split(" ")[0];

