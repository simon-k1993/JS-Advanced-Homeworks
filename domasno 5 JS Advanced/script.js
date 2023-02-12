console.log("connected");

function Academy(name, start, end) {
  this.name = name;
  this.students = [];
  this.subjects = [];
  this.start = start;
  this.end = end;
  this.numberOfClasses = 10;
  this.printStudents = function () {
    this.students.map((s) => console.log(s.name));
  };
  this.printSubjects = function () {
    this.subjects.map((s) => console.log(s.name));
  };
}
let academy = new Academy("SEDC", 2023, 2024);
console.log("Academy", academy);

function Subject(title, isElective, academy) {
  this.title = title;
  this.isElective = isElective;
  this.students = [];
  this.academy = academy;
  this.numberOfClasses = 10;

  this.overrideClasses = function (number) {
    if (number > 3) {
      this.numberOfClasses = number;
      console.log(`${this.numberOfClasses}`);
    } else {
      console.log(`${this.numberOfClasses}`);
    }
  };
}

let subject = new Subject("Mak", true, academy);
console.log("Subject", subject);
subject.overrideClasses(5);

function Student(firstName, lastName, age, academy, currentSubject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = academy;
  this.currentSubject = currentSubject;

  this.StartAcademy = function (academy) {
    this.academy = academy;
    academy.students.push(this);
  };
  this.StartSubject = function (subject) {
    if (!this.academy) {
      console.log("ERROR");
      return;
    }
    if (this.currentSubject) {
      this.completedSubjects.push(this.currentSubject);
    }
    this.currentSubject = subject;
  };
  subject.students.push(this);
}

let student1 = new Student("Brko", "Brkovski", 20);
student1.StartSubject(subject);
console.log("Student", student1);
student1.StartAcademy(academy);
console.log("Student", student1);
student1.StartSubject(subject);
console.log("Student", student1);
