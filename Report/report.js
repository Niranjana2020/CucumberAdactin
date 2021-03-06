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
  "duration": 915051446,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 29941,
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
  "duration": 31214286509,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_navigate_to_error()"
});
formatter.result({
  "duration": 7534049653,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_to_click_on_proceed()"
});
formatter.result({
  "duration": 5157477776,
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
  "duration": 6319527898,
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
  "duration": 124319922,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 9075441580,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 42772,
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
  "duration": 41489,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 18392,
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
  "duration": 2786860213,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_navigate_to_error()"
});
formatter.result({
  "duration": 264749988,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_to_click_on_proceed()"
});
formatter.result({
  "duration": 73849600,
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
  "duration": 115940852,
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
  "duration": 77707223,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 7385284144,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 33362,
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
  "duration": 54321,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 25663,
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
  "duration": 3188385385,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_navigate_to_error()"
});
formatter.result({
  "duration": 42882537,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_to_click_on_proceed()"
});
formatter.result({
  "duration": 41358992,
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
  "duration": 116989625,
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
  "duration": 86047371,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 10784337083,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 23952,
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
  "duration": 39778,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 23953,
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
  "duration": 63303,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_location_option_in_the_location_field()"
});
formatter.result({
  "duration": 141089185,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_hotel_option_in_the_hotel_field()"
});
formatter.result({
  "duration": 65249824,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_an_hoteltype_option_in_the_hoteltype_field()"
});
formatter.result({
  "duration": 32795146,
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
  "duration": 105880406,
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
  "duration": 108972407,
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
  "duration": 95603533,
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
  "duration": 89378468,
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
  "duration": 100626270,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_search_option_in_the_search_field()"
});
formatter.result({
  "duration": 17673733772,
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
  "duration": 50471,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 41917,
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
  "duration": 24808,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_selectbutton_option_in_the_selectbutton_field()"
});
formatter.result({
  "duration": 5124534211,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_continue_option_in_the_continue_field()"
});
formatter.result({
  "duration": 8756881189,
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
  "duration": 43200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.goes_to_landing_page()"
});
formatter.result({
  "duration": 23525,
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
  "duration": 30796,
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
  "duration": 751526111,
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
  "duration": 93465351,
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
  "duration": 417518974,
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
  "duration": 210117076,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_valid_creditcard_in_the_creditcard_field()"
});
formatter.result({
  "duration": 95871286,
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
  "duration": 85004157,
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
  "duration": 97122373,
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
  "duration": 113276144,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_an_booknow_in_the_booknow_field()"
});
formatter.result({
  "duration": 5259642989,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_that_it_navigate_to_logoutpage()"
});
formatter.result({
  "duration": 10155828,
  "error_message": "java.lang.AssertionError: expected [  ] but found []\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_confirm_that_it_navigate_to_logoutpage(StepDefinition.java:289)\r\n\tat ✽.Then User confirm that it navigate to logoutpage(src/test/java/com/adactin/feature/Adactin.feature:55)\r\n",
  "status": "failed"
});
});