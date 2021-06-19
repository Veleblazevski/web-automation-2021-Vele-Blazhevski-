import { pages } from "./pages";
import { NavigationTest } from "../testobjects/navigationTest";
import { UserTest } from "../testobjects/userTest";
import { ConnectedUserTest } from "../testobjects/connectedUserTest";
import { ChatTest } from "../testobjects/chatTest";


class Tests {
    constructor(pages) {
        this.navigaionTest = new NavigationTest(pages);
        this.userTest = new UserTest(pages)
        this.connectedUserTest = new ConnectedUserTest(pages);
        this.chatTest = new ChatTest(pages)
    }
}

const tests = new Tests(pages);

export {tests};