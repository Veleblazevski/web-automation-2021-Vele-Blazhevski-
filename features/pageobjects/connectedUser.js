const { Page } = require("./Page")


export class ConnectedUser extends Page {
    //Selectors
    getUserList(){
       return this.browser.$('.card-header')
    }

    checkForConnectionContainer(){
        return this.getUserList().getText();
    }

    getLoggedUserAndGuestUser(){
        return this.browser.$$('li[class*="list-group-item p-1 border-0"]')
    }

    //Methods
    checkForLoggedUserAndGuestUser(){
        browser.waitUntil(() => {
            return this.getLoggedUserAndGuestUser().map((elem) => elem.isDisplayed()).length > 1
        })
        const getLiClasses = this.getLoggedUserAndGuestUser().map(el => el.getAttribute('class'));
        const getLoggedUser = getLiClasses[0];
        if(getLoggedUser.includes("loggedUser") != true){
            throw "Failed to connect.."
        }

        const getGuestUser = getLiClasses[1];
        if(getGuestUser.includes("text-primary") != true){
            throw "No guests found.."
        }
    }

}