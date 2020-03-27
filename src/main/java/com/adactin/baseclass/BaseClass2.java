package com.adactin.baseclass;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass2 {
	public static WebDriver driver;
	
	public static WebDriver BrowserLaunch(String Browsername ) {
		try {
			if (Browsername.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver", 
						"C:\\eclipse-workspace\\SeleniumConcepts\\Drivers\\chromedriver.exe");
				driver=new ChromeDriver();
			}else if(Browsername.equalsIgnoreCase("ie")) {
				
				System.setProperty("webdriver.ie.driver", "C:\\Users\\DELL\\eclipse-workspace\\SeleniumConcepts\\Drivers\\IEDriverServer.exe");
			    driver= new InternetExplorerDriver();
			}else if (Browsername.equalsIgnoreCase("firefox")) {
				
				System.setProperty("webdriver.gecko.driver", "C:\\Users\\DELL\\eclipse-workspace\\SeleniumConcepts\\Drivers\\geckoDriver.exe");
				
			    driver= new FirefoxDriver();
			}else {
				System.out.println("Invalid browsename");
			}  	
		
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
		return driver;
	}
	public static void maximize() {
		driver.manage().window().maximize();
	}
	
	
	public static void getUrl(String url) {
		try {
			driver.get(url);
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}	
			
	}
	public void getCurrentUrl() {
		driver.getCurrentUrl();
		
	}
	public static void getTitle(String title) {
		try {
			driver.getTitle();
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}

	}	

	public static void navigateto(String Url) {
		try {
			driver.navigate().to(Url);
						
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		
	}
	public static void navigateback() {
		try {
			driver.navigate().back();
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		
	}
	public static void navigateforward() {
		try {
			driver.navigate().forward();
			
		} catch (Exception e) {	
			e.printStackTrace();
		}
	}
	public static void navigaterefresh() {
		try {
			driver.navigate().refresh();
		} catch (Exception e) {
			e.printStackTrace();
			
		}

	}

	public static void close() {
		driver.close();
	}
	public static void quit() {
		 driver.quit();

	}
	public static void Actions(WebElement element) {
		Actions ac = new Actions(driver);
		ac.moveToElement(element).build().perform();
	
	}
	
		
	public static void click(WebElement element) {
		try {
			element.click();
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
			
	}
	public static void getAttribute(WebElement element, String value) {
		try {
			String attri = element.getAttribute(value);
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		
	}
		public void getText(WebElement element ) {
		try {
			System.out.println(element.getText());
			
		} catch (Exception e) {
			e.printStackTrace();
	    }
		
	}
	public static void isEnabled(WebElement element) {
		try {
			element.isEnabled();
		} catch (Exception e) {	
			e.printStackTrace();
		}
	}
	public static void isDisplayed(WebElement element) {
		try {
			element.isDisplayed();
		} catch (Exception e) {	
			e.printStackTrace();
		}
	}
	public static void isSelected(WebElement element) {
		try {
			element.isSelected();
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
	}
	public static void isMultiple(WebElement element) {
		try {
			isMultiple(element);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void typehere(WebElement element, String value) {
		try {
			element.sendKeys(value);
		} catch (Exception e) {
			e.printStackTrace();
			
	    }	
	}
	public static void dropDown(WebElement element,String option,String input) {
		Select s = new Select(element);
		
		if (option.equals("Index")) {
			int parseInt = Integer.parseInt(input);
			s.selectByIndex(parseInt);
		}else if (option.equals("value")) {
			s.selectByValue(input);	
		}else if (option.equalsIgnoreCase("text")) {
			s.selectByVisibleText(input);
			
		}
	}
	public static void sAlert() {
		try {
			Alert salrt = driver.switchTo().alert();
			salrt.accept();
			
		} catch (Exception e) {

			e.printStackTrace();
		}

	}
	public static void cAlert() {
		try {
			Alert cnfrmalert = driver.switchTo().alert();
			cnfrmalert.dismiss();

		} catch (Exception e) {
			e.printStackTrace();
		}
			
		}

	public static void pAlert() {
		try {
			Alert prmptalert = driver.switchTo().alert();
			prmptalert.sendKeys("hai");
			prmptalert.accept();
			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	public static void dragDrop(WebElement drag, WebElement drop) {
		try {
			Actions ac = new Actions(driver);
			ac.dragAndDrop(drag, drop).build().perform();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
			
		}
		
	
	public static void robot() {
		try {
			Robot r = new Robot();
			r.keyPress(KeyEvent.VK_DOWN);
			r.keyRelease(KeyEvent.VK_DOWN);
			
			r.keyPress(KeyEvent.VK_ENTER);
			r.keyRelease(KeyEvent.VK_ENTER);
		} catch (Exception e) {
			e.printStackTrace();
		}
		}

	
	public static void Screenshot(String string) {
		try {
			TakesScreenshot ts =(TakesScreenshot) driver;
			File src1file = ts.getScreenshotAs(OutputType.FILE);
			File des1file = new File("C:\\eclipse-workspace\\SeleniumConcepts\\Screenshot\\adc.png");
			FileUtils.copyFile(src1file, des1file);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		}

	
	public static void UpandDown(Object Element) {
		try {
			JavascriptExecutor js=(JavascriptExecutor)driver;
			js.executeScript("arguments[0].scrollIntoView();", Element);
		} catch (Exception e) {
			e.printStackTrace();
		}
		}
	
	public static void FrameMethod( WebElement element, String option, String value) {
		try {
		if (option.equals("Index")) {
			int x = Integer.parseInt(value);
			driver.switchTo().frame(x);

		}else if (option.equals("value")) {
			driver.switchTo().frame(value);
		
		}else {
			driver.switchTo().frame(element);

		}
		} catch (Exception e) {
		    e.printStackTrace();
		}	
		}
	public static void windhandle() {
		try {
			driver.getWindowHandle();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		}
	public static void deflt() {
		try {
			driver.switchTo().defaultContent();
		} catch (Exception e) {
			
		}
		

	}

	
	public static void implicitwait() {
		try {
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			
		} catch (Exception e) {
			e.printStackTrace();
		}	

	}
	public static void explicitwait(WebElement element) {
		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.visibilityOf(element));
		} catch (Exception e) {
			e.printStackTrace();
		}
			
	}
	public static void fluentwait(int seconds,WebElement element,Wait<WebDriver> wait1) {
		try {
			wait1=new FluentWait<WebDriver>(driver).withTimeout(seconds, TimeUnit.SECONDS)
					.pollingEvery(seconds,TimeUnit.SECONDS).ignoring(Exception.class);
			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
public static void multipleCheckBox(List<WebElement> elements, String attributename, String attributevalue) {
	
	for (WebElement a : elements) {
		if (a.getAttribute(attributename).equals(attributevalue)
				|| a.getAttribute(attributename).equals(attributevalue)) {
			a.click();
		}
	}
	System.out.println("out of constant");

}


}
	
	
	
		
		
	
	
	
	
	

