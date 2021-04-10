/* exported getStudentNames */

function getStudentNames(students) {
  var studentName = [];
  for (var i = 0; i <= (students.length - 1); ++i) {
    studentName.push(students[i].name);
  }
  return studentName;
}
