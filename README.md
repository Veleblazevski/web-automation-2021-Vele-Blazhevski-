This is a task for TestDevLab.

Clone the repository,from my github account.

Run npm install.

Double check for faker,if installed.

    If not run "npm i faker"

The project can be run by two commands:

    npm run cucumber

    npm run multi -- --spec features/chat.feature

This project has allure report and spec report.

    If u want to see the spec reporter comment the allure reporter in wdio.base.conf.js,
        and uncomment the spec reporter 

You can find this reporters by searching: 
        reporters: in the wdio.base.conf.js 

If u want to see the allure reporter run the tests,
    and put this command in the terminal: 
        allure generate ./allure-results --clean && allure open

The allure reporter also takes screenshots if there is a error;
