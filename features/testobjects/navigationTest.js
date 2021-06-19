
import { pages } from "../support/pages";

export class NavigationTest{
    
    openPageAndValidateConnection(){
        pages.user1.mainPage.openMainPage();
        pages.user2.mainPage.openMainPage();
        expect(pages.user1.mainPage.getConnectionContainer().getText()).toBe("Connected to the MQTT.Cool server")
        expect(pages.user2.mainPage.getConnectionContainer().getText()).toBe("Connected to the MQTT.Cool server")
    }


    disconnectFromChat(){
        pages.user1.mainPage.disconnectFromChat();
        pages.user2.mainPage.disconnectFromChat();
     
    }
}