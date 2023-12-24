// "use strict";

// class Person {
//   firstName;
//   lastName;
//   gender;
//   birthYear;

//   constructor(firstName, lastName, gender, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
//     this.birthYear = birthYear;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getGender() {
//     return this.gender;
//   }

//   getAge() {
//     return new Date(). getFullYear() - this.birthYear;
//   }
// }

// class Student extends Person{
//   level "A"
//   rollNumber = "100";

//   constructor(firstName, lastName, gender, birthYear, level, rollNumber, ){
//     super(firstName, lastName, gender, birthYear);
//     this.level = level;
//     this.rollNumber = rollNumber;
//   }

//   getIntro(){
//     return `hello, I am ${this.firstName} ${this.lastName}. I read in ${this.level} and my roll number is ${this.rollNumber}.`;
//   }

//   static getLevel() {
//     const now = new Date().getFullYear();
//     return now;
//   }
// }

// const person1 = new Person("Mohammad", "Sagor", "Male", "1993");
// const student1 = new Student("Adiba", "Islam", "Female", "1998", "Honors", "141218");

// // console.log(person1.getFullName());
// // console.log(person1.getGender());
// // console.log(person1.getAge());

// // console.log(student1.getIntro());
// // console.log(student1.getLevel());

const inputName = document.querySelector(".input__name");
const inputDonate = document.querySelector(".input__donate");
const btnDonate = document.querySelector(".btn__donate");
const donorsContainer = document.querySelector(".donors__container");

class BloodDonationCamp {
  name;
  donation;
  li;

  constructor() {
    btnDonate.addEventListener("click", this.getDonation.bind(this));
  }

  getDonation() {
    this.name = inputName.value;
    this.donation = inputDonate.value;

    if (!this.name || !this.donation) {
      return alert(`Please input valid name and donation.`);
    }

    this.createListItem(this.name, this.donation);
    // console.log(this.name, this.donation);
  }
  createListItem(name, donation) {
    this.li = document.createElement("li");
    this.li.textContent = `${name} - ${donation}`;

    this.appendItem(this.li);

    // console.log(this.li);
  }
  appendItem(item) {
    donorsContainer.append(item);
    inputName.value = "";
    inputDonate.value = "";
  }
}

// const myBootcamp = new BloodDonationBootcamp();
new BloodDonationCamp();
