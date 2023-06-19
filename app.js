class Student {
    constructor(firstName, lastName, yearBirthday, marks, arrVisits) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBirthday = yearBirthday;
        this.marks = marks;

        this.allAverageMarks = this.averageMarks();
        this.age = this.fullAgeStudent(yearBirthday);
        this.averageRating = 90;
        this.averageNumberVisits = 0.9;

        this.visits = [];
        this.visits.length = 25;
        this.visitsIndex = 0;

        this.results = {
            bad: "Редиска!",
            normal: "Добре,але можнa краще",
            good: "Молодець!"
        };
    }
    absent() {
        this.visits[this.visitsIndex] = false;
        if (this.visits.length > this.visitsIndex) { this.visitsIndex++ }
    }
    present() {
        this.visits[this.visitsIndex] = true;
        if (this.visits.length > this.visitsIndex) { this.visitsIndex++ }
    }


    get avarageVisits() {

        let visitsCount = this.visits.filter(x => x);
        let visitsCountIndex = visitsCount.length;
        // let index=this.visitsIndex;
        return visitsCountIndex / this.visitsIndex;
    }

    fullAgeStudent(yearBirthday) {
        let yearToday = new Date();
        let age = yearToday.getFullYear() - this.yearBirthday;
        return age;
    }
    averageMarks() {
        let sum = 0;
        console.log(this.marks.length);
        for (let i = 0; i < this.marks.length; i++) {
            sum = sum + this.marks[i];
        }
        let allAverageMarks = sum / this.marks.length;
        console.log(allAverageMarks);
        return allAverageMarks;
    }
    summary() {
        console.log(this.allAverageMarks);
        console.log(this.averageRating);
        console.log(this.avarageVisits);
        console.log(this.averageNumberVisits);

        if (this.allAverageMarks < this.averageRating && this.averageVisits < this.averageNumberVisits)
            (console.log(this.results.bad))
        else
            if (this.allAverageMarks > this.averageRating && this.averageVisits > this.averageNumberVisits) { console.log(this.results.good); }
            else
                 { console.log(this.results.normal); }
    }
}

let student = new Student("Anna", "Popova", "2003", [90, 99, 89, 99, 95]);
console.log(student);
student.present();
student.present();
student.absent();
student.present();
student.present();
student.present();
student.present();
student.present();
 student.present();
 student.present();
student.present();
student.present()
student.present()
student.summary();
let studentOne = new Student("Mark", "Ivanov", "2001", [80, 76, 89, 66, 95, 70]);
console.log(studentOne);
studentOne.present();
studentOne.present();
studentOne.absent();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.summary();
let studentTwo = new Student("Helen", "Brig", "1999", [80, 76, 89, 66, 90, 70]);
console.log(studentTwo);
studentTwo.absent();
studentTwo.absent();
studentTwo.absent();
studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.absent();
studentTwo.summary();
let studentThird=new Student("George","Bely","2000",[70,60,70,80,70]);
console.log(studentThird);
studentThird.absent();
studentThird.absent();
studentThird.absent();
studentThird.absent();
studentThird.absent();
studentThird.present();
studentThird.summary();
