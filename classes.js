class Person {
  constructor(name, dob) {
    this.name = name
    this.dob = dob
  }

  getName() {
    return this.name
  }
}

class Student extends Person {
  constructor(studentId, name, dob) {
    super(name, dob)
    this.studentId = studentId
  }

  getId() {
    return this.studentId
  }
}

let s = new Student(1, "Albert Einstein", "1879-03-14")
console.log(s.getId(), s.getName())