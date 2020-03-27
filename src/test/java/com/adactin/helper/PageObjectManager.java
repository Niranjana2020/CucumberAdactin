package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.Adpage1;
import com.adactin.pom.Adpage2;
import com.adactin.pom.Adpage3;
import com.adactin.pom.Adpage4;

public class PageObjectManager {
	
	public static WebDriver driver;
	
	public static Adpage1 adp1;
	public static Adpage2 adp2;
	public static Adpage3 adp3;
	public static Adpage4 adp4;
	
	public PageObjectManager(WebDriver ldriver) {		
		this.driver=ldriver;
	}
	public static Adpage1 getAdp1() {
	    adp1 = new Adpage1(driver);
		return adp1;
	}
	public static Adpage2 getAdp2() {
		adp2=new Adpage2(driver);
		return adp2;
	}
	public static Adpage3 getAdp3() {
		adp3=new Adpage3(driver);
		return adp3;
	}
	public static Adpage4 getAdp4() {
		adp4=new Adpage4(driver);
		return adp4;
	}
	

}
