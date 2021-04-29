//STEP 1
// let daysOfMonth = () => {
//     let d = new Date(2021, 3 + 1, 0);
//     console.log(d.getDate());
// }
// daysOfMonth();
//STEP 2
// let months = [
//     'January', 'February', 'March', 
//     'April', 'May', 'June',
//     'July', 'August', 'September', 
//     'October', 'November', 'December'
// ];
// let d = new Date(2021, 3, 28);
// console.log(months[d.getMonth()]);
//STEP 3
// let daysOfWeek = [
//     'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
// ];
// let d = new Date();
// let dateEntered = new Date(prompt('Please enter a date in this format year, month, day (ex: XXXX, XX, XX)'));
// if (dateEntered.getDay() === 0 || dateEntered.getDay() === 6) {
//     console.log(`The date entered is on a ${daysOfWeek[dateEntered.getDay()]}`);
// } else {
//     console.log(`The date entered is on a ${daysOfWeek[dateEntered.getDay()]}`);
// };
// console.log(dateEntered.getDay());
//STEP 4
// let daysOfWeek = [
//     'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
// ];
// let d = new Date();
// let yesterday = d.getDay() -1;
// console.log(`Yesterday was ${daysOfWeek[yesterday]}`);
//STEP 5
// let daysOfWeek = [
//     'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
// ];
// let d = new Date();
// let today = d.getDay();
// console.log(`Today is ${daysOfWeek[today].charAt(0)}`);