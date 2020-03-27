package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Adpage2 {
	public static WebDriver driver;
		
	@FindBy(xpath="//option[@value=\"London\"]")
	private WebElement place; 
	
	@FindBy(xpath="//option[@value=\"Hotel Sunshine\"]")
	private WebElement hotel;
	
	@FindBy(xpath="//option[@value=\\\"Deluxe\\\"]")
	private WebElement hoteltype;
	
	@FindBy(id="room_nos")
	private WebElement rooms;
	
	@FindBy(id="datepick_in")
	private WebElement fromdate;
	
	@FindBy(id="datepick_out")
	private WebElement todate;
	
	@FindBy(id="adult_room")
	private WebElement adult;
	
	@FindBy(id="child_room")
	private WebElement children;
	
	@FindBy(id="Submit")
	private WebElement search;
	
	public Adpage2(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	}
	
	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getPlace() {
		return place;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getHoteltype() {
		return hoteltype;
	}

	public WebElement getRooms() {
		return rooms;
	}

	public WebElement getFromdate() {
		return fromdate;
	}

	public WebElement getTodate() {
		return todate;
	}

	public WebElement getAdult() {
		return adult;
	}

	public WebElement getChildren() {
		return children;
	}

	public WebElement getSearch() {
		return search;
	}		
	
}
