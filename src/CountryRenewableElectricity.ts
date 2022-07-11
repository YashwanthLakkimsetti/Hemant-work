export class CountryRenewableElectricityItem {
  public constructor(init: Partial<CountryRenewableElectricityItem>) {
      Object.assign(this, init);
  }
  
  public year: number;
  public europe: number;
  

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
  public constructor() {
      super();
      this.push(new CountryRenewableElectricityItem(
      {
          year: 39.8,
          europe: 0,
         
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 40,
          europe: 12,
        
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 40.2,
          europe: 13,
         
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 40.4,
          europe: 11.30,
         
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 40.6,
          europe: 16,
          
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 40.8,
          europe: 14.30,
          
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 50,
          europe: 15,
          
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 50.2,
          europe: 16,
         
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 50.4,
          europe: 18,
          
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 50.6,
          europe: 17.30,
         
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 50.8,
          europe: 16.3,
          
      }));
      this.push(new CountryRenewableElectricityItem(
      {
          year: 60,
          europe: 12.30,
          
      }));
  }
}
