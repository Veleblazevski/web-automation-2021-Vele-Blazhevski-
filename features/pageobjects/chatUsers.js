import { Page } from "./Page";

export class ChatUsers extends Page{
    //Selectors
    getInputMessage(){
        return this.browser.$('#sendMessage')
    }

    getReplyButton(){
        return this.browser.$('#replyBtn')
    }

    getLoggedUserMessage(){
        return this.browser.$('div.loggedUser')
    }

    getGuestMessage(){
        return this.browser.$("div.text-primary")
    }

    writeInputMessage(message) {
        this.getInputMessage();
        this.getInputMessage().click();
        this.getInputMessage().waitForEnabled()
        this.getInputMessage().setValue(message);
        this.getReplyButton().click();
      
    }
    
    //Methods
    validateLoggedUserMessage(){
        browser.waitUntil(() => {
            return this.getLoggedUserMessage()
        })
           const getLoggedClassMessageDiv = this.getLoggedUserMessage().getAttribute("Class");
           if(getLoggedClassMessageDiv.includes("loggedUser") != true){
            throw "Failed to find your message.."
        }

        }

    validateGuestMessage(){
            browser.waitUntil(() => {
                return this.getGuestMessage()
            })
               const getGuestUserMessage = this.getGuestMessage().getAttribute("Class");
               if(getGuestUserMessage.includes("text-primary") != true){
                throw "You didnt recive any message..."
                           
            } 
    
    }
        
        
    
}