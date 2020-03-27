$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing login functionality on adactin application",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 298126,
  "status": "passed"
});
formatter.before({
  "duration": 759643,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "goes to landing page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_User_is_logged_in()"
});
formatter.result({
  "duration": 262816523,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 30368,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User to check the bookingroom using valid details",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-to-check-the-bookingroom-using-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User to navigate the booking detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User select an location option in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User select an hotel option in the hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User select an hoteltype option in the hoteltype field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User select an rooms \"\u003c2\u003e\" in the rooms field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User select an fromdate option \"\u003c20/03/2020\u003e\" in the fromdate field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User select an todate option \"\u003c25/03/2020\u003e\" in the todate field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User select an adult  option \"\u003c4\u003e\" in the adult field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User select an children option \"\u003c3\u003e\" in the children field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click an search option in the search field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_to_navigate_the_booking_detailed_page()"
});
formatter.result({
  "duration": 35501,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_location_option_in_the_location_field()"
});
formatter.result({
  "duration": 100938049,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_hotel_option_in_the_hotel_field()"
});
formatter.result({
  "duration": 33287866,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_hoteltype_option_in_the_hoteltype_field()"
});
formatter.result({
  "duration": 48671928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2\u003e",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_select_an_rooms_in_the_rooms_field(String)"
});
formatter.result({
  "duration": 35912828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c20/03/2020\u003e",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_select_an_fromdate_option_in_the_fromdate_field(String)"
});
formatter.result({
  "duration": 40550245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c25/03/2020\u003e",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_select_an_todate_option_in_the_todate_field(String)"
});
formatter.result({
  "duration": 26738080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c4\u003e",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_select_an_adult_option_in_the_adult_field(String)"
});
formatter.result({
  "duration": 25657641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c3\u003e",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_select_an_children_option_in_the_children_field(String)"
});
formatter.result({
  "duration": 28495183,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_search_option_in_the_search_field()"
});
formatter.result({
  "duration": 25542582,
  "status": "passed"
});
formatter.after({
  "duration": 147566,
  "status": "passed"
});
formatter.after({
  "duration": 236533,
  "status": "passed"
});
});