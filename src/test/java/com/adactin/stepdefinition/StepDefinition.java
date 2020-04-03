package com.adactin.stepdefinition;

import static org.testng.Assert.assertEquals;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import com.adactin.baseclass.BaseClass2;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.Adpage1;
import com.adactin.pom.Adpage2;
import com.adactin.pom.Adpage3;
import com.adactin.pom.Adpage4;
import com.adactin.runner.Runner;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass2 {

	public static WebDriver driver = Runner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);

	
	/* @Before 
	 public void beforeHooks(Scenario scenario) { 
		  String name =scenario.getName(); 
		  System.out.println("Scenario name:" + name); 
		  }
	  
	  @After 
	  public void afterHooks(Scenario scenario) { 
		  String status =scenario.getStatus(); 
		  System.out.println("  Status:" + status);
	  
	 // if (scenario.isFailed()) { 
		 // Screenshot(scenario.getName());
	  
	  } */
	  @Given("^the User is logged in$")
	  public void the_User_is_logged_in() throws Throwable {
	      
	  }

	  @Given("^goes to landing page$")
	  public void goes_to_landing_page() throws Throwable {
	      
	  }


	 

	@Given("^User launch the Application$")
	public void user_launch_the_Application() throws Throwable {

		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		getUrl(url);
		Thread.sleep(2000);

		/*
		 * driver = BrowserLaunch("chrome");
		 * getUrl("https://adactin.com/HotelApp/index.php"); maximize();
		 */

	}

	@When("^User navigate to error$")
	public void user_navigate_to_error() throws Throwable {
		// Adpage1 ap1 = new Adpage1(driver);
		// click(ap1.getEror1());

		// String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		// driver.get(url);
		click(pom.getAdp1().getEror1());
		//Thread.sleep(6000);

	}

	@When("^User to click on proceed$")
	public void user_to_click_on_proceed() throws Throwable {
		// String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		// driver.get(url);
		click(pom.getAdp1().getEror2());
		// Adpage1 ap1 = new Adpage1(driver);
		// click(ap1.getEror2());
		//Thread.sleep(6000);
	}

	@When("^User enter valid username \"([^\"]*)\" in the username field$")
	public void user_enter_valid_username_in_the_username_field(String username) throws Throwable {
		typehere(pom.getAdp1().getUsername(), username);
		// Adpage1 ap1 = new Adpage1(driver);
		// typehere(ap1.getUsername(), "Niranjana");
	}

	@When("^User enter valid password \"([^\"]*)\" in the password field$")
	public void user_enter_valid_password_in_the_password_field(String password) throws Throwable {
		typehere(pom.getAdp1().getPassword(), password);

		// Adpage1 ap1 = new Adpage1(driver);
		// typehere(ap1.getPassword(), "123456");
	}

	@When("^User click on login button$")
	public void user_click_on_login_button() throws Throwable {
	click(pom.getAdp1().getLogin());
		// Adpage1 ap1 = new Adpage1(driver);
		// click(ap1.getLogin());
	}

	@Then("^User confirm that it navigates to the homepage\\.$")
	public void user_confirm_that_it_navigates_to_the_homepage() throws Throwable {
		
	}

	@Given("^User to navigate the booking detailed page$")
	public void user_to_navigate_the_booking_detailed_page() throws Throwable {
	}

	@When("^User select an location option in the location field$")
	public void user_select_an_location_option_in_the_location_field() throws Throwable {
		click(pom.getAdp2().getPlace());
		// Adpage2 ap2 = new Adpage2(driver);
		// click(ap2.getPlace());

	}

	@When("^User select an hotel option in the hotel field$")
	public void user_select_an_hotel_option_in_the_hotel_field() throws Throwable {
		click(pom.getAdp2().getHotel());
		// Adpage2 ap2 = new Adpage2(driver);
		// click(ap2.getHotel());
	}

	@When("^User select an hoteltype option in the hoteltype field$")
	public void user_select_an_hoteltype_option_in_the_hoteltype_field() throws Throwable {
		click(pom.getAdp2().getHoteltype());
		// Adpage2 ap2 = new Adpage2(driver);
		// click(ap2.getHoteltype());
	}

	@When("^User select an rooms \"([^\"]*)\" in the rooms field$")
	public void user_select_an_rooms_in_the_rooms_field(String value) throws Throwable {
		typehere(pom.getAdp2().getRooms(), value);
	}

	@When("^User select an fromdate option \"([^\"]*)\" in the fromdate field$")
	public void user_select_an_fromdate_option_in_the_fromdate_field(String value) throws Throwable {
		typehere(pom.getAdp2().getFromdate(), value);
	}

	@When("^User select an todate option \"([^\"]*)\" in the todate field$")
	public void user_select_an_todate_option_in_the_todate_field(String value) throws Throwable {
		typehere(pom.getAdp2().getTodate(), value);
	}

	@When("^User select an adult  option \"([^\"]*)\" in the adult field$")
	public void user_select_an_adult_option_in_the_adult_field(String value) throws Throwable {
		typehere(pom.getAdp2().getAdult(), value);
		// Adpage2 ap2 = new Adpage2(driver);
		// typehere(ap2.getAdult(), "4");
	}

	@When("^User select an children option \"([^\"]*)\" in the children field$")
	public void user_select_an_children_option_in_the_children_field(String value) throws Throwable {

		typehere(pom.getAdp2().getChildren(), value);
		// Adpage2 ap2 = new Adpage2(driver);
		// typehere(ap2.getChildren(), "3");
	}

	@Then("^User click an search option in the search field$")
	public void user_click_an_search_option_in_the_search_field() throws Throwable {

		click(pom.getAdp2().getSearch());
		// Adpage2 ap2 = new Adpage2(driver);
		// click(ap2.getSearch());

	}

	@Given("^User to navigate the selection page$")
	public void user_to_navigate_the_selection_page() throws Throwable {
	}

	@When("^User click an selectbutton option in the selectbutton field$")
	public void user_click_an_selectbutton_option_in_the_selectbutton_field() throws Throwable {
		click(pom.getAdp3().getSlectbttn());
		// Adpage3 ap3= new Adpage3(driver);
		// click(ap3.getSlectbttn());
	}

	@Then("^User click an continue option in the continue field$")
	public void user_click_an_continue_option_in_the_continue_field() throws Throwable {

		click(pom.getAdp3().getCntnue());
		// Adpage3 ap3= new Adpage3(driver);
		// click(ap3.getCntnue());
	}

	@Given("^User to navigate the confirmation page$")
	public void user_to_navigate_the_confirmation_page() throws Throwable {
	}

	@When("^User enter valid firstname \"([^\"]*)\" in the firstname field$")
	public void user_enter_valid_firstname_in_the_firstname_field(String firstname) throws Throwable {
		typehere(pom.getAdp4().getFrstname(), firstname);
		// Adpage4 ap4 = new Adpage4(driver);
		// typehere(ap4.getFrstname(), "Niranjana");
	}

	@When("^User enter valid lastname \"([^\"]*)\" in the lastname field$")
	public void user_enter_valid_lastname_in_the_lastname_field(String lastname) throws Throwable {

		typehere(pom.getAdp4().getLname(), lastname);
		// Adpage4 ap4 = new Adpage4(driver);
		// typehere(ap4.getLname(), "R");

	}

	@When("^User enter vaild Billingaddress \"([^\"]*)\"in the Billingaddress field$")
	public void user_enter_vaild_Billingaddress_in_the_Billingaddress_field(String address) throws Throwable {
		typehere(pom.getAdp4().getBiladrs(), address);
		// Adpage4 ap4 = new Adpage4(driver);
		// typehere(ap4.getBiladrs(), "18/16,46th street,ashok nagar,chennai");
	}

	@When("^User enter valid ccnum  \"([^\"]*)\" in the ccnum field$")
	public void user_enter_valid_ccnum_in_the_ccnum_field(String ccnum) throws Throwable {
		typehere(pom.getAdp4().getCcnum(), ccnum);
		// Adpage4 ap4 = new Adpage4(driver);
		// typehere(ap4.getCcnum(), "1111222233334444");

	}

	@When("^User enter valid creditcard  in the creditcard field$")
	public void user_enter_valid_creditcard_in_the_creditcard_field() throws Throwable {

		click(pom.getAdp4().getCreditcard());
	}

	@When("^User enter valid expmonth \"([^\"]*)\"  in the expmonth field$")
	public void user_enter_valid_expmonth_in_the_expmonth_field(String value) throws Throwable {

		typehere(pom.getAdp4().getExpmonth(), value);
		// dropDown(pom.getAdp4().getExpmonth(), "value", value);
		// Adpage4 ap4 = new Adpage4(driver);
		// dropDown(ap4.getExpmonth(), "value", "3");
	}

	@When("^User enter valid expyear \"([^\"]*)\" in the expyear field$")
	public void user_enter_valid_expyear_in_the_expyear_field(String value) throws Throwable {
		typehere(pom.getAdp4().getExpyear(), value);
		// Adpage4 ap4 = new Adpage4(driver);
		// typehere(ap4.getExpyear(), "2022");
	}

	@When("^User enter vaild cvv \"([^\"]*)\" in the cvv field$")
	public void user_enter_vaild_cvv_in_the_cvv_field(String value) throws Throwable {

		typehere(pom.getAdp4().getCvv(), value);
		// Adpage4 ap4 = new Adpage4(driver);
		// typehere(ap4.getCvv(), "1234");
	}

	@When("^User click an  booknow in the booknow field$")
	public void user_click_an_booknow_in_the_booknow_field() throws Throwable {
		click(pom.getAdp4().getBnow());
		// Adpage4 ap4 = new Adpage4(driver);
		// click(ap4.getBnow());
	}

	@Then("^User confirm that it navigate to logoutpage$")
	public void user_confirm_that_it_navigate_to_logoutpage() throws Throwable {
		click(pom.getAdp4().getLgout());
		// assertEquals("s", "S");
		// Adpage4 ap4 = new Adpage4(driver);
		// click(ap4.getLgout());
		//Assert.assertEquals("", "  ");
	}

}
