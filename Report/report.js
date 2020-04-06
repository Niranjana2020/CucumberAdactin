$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing login functionality on adactin application",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User navigate to error",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User to click on proceed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter valid username \"\u003cusername\u003e\" in the username field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User confirm that it navigates to the homepage.",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "11111",
        "aaaaa"
      ],
      "line": 20,
      "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "22222",
        "bbbbb"
      ],
      "line": 21,
      "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;3"
    },
    {
      "cells": [
        "Niranjana",
        "123456"
      ],
      "line": 22,
      "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;4"
    }
  ],
  "keyword": "Examples"
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
  "duration": 217817429,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 37212,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User navigate to error",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User to click on proceed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter valid username \"11111\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter valid password \"aaaaa\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User confirm that it navigates to the homepage.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_Application()"
});
formatter.result({
  "duration": 5613984083,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_navigate_to_error()"
});
formatter.result({
  "duration": 143898650,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_to_click_on_proceed()"
});
formatter.result({
  "duration": 8977753664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11111",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 159009272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaaaa",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 104131040,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 8042894269,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 31224,
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
  "duration": 44911,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 19675,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User navigate to error",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User to click on proceed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter valid username \"22222\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter valid password \"bbbbb\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User confirm that it navigates to the homepage.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_Application()"
});
formatter.result({
  "duration": 3071665102,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_navigate_to_error()"
});
formatter.result({
  "duration": 77426968,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_to_click_on_proceed()"
});
formatter.result({
  "duration": 29158779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22222",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 105851345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bbbbb",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 90802744,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 5842844482,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 26946,
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
  "duration": 43627,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 21814,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User navigate to error",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User to click on proceed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter valid username \"Niranjana\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter valid password \"123456\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User confirm that it navigates to the homepage.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_Application()"
});
formatter.result({
  "duration": 2783143239,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_navigate_to_error()"
});
formatter.result({
  "duration": 35339813,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_to_click_on_proceed()"
});
formatter.result({
  "duration": 60322726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niranjana",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 134244926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 102120739,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 7100281955,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 37640,
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
  "duration": 35928,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 31224,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User to check the bookingroom using valid details",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-to-check-the-bookingroom-using-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User to navigate the booking detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User select an location option in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User select an hotel option in the hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User select an hoteltype option in the hoteltype field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User select an rooms \"\u003c2\u003e\" in the rooms field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User select an fromdate option \"\u003c20/03/2020\u003e\" in the fromdate field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User select an todate option \"\u003c25/03/2020\u003e\" in the todate field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User select an adult  option \"\u003c4\u003e\" in the adult field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select an children option \"\u003c3\u003e\" in the children field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click an search option in the search field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_to_navigate_the_booking_detailed_page()"
});
formatter.result({
  "duration": 50044,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_location_option_in_the_location_field()"
});
formatter.result({
  "duration": 84134958,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_hotel_option_in_the_hotel_field()"
});
formatter.result({
  "duration": 67065362,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_hoteltype_option_in_the_hoteltype_field()"
});
formatter.result({
  "duration": 37580230,
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
  "duration": 86649974,
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
  "duration": 111830067,
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
  "duration": 112090978,
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
  "duration": 94125729,
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
  "duration": 76614721,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_search_option_in_the_search_field()"
});
formatter.result({
  "duration": 9399745419,
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
  "duration": 38923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 39350,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User to check the select function using vaild selection field",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-to-check-the-select-function-using-vaild-selection-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "User to navigate the selection page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User click an selectbutton option in the selectbutton field",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User click an continue option in the continue field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_to_navigate_the_selection_page()"
});
formatter.result({
  "duration": 26518,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_selectbutton_option_in_the_selectbutton_field()"
});
formatter.result({
  "duration": 5119247223,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_continue_option_in_the_continue_field()"
});
formatter.result({
  "duration": 8446473803,
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
  "duration": 39351,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 26091,
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
  "duration": 30797,
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
  "duration": 180847132,
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
  "duration": 91882318,
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
  "duration": 245633583,
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
  "duration": 152156283,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_valid_creditcard_in_the_creditcard_field()"
});
formatter.result({
  "duration": 90319416,
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
  "duration": 85269710,
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
  "duration": 95603941,
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
  "duration": 114469977,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_booknow_in_the_booknow_field()"
});
formatter.result({
  "duration": 5105904811,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigate_to_logoutpage()"
});
formatter.result({
  "duration": 44706107,
  "error_message": "java.lang.AssertionError: expected [  ] but found []\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_confirm_that_it_navigate_to_logoutpage(StepDefinition.java:289)\r\n\tat ✽.Then User confirm that it navigate to logoutpage(src/test/java/com/adactin/feature/Adactin.feature:55)\r\n",
  "status": "failed"
});
});