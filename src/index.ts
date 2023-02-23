import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
import "reflect-metadata"; 
import {createConnection} from "typeorm";
import {Student} from "./entity/Student"; //import Student entity

createConnection().then(async connection => { 

   console.log("Inserting a new record into the student database..."); 
   
   //create student object const stud = new Student(); 
   
   //Assign student name and age here stud.Name = "student1"; 
   stud.age = 12; 
   
    //save student object in connection await connection.manager.save(stud); console.log("Saved a new user with id: " + stud.id);
    
    console.log("Loading users from the database...");

    //Display student saved records const students = await connection.manager.find(Student); console.log("Loaded users: ", students);

    console.log("Here you can setup and run express/koa/any other framework.");
}).catch(error => console.log(error));
