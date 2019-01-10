var studentNames = []

//ines function computes a new mapped object with different properties based on a splitted name and its length
function ines(student){
    var splittedName = student.name.split(" ")

    return {
        name: splittedName[0],
        surname: splittedName[1],
        nameLength: splittedName[0].length
    }
}

studentNames = students.map(ines)


// mapped array made with a anonymous function
studentNames = students.map(function (student){
    var splittedName = student.name.split(" ")

    return {
        name: splittedName[0],
        surname: splittedName[1],
        nameLength: splittedName[0].length
    }
})

console.log(studentNames)