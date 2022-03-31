import { enumSizeBanner } from "constant";

export interface IBannerProduct {
  image?: string;
  images?: Array<string>;
  title: string;
}

export interface IBannerSize {
  size: enumSizeBanner;
  status?: boolean;
  choose?: boolean;
}
