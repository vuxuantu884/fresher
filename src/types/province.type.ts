export interface IProvince {
  code: number;
  codename: string;
  districts: Array<IDistricts>;
  division_type: string;
  name: string;
  phone_code: string;
}

export interface IDistricts {
  code: number;
  codename: string;
  division_type: string;
  name: string;
  short_codename: string;
  wards: Array<IWards>;
}

export interface IWards {
  code: number;
  codename: string;
  division_type: string;
  name: string;
  short_codename: string;
}
