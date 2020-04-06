package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass2;
import com.adactin.helper.FileReaderManager;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\java\\com\\adactin\\feature\\Adactin.feature",
                     glue="com\\adactin\\stepdefinition",
                     plugin = {"pretty","html:Report",
                    		 "com.cucumber.listener.ExtentCucumberFormatter:Report/extentReport.html",
                    		 "rerun:Report/FailedScenario.txt"},
                     		
                     monochrome = true,
                     dryRun = false,
                     strict = true
                    //tags= "@RegressionTest"
		)
public class Runner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void setup() throws IOException {
		String browserlaunch = FileReaderManager.getInstance().getCrInstance().getBrowserlaunch();
		driver=BaseClass2.BrowserLaunch(browserlaunch);		
	}
	/*@AfterClass
	public static void tearDown() {
		driver.close();

	}*/

}

