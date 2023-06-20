class Student {
    constructor(firstName, lastName, yearBirthday, marks, arrVisits) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBirthday = yearBirthday;
        this.marks = marks;

        this.allAverageMarks = marks.reduce((acc, number) => acc + number, 0) / marks.length;
        this.age = this.fullAgeStudent(yearBirthday);
        this.averageRating = 90;
        this.numberVisits = 0.9;

        this.visits = [];
        this.visits.length = 25;
        this.visitsIndex = 0;

        this.result = {
            bad: "Редиска!",
            normal: "Добре,але можна краще",
            good: "молодець!"
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


    get allAvarageVisits() {

        let visitsCount = this.visits.filter(x => x);
        console.log(visitsCount);
        let index = this.visitsIndex;
        console.log(index);
        let visitsCountIndex = visitsCount.length;
        console.log(visitsCountIndex);

        console.log(visitsCountIndex / index);
        return visitsCountIndex / index;
        (console.log(allAverageVisits));


    }

    fullAgeStudent(yearBirthday) {
        let yearToday = new Date();
        let age = yearToday.getFullYear() - this.yearBirthday;
        return age;
    }

    summary() {
        console.log(this.allAverageMarks, this.averageRating);

        console.log(this.allAvarageVisits, this.numberVisits);


        switch (true) {
            case ((this.allAverageMarks < this.averageRating) && (this.allAvarageVisits < this.numberVisits)):

                console.log(this.result.bad);
                break;

            case ((this.allAverageMarks > this.averageRating) || (this.allAverageVisits > this.numberVisits)):

                console.log(this.result.good);
                break;
            default:

                console.log(this.result.normal)
        }
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
student.present();
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
let studentThird = new Student("George", "Bely", "2000", [70, 60, 70, 80, 70]);
console.log(studentThird);
studentThird.absent();
studentThird.absent();
studentThird.absent();
studentThird.absent();
studentThird.absent();
studentThird.present();
studentThird.summary();
let studentFifs = new Student("irma", "Lisova", "1997", [90, 96, 99, 99, 99, 99]);
studentFifs.present();
studentFifs.present();
studentFifs.present();
studentFifs.present();
studentFifs.present();
studentFifs.present();
studentFifs.present();
studentFifs.summary();
