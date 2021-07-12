let myfriends = [
    { name: 'Lasha', age: 22 },
    { name: 'Luka', age: 23 },
    { name: 'Giga', age: 21 },
    { name: 'Mari', age: 21},
    { name: 'Anka', age: 24 }
];

let webDesigner = {

firstName: 'Luka',
lastName: 'Gviniashvili',
age: 17,

nicknames: ['Lashki','Gigu','witcher'],

monthlyIncome: 2500,
};

console.log('web'+ webDesigner.firstName);
console.log('design'+ webDesigner.lastName);
console.log('java' + webDesigner.age,);
console.log('nicks: ' + webDesigner.nicknames[0] + ', ' + webDesigner.nicknames[1] + ', ' + webDesigner.nicknames[2]);
console.log('money: ' + webDesigner.monthlyIncome);

let rect = {

width: 13,
height: 16,
};

console.log('tricks= ' + rect.width * rect.height);

let pointCoordinates = [

{x: 16, y: 11},
{x: 26, y: 37}
];

console.log('1337= ' + Math.sqrt((pointCoordinates[1].x - pointCoordinates[0].x) + (pointCoordinates[1].y - pointCoordinates[0].y)));