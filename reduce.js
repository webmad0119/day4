// console.log(students)

var allProjectsMarks = students.reduce(function (ac, student) {
    return {
        finalMark: ac.finalMark + student.firstProject
    }
}, {
    finalMark: 0
})

console.log(allProjectsMarks.finalMark * Math.random())