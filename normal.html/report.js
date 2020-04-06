$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing login functionality on adactin application",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application",
  "keyword": "Feature"
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
  "duration": 4020175,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 35929,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "User checking booked details and confirm the details",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-booked-details-and-confirm-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@SanitaryTest"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User to navigate the confirmation page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User enter valid firstname \"\u003cNiranjana\u003e\" in the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User enter valid lastname \"\u003cR\u003e\" in the lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User enter vaild Billingaddress \"\u003c18/16,46th street,ashok nagar,chennai\u003e\"in the Billingaddress field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User enter valid ccnum  \"\u003c1111222233334444\u003e\" in the ccnum field",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User enter valid creditcard  in the creditcard field",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enter valid expmonth \"\u003c3\u003e\"  in the expmonth field",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User enter valid expyear \"\u003c2022\u003e\" in the expyear field",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User enter vaild cvv \"\u003c1234\u003e\" in the cvv field",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User click an  booknow in the booknow field",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User confirm that it navigate to logoutpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_to_navigate_the_confirmation_page()"
});
formatter.result({
  "duration": 32507,
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
  "duration": 2208718891,
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
  "duration": 98172850,
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
  "duration": 194222907,
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
  "duration": 127813245,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_valid_creditcard_in_the_creditcard_field()"
});
formatter.result({
  "duration": 77469741,
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
  "duration": 92319879,
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
  "duration": 93539747,
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
  "duration": 106145192,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_booknow_in_the_booknow_field()"
});
formatter.result({
  "duration": 78897910,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigate_to_logoutpage()"
});
formatter.result({
  "duration": 470068,
  "error_message": "java.lang.AssertionError: expected [  ] but found []\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_confirm_that_it_navigate_to_logoutpage(StepDefinition.java:289)\r\n\tat ✽.Then User confirm that it navigate to logoutpage(src/test/java/com/adactin/feature/Adactin.feature:55)\r\n",
  "status": "failed"
});
});