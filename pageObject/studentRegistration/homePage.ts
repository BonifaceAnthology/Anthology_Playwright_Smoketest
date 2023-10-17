export default class homePage {
   page: any;
   private hamburger: any;
   private configuration: any;
   private configurations: any;
   private processes: any;
   constructor(page: any) {
      this.page = page;
      this.hamburger = page.locator("[style='text-decoration: none']");
      this.configuration = page.locator('#temporar-link-to-lists');
      this.configurations = page.locator('[title="Configuration"]')
      this.processes = page.locator('[title="Processes"]');
   }
   public async clickHamburger() {
      await this.hamburger.click();
   }
   public async clickConfiguration() {
      await this.configuration.click();
   }
   public async goToConfiguration() {
      await this.hamburger.click();
      await this.configurations.click();
   }
   public async goToProcesses() {
      await this.hamburger.click();
      await this.processes.click();
   }
}