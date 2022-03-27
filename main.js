/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები

/*
  // კომენტარები გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/



// 2 ცვლადები

/*
  // მსურს ჩემი Spotify ლისტის განახლება 
  // ამაში კი თქვენი დახმარება მჭირდება
  // აღწერეთ თქვენი საყვარელი მომღერლის
  // (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
  // გაითვალისწინეთ რომ ამისთვის უნდა
  // გამოიყენოთ მხოლოდ (const, let)
  // (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/

// >>>> კოდი დაწერეთ აქ
const name = "First Name";
const lastName = "Last Name";
let hisAge = 35;
const birthDate = 1987;
const birthPlace = "Somewhere on the Earth";
// 

/*
  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.

  წიგნების მაღაზიის მაგალითი:

  const bookName = "ვეფხისტყაოსანი";
  const authrName = "შოთა რუსთაველი";
  const createDate = "13 საუკუნე";
  let productQuant = 124;
*/


// >>>> კოდი დაწერეთ აქ
const title = "Boku no pico";
const genre = "Yaoi";
const series = 24;
let price = 5;
//



// 3 მონაცემთა ტიპები

/*
  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;
*/



const age = 1;
const hisName = "Bob";
const isHigh = true;
const dateOfBirth = 1995;




// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 frue

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")



// აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

// მაგ: console.log(typeof age)
console.log(typeof age);
console.log(typeof hisName);
console.log(typeof isHigh);
console.log(typeof dateOfBirth);
// ოპერატორები არითმეტიკა

let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ
num ++;
num += 2;
num *= 2;
num ** 2;
//

console.log(num)



// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ

// ვერ მივხვდი რას მეკითხებით. ეს?
const maybe = 25 + "25";

//

const discordName = "Tadomeka#0895"; // :)