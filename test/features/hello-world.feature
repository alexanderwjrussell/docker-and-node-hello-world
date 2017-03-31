Feature: Hello World
  As a user of HelloWorld.js
  I want to make a request to the service
  So that I know the service is working

  Scenario: Service responds with a 200
    Given I am a user of the helloworld service
    When I make a GET request
    Then I should receive a 200 status code

  Scenario: Service responds with Hello World in the body
    Given I am a user of the helloworld service
    When I make a GET request
    Then I should receive 'Hello World' in the body
