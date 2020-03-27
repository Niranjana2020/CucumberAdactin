package com.adactin.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Adpage4 {
	
	public static WebDriver driver;
	@FindBy(id="first_name")
	private WebElement frstname;
	
	@FindBy(id="last_name")
	private WebElement lname;
	
	@FindBy(id="address")
	private WebElement Biladrs;
	
	@FindBy(id="cc_num")
	private WebElement ccnum;
	
	@FindBy(xpath="//option[@value=\"VISA\"]")
	private WebElement creditcard;
	@FindBy(id="cc_exp_month")
	private WebElement expmonth;
	
	@FindBy(id="cc_exp_year")
	private WebElement expyear;
	
	@FindBy(id="cc_cvv")
	private WebElement cvv;
	
	@FindBy(id="book_now")
	private WebElement bnow;
	
	@FindBy(xpath="/html/body/table[2]/tbody/tr[1]/td[2]/a[4]")
	private WebElement lgout;
	
	public Adpage4(WebDriver driver4) {
		this.driver=driver4;
		PageFactory.initElements(driver, this);
		
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getFrstname() {
		return frstname;
	}

	public WebElement getLname() {
		return lname;
	}

	public WebElement getBiladrs() {
		return Biladrs;
	}

	public WebElement getCcnum() {
		return ccnum;
	}

	public WebElement getCreditcard() {
		return creditcard;
	}

	public WebElement getExpmonth() {
		return expmonth;
	}

	public WebElement getExpyear() {
		return expyear;
	}

	public WebElement getCvv() {
		return cvv;
	}

	public WebElement getBnow() {
		return bnow;
	}

	public WebElement getLgout() {
		return lgout;
	}

	
	

}
