var studentsWithLowMarks = []

studentsWithLowMarks = students.filter(function (student) {
    return student.finalExam > 85 
}).map(function (student){
    return student.name.split(" ")[1]
})

console.log(studentsWithLowMarks)