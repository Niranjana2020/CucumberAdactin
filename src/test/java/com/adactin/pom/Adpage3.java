package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Adpage3 {
	public static WebDriver driver;
	
	@FindBy(xpath="//*[@id=\"radiobutton_1\"]")
	private WebElement slectbttn;
	
	@FindBy(id="continue")
	private WebElement cntnue;

	public Adpage3(WebDriver driver3) {
		this.driver=driver3;
		PageFactory.initElements(driver, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getSlectbttn() {
		return slectbttn;
	}

	public WebElement getCntnue() {
		return cntnue;
	}
	
	
}
