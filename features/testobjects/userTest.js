import { pages } from "../support/pages";
import { demoUser } from "../support/demouser";
export class UserTest {

    fillInUserNameForm(){
        pages.user1.mainPage.fillUserNameInput(demoUser.user1.name);
        pages.user2.mainPage.fillUserNameInput(demoUser.user2.name);
    }
    
    checkBrokerConnection(){
        const getBrokerTextUser1 = pages.user1.mainPage.checkArrTextBroker();
        const getBrokerTextUser2 = pages.user2.mainPage.checkArrTextBroker();
        expect(getBrokerTextUser1[1]).toBe("Connected to the MQTT broker at tcp://broker.mqtt.cool:1883")
        expect(getBrokerTextUser2[1]).toBe("Connected to the MQTT broker at tcp://broker.mqtt.cool:1883")
       
    }
}