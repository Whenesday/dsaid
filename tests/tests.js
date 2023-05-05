var expect = require('chai').expect;
var assert = require('chai').assert;
const { clickElement, inputTxt } = require('./helpers');
//const driver = require('./driver');

var loginMSEmail = ""; // Insert your microsoft account
var loginMSPw = ""; // insert your password

var url = "https://www.videoindexer.ai";
const {Builder, By, until} = require('selenium-webdriver');

var msLogin = "//span[normalize-space()='Personal Microsoft account']";
var msLoginEmailField = "//input[@id='i0116']";
var msLoginPwField = "//input[@id='i0118']";
var msLoginEmailFieldNext = "//input[@id='idSIButton9']";
var msLoginPwNext = "//input[@id='idSIButton9']";
var msLoginSuccessDontShow = "//input[@id='KmsiCheckboxField']";
var msLoginSuccessNo = "//input[@id='idBtn_Back']";
var msLoginSuccessYes = "//input[@id='idSIButton9']";

var uploadMainBtn = "//span[normalize-space()='Upload']";
var uploadBrowseBtn = "//span[normalize-space()='Browse for a file']";
var uploadURLMain = "//span[normalize-space()='Enter a file URL']";
var uploadFileURL = "//input[@id='urlInputId']"; 
var uploadFileName = "//input[@class='name input-form ng-pristine ng-valid ng-touched']";
var uploadLang = "//span[@title='English']";
var uploadPrivacy = "//span[@title='Private']";
var uploadCheck = "//span[@role='none']";
var uploadConfirm = "//button[@id='uploadButtonAction']"
var uploadBackgroundBtn = "//span[normalize-space()='Run in background']"

var fileURL2 = "https://filebin.net/clhknwp5tdswxgou/mixkit-girl-chooses-products-from-the-supermarket-refrigerators-49349-medium.mp4";
var fileURL = "https://filebin.net/clhknwp5tdswxgou/mixkit-a-boy-and-a-girl-dancing-together-at-a-party-46885-medium.mp4"


var libraryTab = "//button[@id='tabLibrary']";
var samplesTab = "//button[@id='tabSamples']";
var mainMenuBtn = "//div[@title='Azure Video Indexer']";
var mainSortBy = "//i[@role='presentation']";
var mainSortByList = "//div[@id='list-view']";
var videopos1 = "//div[2]/div/span/span";
var videopos2 = "//div[2]/vi-gallery-grid-item/a/div[2]/div/span/span"
var videoPlayButton = "//div[7]/div/button";

var filterGallery = "//app-filter-button/button/span";
var filterInsightValue = "//section/div/div/div/input";
var inputFilterPeople = "Larry Larsen";
var filterSearchBtn = "//span[normalize-space()='Search']";
var filteredVideoPos = "//span[@class='col col-name ng-star-inserted']";

describe('Doing the VA QAE Challenge...', function() {
    let driver;
  
    before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
    });
  
    after(async function() {
      await driver.quit();
    });
  
    it('should let me log in', async function() {
      await driver.get(url);

      await clickElement(driver, msLogin, "001 - Could not click to login via Microsoft",500);
      await inputTxt(driver,msLoginEmailField,loginMSEmail,"002 - Failure to find Email Login field to input",500);
      await clickElement(driver,msLoginEmailFieldNext,"003 - Failure to find the Next button after inputting email login",500);
      await inputTxt(driver,msLoginPwField,loginMSPw,"004 - Failure to find password field to input",500);
      await clickElement(driver,msLoginPwNext,"005 - Failure to find the Next button after inputting pw login",500);
      await clickElement(driver,msLoginSuccessNo,"006 - Fail to find the No Button to Continue signed in",5000);
    });

    it('should let me upload a file', async function(){
      await clickElement(driver,mainMenuBtn,"bu00 - Failure to go back to main menu to start test scenario",3000);
      await clickElement(driver,uploadMainBtn,"bu01 - Failure to find Upload button to click",500);
      await clickElement(driver,uploadURLMain,"bu02 - Failure to find EnterFileURL",500);
      await inputTxt(driver,uploadFileURL,fileURL,"bu03 - Failure to input file url for upload",500);
      await clickElement(driver,uploadCheck,"bu04 - Failure to check consent box",1000);
      await clickElement(driver,uploadConfirm,"bu05 - Failure to press confirm Upload",3000);
      await clickElement(driver,uploadBackgroundBtn,"bu06 - Fail to click on RunInBackground",15000);
      await clickElement(driver,mainMenuBtn,"bu99 - Failure to go back to main menu to end test scenario",3000);
    });

    it('should let view a video and its properties', async function(){
      await clickElement(driver,mainMenuBtn,"vi00 - Failure to go back to main menu to start test scenario",3000);
      await clickElement(driver,videopos2,"vi01 - Failure to find video to click",15000);
      await clickElement(driver,mainMenuBtn,"vi99 - Failure to go back to main menu to end test scenario",3000);
    });

    it('should allow searching for video', async function(){
      await clickElement(driver,mainMenuBtn,"se00 - Failure to go back to main menu to start test scenario",3000);
      await clickElement(driver,filterGallery,"se01 - Failure to find filter button to click",3000);
      await inputTxt(driver,filterInsightValue,inputFilterPeople,"se02 - Failure to input search criteria",1000);
      await clickElement(driver,filterSearchBtn,"se03 - Failure to click on search button",500);
      await clickElement(driver,samplesTab,"se04 - Failure to click on the Samples Tab", 5000);
      await clickElement(driver,filteredVideoPos,"se05 - Failure to click on filtered video",5000);
      await clickElement(driver,mainMenuBtn,"se99 - Failure to go back to main menu to end test scenario",3000);
    });
        
    
});

// Use https://filebin.net/ to upload Videos!
