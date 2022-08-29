const users = [
    {
        firstName: 'Sergii',
        lastName: 'Khromchenko',
        email: 'sergii@gmail.com',
        age: 31
    },
    {
        firstName: 'Alex',
        lastName: 'Plishka',
        email: 'alex@yahoo.com',
        age: 42
    },

    {
        firstName: 'Sergii',
        lastName: 'Kewl',
        email: 'sergii@verizon.com',
        age: 17
    },
    {
        firstName: 'Mike',
        lastName: 'Smith',
        email: 'mike@gmail.com',
        age: 55
    },
    {
        firstName: 'John',
        lastName: 'Travolta',
        email: 'jtravolta@gmail.com',
        age: 18
    },
    {
        firstName: 'Bekka',
        lastName: 'GIlbert',
        email: '',
        age: 18
    }
];

// 1. Find the longest word in 'I love to rock and Codemify'
const str = 'I love to  rock and Codemify';
function findLongestWord(str) {
    const strArr = str
        .split(/\W+/)
        .filter(word => word.length);
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > 0) {
            longest = strArr[i];
        }
    }
    return (longest);
};
console.log('1. ', findLongestWord(str));

// 2. Find users with duplicated email in the users object and put them in array

const arr = users.map(user => (user.email))
const findDups = (arr) => {
    const dupl = [];
    const compare = [];

    for (let email of arr) {
        if(!compare.includes(email)){
            compare.push(email);
        }else{
            dupl.push(email);
        }
    }
    if(dupl.length < 1){
        dupl.push('no dupl emails found')
    }
    return dupl;
}
console.log('2. ', (findDups(arr)));

// 3. Find the youngest user in users object

const arr1 = users.map(el => el.age)
let min = Math.min(...arr1)
console.log('3.  Youngest user is ', min)

// 4. Find user with missing email

for (let i = 0; i < users.length; i++) {
    if ((users[i].email === '') || (users[i].email === undefined) || (users[i].email.length < 5)) {
        console.log('4. ', users[i].firstName, users[i].lastName, 'does not have an email address')
    }
}


//5. Return an object of users with gmail emails only
console.log('5. ')
for (var i = 0; i < users.length; i++) {
    if (users[i].email.includes('gmail')) {
        console.log("    User: ", users[i].firstName, users[i].lastName, 'has gmail')
    }
}