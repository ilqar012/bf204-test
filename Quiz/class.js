class Human {
  constructor(name, surname, age = "0", gender, nationality) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.getFullName = function () {
      let fullName;
      fullName = name + " " + surname;
    };
  }
  age(x) {
    return x - this.year;
  }
}
let date = new Date();
let year = date.getFullYear();

class User extends Human {
  isLogged = false;
  constructor(
    name,
    surname,
    age = "0",
    gender,
    nationality,
    Username,
    Email,
    isAdmin,
    isLogged,
    password,
    bio
  ) {
    super(name, surname, (age = "0"), gender, nationality);
    this.Username = Username;
    this.Email = Email;
    this.isAdmin = isAdmin;
    this.isLogged = isLogged;
    this.password = password;
    this.bio = bio;
  }
  changePassword(currentPassword, newPassword) {
    this.password.length === 5;
    if (password === currentPassword) {
      password === newPassword;
    } else if (newPassword === currentPassword) {
      alert("new password and current password is the same");
    }
  }
  changeEmail(usersArr, newEmail){
    
  }

}

// let users = [
//     new User(
//       "John",
//       "Doe",
//       "Male",
//       "American",
//       "johndoe",
//       "john.doe@example.com",
//       false,
//       "password123",
//       "A bit about John.",
//       30
//     ),
//     new User(
//       "Jane",
//       "Doe",
//       "Female",
//       "British",
//       "janedoe",
//       "jane.doe@example.com",
//       true,
//       "securepassword",
//       "Jane's bio goes here.",
//       28
//     ),
//     new User(
//       "Alex",
//       "Smith",
//       "Non-binary",
//       "Canadian",
//       "alexsmith",
//       "alex.smith@example.com",
//       false,
//       "alexspassword",
//       "All about Alex.",
//       35
//     ),
//     new User(
//       "Emily",
//       "Clark",
//       "Female",
//       "Australian",
//       "emilyclark",
//       "emily.clark@example.com",
//       false,
//       "emilyspassword",
//       "Explorer and photographer.",
//       26
//     ),
//     new User(
//       "Michael",
//       "Brown",
//       "Male",
//       "German",
//       "michaelbrown",
//       "michael.brown@example.com",
//       true,
//       "michaelspass",
//       "Coffee enthusiast. Avid reader.",
//       32
//     ),
//     new User(
//       "Luis",
//       "Gomez",
//       "Male",
//       "Spanish",
//       "luisgomez",
//       "luis.gomez@example.com",
//       false,
//       "luispassword",
//       "Music lover, Guitar player.",
//       29
//     ),
//     new User(
//       "Sophia",
//       "Lopez",
//       "Female",
//       "Mexican",
//       "sophialopez",
//       "sophia.lopez@example.com",
//       true,
//       "sophiaspassword",
//       "Digital marketer and content creator.",
//       31
//     ),
//   ];
