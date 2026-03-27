    import {Page,expect} from '@playwright/test'

    export class LoginPOM{
        readonly page:Page;
        readonly sortByDropdown;
        readonly lowToHighOption;
        readonly highToLowOption;
        readonly show;
        //FOr multi-select
        readonly multiSelectDropdown;
        readonly multiSelectOptions;
        readonly displayLocator;
        //from
        readonly from;
      
        //dest
        readonly place;
        readonly dest;
        readonly destplace;

        constructor(page:Page){
            this.page=page;
            this.sortByDropdown= page.locator("//div[@class='srttile'][normalize-space()='Sort By']");
            this.lowToHighOption=page.locator("//label[normalize-space()='Low to High']");
            this.highToLowOption=page.locator("//label[normalize-space()='High to Low']");
            this.show=page.locator("//div[@class='fltslitm ng-scope']");
            //multi-selection
            this.multiSelectDropdown=page.locator("//div[@class='srttile'][normalize-space()='Package Type']");
            this.multiSelectOptions=page.locator("//label[normalize-space()='Customizable Packages' or normalize-space()='Group Departure'  or normalize-space()='Book Now' ]");
            this.displayLocator = page.locator("//span[@id='selected-options-display']");
            //From
            this.from=page.locator("//input[@ng-model='exCity.CityName']")
            this.place=page.locator("//span[@ng-bind='ct.CityName' and text()='bangalore']  ");//Static
            this.dest=page.locator("//input[@id='frmcity']");
            this.destplace=page.locator("//input[@placeholder='Search for a City or Experience']");
            //this.clickplace=page.locator("//div[@class='mflex acenter']//span[text()='Chennai']");

        }
        

    clickPlace = (cityName: string) =>
        this.page.locator(`//div[@class='mflex acenter']//span[contains(normalize-space(), '${cityName}')]`);

    
        async performAction(order: 'lowToHigh' | 'highToLow' = 'lowToHigh') {
            //await this.sortByDropdown.click();

            if (order === 'lowToHigh') {
                await this.sortByDropdown.click(); 
                await this.lowToHighOption.click();
            } else if (order === 'highToLow') {
                await this.sortByDropdown.click(); 
                await this.highToLowOption.click();
            }

        //   await this.page.waitForTimeout(3000);
            await expect(this.show.first()).toBeVisible();
        }
        
    async fromfunc(fromCity: string, toCity: string){
        await this.from.click();
        await this.place.click();
        
        
        await this.dest.click();
        await this.destplace.fill(toCity);  
      const toLocator =  this.clickPlace(toCity);
      await toLocator.waitFor({ state: 'visible', timeout: 15000 });
       await toLocator.first().click();

    }




    }