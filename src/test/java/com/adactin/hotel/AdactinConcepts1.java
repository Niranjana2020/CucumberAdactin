package com.adactin.hotel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.Select;

import com.adactin.baseclass.BaseClass2;
import com.adactin.pom.Adpage1;
import com.adactin.pom.Adpage2;
import com.adactin.pom.Adpage3;
import com.adactin.pom.Adpage4;

public class AdactinConcepts1 extends BaseClass2{
	
	public static WebDriver driver;
	
	public static void main(String[] args) throws InterruptedException {
		driver=BrowserLaunch("chrome");
		getUrl("https://adactin.com/HotelApp/index.php");
		maximize();
		
		
		Adpage1 ap1 = new Adpage1(driver);
		click(ap1.getEror1());
		click(ap1.getEror2());
		Thread.sleep(2000);
		typehere(ap1.getUsername(), "Niranjana");
		typehere(ap1.getPassword(), "123456");
		click(ap1.getLogin());
			
		Adpage2 ap2 = new Adpage2(driver);
		click(ap2.getPlace());
		click(ap2.getHotel());
		click(ap2.getHoteltype());
		typehere(ap2.getRooms(), "2");
		typehere(ap2.getFromdate(), "20/03/2020");
		typehere(ap2.getTodate(), "25/03/2020");
		typehere(ap2.getAdult(), "4");
		typehere(ap2.getChildren(), "3");
		click(ap2.getSearch());
		
		Adpage3 ap3= new Adpage3(driver);
		click(ap3.getSlectbttn());
		click(ap3.getCntnue());
		
		Adpage4 ap4 = new Adpage4(driver);
		typehere(ap4.getFrstname(), "Niranjana");
		typehere(ap4.getLname(), "R");
		typehere(ap4.getBiladrs(), "18/16,46th street,ashok nagar,chennai");
		typehere(ap4.getCcnum(), "1111222233334444");
		click(ap4.getCreditcard());
		typehere(ap4.getExpmonth(), "3");
		//dropDown(ap4.getExpmonth(), "value", "3");
		typehere(ap4.getExpyear(), "2022");
		typehere(ap4.getCvv(), "1234");
		click(ap4.getBnow());
		click(ap4.getLgout());
	
		
		
		/*/WebElement eror1 = driver.findElement(By.xpath("//*[@id=\"details-button\"]"));
		//click(eror1);
		Thread.sleep(2000);
		//WebElement eror2 = driver.findElement(By.xpath("//*[@id=\"proceed-link\"]"));
		//click(eror2);
		Thread.sleep(2000);	
		//WebElement username = driver.findElement(By.id("username"));
		//typehere(username, "Niranjana");
		//Thread.sleep(2000);
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
		click(lgout);*/
		
		
	}
}
		
	