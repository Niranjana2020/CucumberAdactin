package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Adpage1 {

	public static WebDriver driver;
	

	@FindBy(xpath = "//*[@id=\"details-button\"]")
	private WebElement eror1;

	@FindBy(xpath = "//*[@id=\"proceed-link\"]")
	private WebElement eror2;

	@FindBy(id = "username")
	private WebElement username;

	@FindBy(id = "password")
	private WebElement password;

	@FindBy(id = "login")
	private WebElement login;
	
	public Adpage1(WebDriver driver1) {
		this.driver=driver1;
		PageFactory.initElements(driver, this);
		
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getEror1() {
		return eror1;
	}

	public WebElement getEror2() {
		return eror2;
	}

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLogin() {
		return login;
	}

}
