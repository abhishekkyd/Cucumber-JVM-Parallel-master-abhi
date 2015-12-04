$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AutoCorrectSearchTerms.feature");
formatter.feature({
  "id": "automatically-correct-mistyped-search-terms",
  "tags": [
    {
      "name": "@autocorrect",
      "line": 1
    }
  ],
  "description": "",
  "name": "Automatically correct mistyped search terms",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "automatically-correct-mistyped-search-terms;enter-search-term-and-view-related-images",
  "description": "",
  "name": "Enter search term and view related images",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the website \u0027http://www.google.co.uk\u0027",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I submit the search term \u0027opencredo\u0027",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "accept the first search result",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be on the page \u0027http://www.opencredo.com/\u0027",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.co.uk",
      "offset": 21
    }
  ],
  "location": "SearchStepDefs.I_am_on_the_website(String)"
});
formatter.result({
  "duration": 6938141909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opencredo",
      "offset": 26
    }
  ],
  "location": "SearchStepDefs.I_submit_the_search_term(String)"
});
formatter.result({
  "duration": 5043194391,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d41.0.2272.101)\n  (Driver info: chromedriver\u003d2.13.307647 (5a7d0541ebc58e69994a6fb2ed930f45261f3c29),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.02 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.31.0\u0027, revision: \u00271bd294d185a80fa4206dfeab80ba773c04ac33c0\u0027, time: \u00272013-02-27 13:51:26\u0027\nSystem info: os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.7.0_71\u0027\nSession ID: 52f1b4254a146d3ad5026572d50c65ac\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\ABHISH~1\\AppData\\Local\\Temp\\scoped_dir5272_16546}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d41.0.2272.101, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:180)\r\n\tat cucumber.jvm.parallel.pageobjects.SearchPageObject.enterSearchTerm(SearchPageObject.java:21)\r\n\tat cucumber.jvm.parallel.cucumber.stepdefs.SearchStepDefs.I_submit_the_search_term(SearchStepDefs.java:32)\r\n\tat ✽.When I submit the search term \u0027opencredo\u0027(AutoCorrectSearchTerms.feature:6)\r\n"
});
formatter.match({
  "location": "SearchStepDefs.accept_the_first_search_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.opencredo.com/",
      "offset": 25
    }
  ],
  "location": "SearchStepDefs.I_should_be_on_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.google.co.uk/?gws_rd\u003dssl");
formatter.embedding("image/png", "d24d87cb-5e5b-4208-ae99-d8dc92138565.png");
});