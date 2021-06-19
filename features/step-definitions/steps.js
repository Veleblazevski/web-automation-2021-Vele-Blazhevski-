import { Given,When,Then } from '@cucumber/cucumber';
import {tests} from '../support/tests'

Given("I see both users,opened the page and connected successfully",() => {
    tests.navigaionTest.openPageAndValidateConnection();
});

When("I see that the both users entered a username",() => {
        tests.userTest.fillInUserNameForm();
});


Then("I see that the both users connected to broker",() => {
    tests.userTest.checkBrokerConnection();
});

Then("I see that the both users see themselves and each other in the Connected Users tab",() => {
    tests.connectedUserTest.checkIfUserIsLoggedAndCheckForGuest();
});


When("I see that user1 sends any message",() => {
   tests.chatTest.userOneSendsMessage();
});

Then("I see that user2 receives the sent message",() => {
    tests.chatTest.userTwoRecivesMessage();
 });
 
 
When("I see that user2 sends any message",() => {
    tests.chatTest.userTwoSendsMessage();
 });
 
 Then("I see that user1 receives the sent message",() => {
     tests.chatTest.userOneRecivesMessage();
  });
  
 
  Then("I see that both users can disconnect and lose connection",() => {
        tests.navigaionTest.disconnectFromChat();
 });
 

 