package com.adactin.stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@RegressionTest")
	public void beforeScenerio() {
		System.out.println("BEFORE:=====RegressionTest=====");

	}
	
	@After("@RegressionTest")
	public void afterScenario() {
		System.out.println("AFTER:=====RegressionTest=====");

	}

}
