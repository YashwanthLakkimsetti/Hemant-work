export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
      Object.assign(this, init);
    }
  
    public year: string;
    public Bangalore: number;
  }
  export class CountryRenewableElectricity extends Array<
    CountryRenewableElectricityItem
  > {
    public constructor() {
      super();
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 34
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 43
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 66
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 69
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 58
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 40
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 78
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 13
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 78
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 40
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 40
        })
      );
      this.push(
        new CountryRenewableElectricityItem({
          year: ``,
          Bangalore: 80
        })
      );
    }
  }
  