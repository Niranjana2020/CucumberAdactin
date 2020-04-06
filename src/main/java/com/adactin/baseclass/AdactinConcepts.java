package com.adactin.baseclass;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.Select;



public class AdactinConcepts extends BaseClass2{
	
	public static WebDriver driver;
	
	public static void main(String[] args) throws InterruptedException {
		driver=BrowserLaunch("chrome");
		getUrl("https://adactin.com/HotelApp/index.php");
		maximize();
			
		WebElement eror1 = driver.findElement(By.xpath("//*[@id=\"details-button\"]"));
		click(eror1);
		Thread.sleep(2000);
		WebElement eror2 = driver.findElement(By.xpath("//*[@id=\"proceed-link\"]"));
		click(eror2);
		Thread.sleep(2000);
		
		WebElement username = driver.findElement(By.id("username"));
		typehere(username, "Niranjana");
		Thread.sleep(2000);
		WebElement pasword = driver.findElement(By.id("password"));
		typehere(pasword, "123456");
		Thread.sleep(2000);
		WebElement login = driver.findElement(By.id("login"));
		click(login);
		Thread.sleep(2000);
		
		WebElement place = driver.findElement(By.xpath("//option[@value=\"London\"]"));
		click(place);
		Thread.sleep(2000);
		WebElement hotel = driver.findElement(By.xpath("//option[@value=\"Hotel Sunshine\"]"));
		click(hotel);
		Thread.sleep(2000);
		WebElement hoteltype = driver.findElement(By.xpath("//option[@value=\"Deluxe\"]"));
		click(hoteltype);
		
		WebElement rooms = driver.findElement(By.id("room_nos"));
		typehere(rooms,"2");
		Thread.sleep(2000);
		WebElement fromdate = driver.findElement(By.id("datepick_in"));
		typehere(fromdate, "20/03/2020");
		
		WebElement todate = driver.findElement(By.id("datepick_out"));
		typehere(todate, "25/03/2020");
		
		WebElement adult = driver.findElement(By.id("adult_room"));
		typehere(adult, "4");
		Thread.sleep(2000);		
		WebElement children = driver.findElement(By.id("child_room"));
		typehere(children, "3");
		
		WebElement search = driver.findElement(By.id("Submit"));
		click(search);
		Thread.sleep(2000);
		WebElement slectbttn = driver.findElement(By.id("radiobutton_0"));
		click(slectbttn);
		Thread.sleep(2000);
		WebElement cntnue = driver.findElement(By.id("continue"));
		click(cntnue);		
		
		WebElement frstname = driver.findElement(By.id("first_name"));
		typehere(frstname, "Niranjana");
		Thread.sleep(2000);
		WebElement lname = driver.findElement(By.id("last_name"));
		typehere(lname, "R");
		
		WebElement Biladrs = driver.findElement(By.id("address"));
		typehere(Biladrs, "18/16,46th street,ashok nagar,chennai");
		Thread.sleep(2000);
		WebElement ccnum = driver.findElement(By.id("cc_num"));
		typehere(ccnum, "1111222233334444");
		Thread.sleep(2000);
		WebElement creditcard = driver.findElement(By.xpath("//option[@value=\"VISA\"]"));
		click(creditcard);
		
		WebElement expmonth = driver.findElement(By.id("cc_exp_month"));
		dropDown(expmonth, "value", "3");
		Thread.sleep(2000);
		
		WebElement expyear = driver.findElement(By.id("cc_exp_year"));
		typehere(expyear, "2022");
		
		
		WebElement cvv = driver.findElement(By.id("cc_cvv"));
		typehere(cvv, "1234");
		Thread.sleep(2000);
		
		WebElement bnow = driver.findElement(By.id("book_now"));
		click(bnow);
		Thread.sleep(2000);
		
		WebElement lgout = driver.findElement(By.xpath("/html/body/table[2]/tbody/tr[1]/td[2]/a[4]"));	
		click(lgout);
		
		
	//System.setProperty("webdriver.chrome.driver", "C:\\eclipse-workspace\\SeleniumProject1\\Driver\\chromedriver.exe");
	
	//WebDriver driver = new ChromeDriver();
	//driver.manage().window().maximize();
	
	//driver.get("https://adactin.com/HotelApp/index.php");

	//WebElement username = driver.findElement(By.id("username"));
	//username.sendKeys("Niranjana");
	
	//WebElement pasword = driver.findElement(By.id("password"));
	//pasword.sendKeys("123456");
	
	//WebElement login = driver.findElement(By.id("login"));
	//login.click();
	
	//WebElement place = driver.findElement(By.xpath("//option[@value=\"London\"]"));
	//place.click();
	
	//WebElement hotel = driver.findElement(By.xpath("//option[@value=\"Hotel Sunshine\"]"));
	//hotel.click();
	
	//WebElement hoteltype = driver.findElement(By.xpath("//option[@value=\"Deluxe\"]"));
	//hoteltype.click();
	
	//WebElement rooms = driver.findElement(By.id("room_nos"));
	//rooms.sendKeys("2");
	
	//WebElement fromdate = driver.findElement(By.id("datepick_in"));
	//fromdate.sendKeys("20/03/2020");
	
	//WebElement todate = driver.findElement(By.id("datepick_out"));
	//todate.sendKeys("25/03/2020");
	
	//WebElement adult = driver.findElement(By.id("adult_room"));
	//adult.sendKeys("4");
	
	//WebElement children = driver.findElement(By.id("child_room"));
	//children.sendKeys("3");
	
	//WebElement search = driver.findElement(By.id("Submit"));
	//search.click();
	
	//WebElement slectbttn = driver.findElement(By.id("radiobutton_0"));
	//slectbttn.click();
	
	//WebElement cntnue = driver.findElement(By.id("continue"));
	//cntnue.click();
	
	//WebElement frstname = driver.findElement(By.id("first_name"));
	//frstname.sendKeys("Niranjana");
	
	//WebElement lname = driver.findElement(By.id("last_name"));
	//lname.sendKeys("R");
	
	//WebElement Biladrs = driver.findElement(By.id("address"));
//	Biladrs.sendKeys("18/16,46th street,ashok nagar,chennai");
	
	//WebElement ccnum = driver.findElement(By.id("cc_num"));
	//ccnum.sendKeys("1111222233334444");
	
	//WebElement creditcard = driver.findElement(By.xpath("//option[@value=\"VISA\"]"));
	//creditcard.click();
	
	//WebElement expmonth = driver.findElement(By.id("cc_exp_month"));
	//Select s = new Select(expmonth);
//	s.selectByValue("3");
	
	/*WebElement expyear = driver.findElement(By.id("cc_exp_year"));
	expyear.sendKeys("2022");
	
	WebElement cvv = driver.findElement(By.id("cc_cvv"));
	cvv.sendKeys("1234");
	
	WebElement bnow = driver.findElement(By.id("book_now"));
	bnow.click();
	
	WebElement lgout = driver.findElement(By.xpath("/html/body/table[2]/tbody/tr[1]/td[2]/a[4]"));	
	lgout.click();*/
}
}