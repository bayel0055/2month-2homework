// const birthYear = prompt("Введите год вашего рождения:");

// if (birthYear === null || birthYear === "") {
//     alert("Ввод отменен или оставлен пустым. Вы не ввели год рождения.");
// } else {
//     const yearOfBirth = parseInt(birthYear);

//     const currentYear = new Date().getFullYear();

//     const age = currentYear - yearOfBirth;

//     if (age < 0) {
//         alert("Вы еще не родились!");
//     } else if (age <= 30) {
//         alert("Вы младше 30 лет. Вы молодой человек!");
//     } else if (age < 60) {
//         alert("Вы старше 30 лет, но младше 60 лет. Кризис среднего возраста!");
//     } else {
//         alert("Вы старше 60 лет. Вам советуется посетить доктора.");
//     }
// }


// const userInput = prompt("Введите значение:");

// if (!isNaN(userInput) && userInput !== null && userInput !== "") {
//     alert("Вы ввели число: " + userInput);
// } else {
//     alert("Введено некорректное значение");
// }