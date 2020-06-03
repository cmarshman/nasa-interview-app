const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nasa-interview-app"
);

const singnUpSeed = [
  {
    userName: "jt25",
    firstName: "JT",
    lastName: "Turner",
    phone: "7048789089",
    email: "jt.turner@gmail.com",
    password: "password1",
    checked:  true,
    date: new Date(Date.now())
  },

  {
    userName: "robert25",
    firstName: "Robert",
    lastName: "Javier",
    phone: "704-878-9089",
    email: "robert.javier@gmail.com",
    password: "password1",
    checked:  true,
    date: new Date(Date.now())
  },
  {
    userName: "cory25",
    firstName: "Cory",
    lastName: "Marshman",
    phone: "402-878-9989",
    email: "cory.marshman@gmail.com",
    password: "password1",
    checked:  true,
    date: new Date(Date.now())
  },
  {
    userName: "jose25",
    firstName: "Jose",
    lastName: "Diplome",
    phone: "404-878-9089",
    email: "jose.diplome@hotmail.com",
    password: "password1",
    checked:  true,
    date: new Date(Date.now())
  },
  {
    userName: "Michelle25",
    firstName: "Michelle",
    lastName: "Abraham",
    phone: "282-878-9089",
    email: "michelle.b@yahoo.com",
    password: "password1",
    checked:  true,
    date: new Date(Date.now())
  },
  {
    userName: "isabella25",
    firstName: "Isabella",
    lastName: "Herandez",
    phone: "704-878-9089",
    email: "isabella.h@gmail.com",
    password: "password1",
    checked:  true,
    date: new Date(Date.now())
  },
  {
    userName: "devante25",
    firstName: "DeVante",
    lastName: "Bailey",
    phone: "704-879-7898",
    email: "devante.bailey@gmail.com",
    password: "password1",
    checked:  true,
    date: new Date(Date.now())
  },
  { 
    userName: "sile25",
    firstName: "Sile",
    lastName: "Kiman",
    phone: "980-878-9089",
    email: "sile.kiman@gmail.com",
    password: "password1",
    checked:  true,
    date: new Date(Date.now())
  },
];

db.SignUp
  .remove({})
  .then(() => db.SignUp.collection.insertMany(singnUpSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });