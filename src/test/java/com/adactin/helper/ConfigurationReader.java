package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	
	public static Properties p;
	
	public ConfigurationReader() throws IOException {
		File f=new File(
				"C:\\Users\\welcome\\eclipse-workspace\\AdactinCucumber\\src\\test\\java\\com\\adactin\\properties\\Configuration.properties");
		FileInputStream fis= new FileInputStream(f);
		p=new Properties();
		p.load(fis);
	}
	
	public String getBrowserlaunch() {
		String browserlaunch = p.getProperty("browserlaunch");
		return browserlaunch;
	}
	public String getUrl() {
		String url = p.getProperty("url");
		return url;
	}
	/*public String getUsername() {
		String username = p.getProperty("Username");
		return username;
	}
	public String getPassword() {
		String password = p.getProperty("Password");
		return password;
	}
	public String getfirstname() {
		String firstname = p.getProperty("firstname");
		return firstname;
	}
	public String getlastname() {
		String lastname = p.getProperty("lastname");
		return lastname;
	}
	public String getaddress() {
		String address = p.getProperty("address");
		return address;
	}
	public String getccnum() {
		String ccnum = p.getProperty("ccnum");
		return ccnum;
	}
	public String getcvv() {
		String cvv = p.getProperty("cvv");
		return cvv;

	}*/
	
			

	

}
