Feature: Testing login functionality on adactin application 

Background: 
Given the User is logged in
And goes to landing page


@login 
Scenario Outline:User checking the login function using valid username and valid password 
	Given User launch the Application 
	When User navigate to error 
	And User to click on proceed 
	And User enter valid username "<username>" in the username field 
	And User enter valid password "<password>" in the password field 
	And  User click on login button 
	Then User confirm that it navigates to the homepage. 
	
	Examples:
	|username|password|
	|111111|aaaaaaa|
	|222222|bbbbbbb|
	|Niranjana|123456|
	
@RegressionTest	
Scenario: User to check the bookingroom using valid details 
	Given User to navigate the booking detailed page 
	When User select an location option in the location field 
	And User select an hotel option in the hotel field 
	And User select an hoteltype option in the hoteltype field 
	And User select an rooms "<2>" in the rooms field 
	And User select an fromdate option "<20/03/2020>" in the fromdate field 
	And User select an todate option "<25/03/2020>" in the todate field 
	And User select an adult  option "<4>" in the adult field 
	And User select an children option "<3>" in the children field 
	Then User click an search option in the search field 
	
Scenario: User to check the select function using vaild selection field 
	Given User to navigate the selection page 
	When User click an selectbutton option in the selectbutton field 
	Then User click an continue option in the continue field 
	
Scenario: User checking booked details and confirm the details 
	Given User to navigate the confirmation page 
	When User enter valid firstname "<Niranjana>" in the firstname field 
	And User enter valid lastname "<R>" in the lastname field 
	And User enter vaild Billingaddress "<18/16,46th street,ashok nagar,chennai>"in the Billingaddress field 
	And User enter valid ccnum  "<1111222233334444>" in the ccnum field 
	And User enter valid creditcard  in the creditcard field 
	And User enter valid expmonth "<3>"  in the expmonth field 
	And User enter valid expyear "<2022>" in the expyear field 
	And User enter vaild cvv "<1234>" in the cvv field 
	And User click an  booknow in the booknow field 
	Then User confirm that it navigate to logoutpage 
	
	
	
	
	
