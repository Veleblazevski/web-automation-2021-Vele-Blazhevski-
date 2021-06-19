import { ChatUsers } from "../pageobjects/chatUsers";
import { ConnectedUser } from "../pageobjects/connectedUser";
import { MainPage } from "../pageobjects/mainPage";

class Pages {
    constructor(){
        this.user1 = {
            mainPage: new MainPage('user1'),
            connectedUser: new ConnectedUser('user1'),
            chatUsers: new ChatUsers('user1')
           
        },
        this.user2 = {
            mainPage : new MainPage('user2'),
            connectedUser : new ConnectedUser('user2'),
            chatUsers: new ChatUsers('user2')
        }
    
    }
}

const pages = new Pages();

export {pages}