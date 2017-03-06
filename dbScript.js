var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/zoo"); 


var animalsSchema = mongoose.Schema({
 name: String, 
 diet: String
})

var visitorsSchema = mongoose.Schema({
 name: String, 
 favoriteAnimals: []


})

var animals = mongoose.model("animals", animalsSchema);
var visitors = mongoose.model("visitors", visitorsSchema);

var animal =[
  {name : "lion",
   diet : "carnivore "},
  
  {name:  "tiger",
   diet: "carnivore"},
  
  {name: "horse",
   diet: "hervibore"}
  ];
  for(var i=0; i<animal.length; i++){
  new animals(animal[i]).save();
}
  


var visitor = [
  {name :"Alex",
  favoriteAnimals:["lion","horse","monkey"]
  },
  
  {name: "Tom",
   favoriteAnimals:["tiger","lion"]
    },
  
   {name: "josie",
    favoriteAnimals:["giraffe","horse"]
   
   }
  ]; 
  for(var i=0; i<visitor.length; i++){
  new visitors(visitor[i]).save();
}
visitors.find({favoriteAnimals:"giraffe"});


