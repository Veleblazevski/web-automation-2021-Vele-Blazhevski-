
import faker from 'faker';

class UserData {
   constructor() {
       this.user1 = new UserDemo(
           faker.name.firstName(),
           faker.random.words(2)
           
           )
       this.user2 = new UserDemo(
           faker.name.lastName(),
           faker.random.words(2)
           
           )
   }
}

class UserDemo {
   constructor(name,message) {
       this.name = name
       this.message = message
   }
}

const demoUser = new UserData();
export  {demoUser}