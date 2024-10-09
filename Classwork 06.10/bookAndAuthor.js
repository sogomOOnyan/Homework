function isValidName(name) {
  const nameRegex = /^[A-Za-z\s]+$/;
  return nameRegex.test(name);
}

const isValidEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );
};

function isValidTitle(title) {
  const titleRegex = /^[A-Za-z0-9\s]+$/;
  return titleRegex.test(title);
}

function isValidPrice(num) {
  const numberRegex = /^[0-9]+$/;
  return numberRegex.test(num);
}

class Author {
  constructor(name, email, gender) {
    if (isValidEmail(email)) this.email = email;
    else throw new Error("Invalid email");

    if (isValidName(name)) this.name = name;
    else throw new Error("Invalid name");

    if (gender.toLowerCase() === "male" || gender.toLowerCase() === "female") {
      this.gender = gender;
    } else throw new Error("Invalid gender");
  }

  toString() {
    return `${this.gender === "male" ? "Mr." : "Ms."} ${this.name}`;
  }
}

class Book {
  constructor(title, authorName, email, gender, price, quantity) {
    if (isValidTitle(title)) this.title = title;
    else
      throw new Error("Title should include only letters, numbers and space");

    this.author = new Author(authorName, email, gender);

    if (isValidPrice(price)) this.price = price;
    else throw new Error("Price should be a number");

    if (isValidPrice(quantity)) this.quantity = quantity;
    else throw new Error("Quantity should be a number");
  }

  getAuthor() {
    return this.author.toString();
  }

  getPrice() {
    return this.price;
  }

  getQuantity() {
    return this.quantity;
  }

  getProfit() {
    return `${this.price * this.quantity}$`;
  }
}

let newAuthor = new Author(
  "Gagik Alaverdyan",
  "sogomonyanhayk7@gmail.com",
  "male"
);
let newBook = new Book(
  "Python",
  "Gagik Alaverdyan",
  "sogomonyanhayk7@gmail.com",
  "male",
  100,
  10
);

console.log(newAuthor.toString());
console.log(newBook.getProfit());
