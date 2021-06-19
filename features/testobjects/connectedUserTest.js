
import { pages } from "../support/pages";
export class ConnectedUserTest {

    checkIfUserIsLoggedAndCheckForGuest(){
    expect(pages.user1.connectedUser.checkForConnectionContainer()).toBe("Connected Users")
    expect(pages.user2.connectedUser.checkForConnectionContainer()).toBe("Connected Users")
    pages.user1.connectedUser.checkForLoggedUserAndGuestUser();
    pages.user2.connectedUser.checkForLoggedUserAndGuestUser();

    }
  
}