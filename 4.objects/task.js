function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}
// new Student('Tony');
// new Student('Buzz');
// let student1 = new Student('Tony');
// let student2 = new Student('Buzz');
// console.log(student1);
// console.log(student2);


Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
  };


// ваш код для остальных методов
Student.prototype.addMark = function(mark){
  if(this.marks === undefined){
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }

 Student.prototype.addMarks = function(...marks){
    if(this.marks === undefined){
      this.marks = [...marks];
    } else {
      this.marks.push(...marks);
    }
  }
}

Student.prototype.getAverage = function(average){
  let sum = average.reduce((acc, marks) => acc + marks, 0);
  let length = this.marks.length;
  return sum / length;
  }

Student.prototype.exclude = function(reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
  

