// CRUD - cars collection 
const carsColl = db.collection('cars')
// C - CREATE
// R - READ 
// U - UPDATE
// D - DELETE

// 1. Create cars.js - right next to fish.js
// 2. Create a function to add/create a car
function createCar(){
  carsColl.insertOne()
}

// 3. Create a function to read/get all cars
function readAllCars(){
  carsColl.find({}).toArray()
}

// 4. Create a function to delete one car
function deleteACar(){}

// 5. Create function to Update on car
function updateCar(){}