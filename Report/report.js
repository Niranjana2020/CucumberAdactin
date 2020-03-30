$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing login functionality on adactin application",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 526532,
  "status": "passed"
});
formatter.before({
  "duration": 99907226,
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
  "duration": 7716047767,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 41062,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User checking booked details and confirm the details",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-booked-details-and-confirm-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User to navigate the confirmation page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User enter valid firstname \"\u003cNiranjana\u003e\" in the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enter valid lastname \"\u003cR\u003e\" in the lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User enter vaild Billingaddress \"\u003c18/16,46th street,ashok nagar,chennai\u003e\"in the Billingaddress field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User enter valid ccnum  \"\u003c1111222233334444\u003e\" in the ccnum field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User enter valid creditcard  in the creditcard field",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User enter valid expmonth \"\u003c3\u003e\"  in the expmonth field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User enter valid expyear \"\u003c2022\u003e\" in the expyear field",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User enter vaild cvv \"\u003c1234\u003e\" in the cvv field",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User click an  booknow in the booknow field",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User confirm that it navigate to logoutpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_to_navigate_the_confirmation_page()"
});
formatter.result({
  "duration": 36357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cNiranjana\u003e",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enter_valid_firstname_in_the_firstname_field(String)"
});
formatter.result({
  "duration": 2929078988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cR\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enter_valid_lastname_in_the_lastname_field(String)"
});
formatter.result({
  "duration": 47261284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c18/16,46th street,ashok nagar,chennai\u003e",
      "offset": 33
    }
  ],
  "location": "StepDefinition.user_enter_vaild_Billingaddress_in_the_Billingaddress_field(String)"
});
formatter.result({
  "duration": 44910068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c1111222233334444\u003e",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_enter_valid_ccnum_in_the_ccnum_field(String)"
});
formatter.result({
  "duration": 40338520,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_valid_creditcard_in_the_creditcard_field()"
});
formatter.result({
  "duration": 947894277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c3\u003e",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enter_valid_expmonth_in_the_expmonth_field(String)"
});
formatter.result({
  "duration": 36138239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2022\u003e",
      "offset": 26
    }
  ],
  "location": "StepDefinition.user_enter_valid_expyear_in_the_expyear_field(String)"
});
formatter.result({
  "duration": 33017970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c1234\u003e",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_vaild_cvv_in_the_cvv_field(String)"
});
formatter.result({
  "duration": 29014016,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_booknow_in_the_booknow_field()"
});
formatter.result({
  "duration": 29068337,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigate_to_logoutpage()"
});
formatter.result({
  "duration": 36906866,
  "status": "passed"
});
formatter.after({
  "duration": 88967,
  "status": "passed"
});
formatter.after({
  "duration": 171518,
  "status": "passed"
});
});