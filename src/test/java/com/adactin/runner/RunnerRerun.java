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
@ExtendedCucumberOptions(retryCount=4,
							jsonReport="REPORT/jsonReport.json")
@CucumberOptions(features="@Report/FailedScenario.txt",
					glue="com\\adactin\\stepdefinition",
					plugin= {"com.cucumber.listener.ExtentCucumberFormatter:Report/rerunReport.html",
							"json:target/cucumber.json",
							"html:normal.html"
							},
					monochrome=true,
					strict=true,
					dryRun=false)
public class RunnerRerun {
	
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
