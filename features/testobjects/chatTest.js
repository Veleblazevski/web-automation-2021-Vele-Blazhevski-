import { demoUser } from "../support/demouser";
import { pages } from "../support/pages";


export class ChatTest {
    
    userOneSendsMessage(){
        pages.user1.chatUsers.writeInputMessage(demoUser.user1.message);
        pages.user1.chatUsers.validateLoggedUserMessage();
    }

    userTwoRecivesMessage(){
        pages.user2.chatUsers.validateGuestMessage();
    }

    userTwoSendsMessage(){
        pages.user2.chatUsers.writeInputMessage(demoUser.user2.message);
        pages.user2.chatUsers.validateLoggedUserMessage();
    }

    userOneRecivesMessage(){
        pages.user1.chatUsers.validateGuestMessage();
    }
}