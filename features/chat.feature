Feature: The Mqtt Cool website

Scenario: Chat with 2 users

  Given I see both users,opened the page and connected successfully
  When I see that the both users entered a username
  Then I see that the both users connected to broker
  Then I see that the both users see themselves and each other in the Connected Users tab
  And I see that user1 sends any message
  Then I see that user2 receives the sent message
  And I see that user2 sends any message
  Then I see that user1 receives the sent message
  Then I see that both users can disconnect and lose connection