import { Page } from "./Page";

export class MainPage extends Page {
    openMainPage(){
        this.browser.url('https://demos.mqtt.cool/chat/');
     
    }

    //Selectors
    getConnectionContainer(){
        return this.browser.$("//div[contains(@class, 'text-success')]")
    
    }

    getUsernameInput(){
        return this.browser.$('#user')
    }

    getConnectButton(){
        return this.browser.$('#connectBtn')
    }

    getArrBroker(){
        return this.browser.$$("//div[contains(@class, 'text-success')]")
    }

    getDisconnectButton(){
        return this.browser.$('#disconnectBtn')
    }

    getDisconnectMessage(){
        return this.browser.$$("//div[contains(@class, 'loggedUser')]")
    }

    //Methods
    checkArrTextBroker(){ 
        browser.waitUntil(() => {
            return this.getArrBroker().map((elem) => elem.isDisplayed()).length > 1
        })
            return this.getArrBroker().map(element => element.getText())
    }
    
    fillUserNameInput(userName) {
        this.getUsernameInput();
        this.getUsernameInput().click();
        this.getUsernameInput().waitForEnabled()
        this.getUsernameInput().setValue(userName);
        this.getConnectButton().click();
    }

    removeElementInFrontDisconnectButton(){
        this.browser.execute(() => {
            const elemToRemove = document.querySelector('img[alt="Fork me on GitHub"]');
            elemToRemove.remove();
        });
       
    }

    disconnectFromChat(){
        this.removeElementInFrontDisconnectButton();
        this.getDisconnectButton();
        this.getDisconnectButton().click();
        this.checkDisconnectMessage();
        
    }
 
    checkDisconnectMessage(){
        browser.waitUntil(() => {
            return this.getDisconnectMessage().map((elem) => elem.isDisplayed()).length > 1
        })
            const getDisconnectBroker = this.getDisconnectMessage().map(element => element.getText());
            let disconnectUserMessage = getDisconnectBroker[1];
            if(disconnectUserMessage.includes("has disconnected") != true){
                throw "Unable to disconnect form the chat..."
            }
    }


}