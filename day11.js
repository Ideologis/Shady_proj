const constants = [2.72, 3.14, 9.81, 37, 100]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTML', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTML', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTML', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTML', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTML', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTML', 'CSS', 'JS'],
        age: 20
    }
];
for (const item of users) {

    if (item.skills.length < 3) {
        console.log(item);
    }
}
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

let keys = [];

for (let { name, scores, skills, age } of users) {
    keys.push(name, scores, skills, age)
}
console.log(keys);

let { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter);

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [names, skills, [jsScore, reactScore]] = student;
console.log(names, skills, jsScore, reactScore);

const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

function convertArray() {

    const [student1, student2] = students
    const [name1, skills1, scores1] = student1
    const [name2, skills2, scores2] = student2

    const obj1 = [
        {
            'name': name1,
            'skills': skills1,
            'scores': scores1
        },
        {
            'name': name2,
            'skills': skills2,
            'scores': scores2
        }
    ]
    console.log(obj1);
}
convertArray(students);

const pupils = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
 console.log(pupils);
const newStudent  = {...pupils}

// add skill set

newStudent.skills.frontEnd.push({skill: 'Bootstrap', level : 8})