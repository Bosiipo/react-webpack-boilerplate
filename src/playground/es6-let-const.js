var nameVar = 'Sipo';
nameVar = 'Bosipo';
console.log('nameVar', nameVar);

let nameLet = 'Sing';
nameLet = 'Sean';
console.log('nameLet', nameLet);

function getPetName() {
    var petName = 'Hal';
    return petName;
};

// Block Scoping

var fullName = 'Andrew1Mead';

if (fullName) {
    var firstName = fullName.split('1');
    console.log(firstName);
}

