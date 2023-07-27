let studentsName = document.querySelector(".name");
let studentsSourName = document.querySelector(".sourname");

let btn = document.querySelector(".btn");

let studentsList = document.querySelector(".studentsList")

let studentsArray = []

btn.addEventListener("click", function (event) {
  let studentsNameValue = studentsName.value;
  let studentsSourNameValue = studentsSourName.value;

  let studentsObj = {
    studentsNameKey: studentsNameValue,
    studentsSourNameKey: studentsSourNameValue
  }

  studentsArray.push(studentsObj)

  console.log(studentsArray)

  let innerHtmlWithStudents = ''

  studentsArray.forEach((item) => {
    innerHtmlWithStudents += `<div class="studentsBox">
    <p> Имя ${item.studentsNameKey}</p>
    <p>Фамилия ${item.studentsSourNameKey}</p>
    </div>`

  })

  studentsList.innerHTML = innerHtmlWithStudents
});
