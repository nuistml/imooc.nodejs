var student = require('./student')
var teacher = require('./teacher')

var sss = []

function add(className,teacherName, students){
	var eachclass = []
	var studentArr = []
	teacher.add(teacherName)
	students.forEach(function(item, index){
		student.add(item)
		studentArr.push(item)
	})

	eachclass.push(className)
	eachclass.push(teacherName)
	eachclass.push(studentArr)
	sss.push(eachclass)
	console.log(sss)
}

exports.add = add