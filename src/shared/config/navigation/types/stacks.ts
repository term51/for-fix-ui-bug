
export enum ProfileStackEnum {
  Profile = 'Profile',
  // PersonalData = 'PersonalData',
  // OnlinePortfolio = 'OnlinePortfolio',
  // TypesOfWorks = 'TypesOfWorks',
  // PricingPoliciesList = 'PricingPoliciesList',
  // PricingPolicies = 'PricingPolicies',
  // UsedMaterialsList = 'UsedMaterialsList',
  // UsedMaterials = 'UsedMaterials',
  // ListOfCalculators = 'ListOfCalculators',
  // CalculatorEditor = 'CalculatorEditor',
}

export type ProfileStackListType = {
  [ProfileStackEnum.Profile]: undefined;
  // [ProfileStackEnum.PersonalData]: undefined;
  // [ProfileStackEnum.OnlinePortfolio]: undefined;
  // [ProfileStackEnum.TypesOfWorks]: undefined;
  // [ProfileStackEnum.PricingPoliciesList]: undefined;
  // [ProfileStackEnum.PricingPolicies]: { id?: string };
  // [ProfileStackEnum.UsedMaterialsList]: undefined;
  // [ProfileStackEnum.UsedMaterials]: { id?: string };
  // [ProfileStackEnum.ListOfCalculators]: undefined;
  // [ProfileStackEnum.CalculatorEditor]: { materialId: string };
};

export enum WorkStackEnum {
  Work = 'Work',
  // CreateObject = 'CreateObject',
  // InWork = 'InWork',
  // ObjectInformation = 'ObjectInformation',
  // ObjectAreas = 'ObjectAreas',
  // SelectTypesOfWorkAtArea = 'SelectTypesOfWorkAtArea',
  // SelectPriceAndMaterialPoliciesAtArea = 'SelectPriceAndMaterialPoliciesAtArea',
  // MeasurementInputAtArea = 'MeasurementInputAtArea',
  // Documents = 'Documents',
  // DeliveryRequestListOfObject = 'DeliveryRequestListOfObject',
  // RequestDelivery = 'RequestDelivery',
  // ViewDeliveryRequest = 'ViewDeliveryRequest',
  // ObjectsHistory = 'ObjectsHistory',
  // DeliveryRequestList = 'DeliveryRequestList',
  // Users = 'Users',
  // UserInfo = 'UserInfo',
  // PersonalDataOfUser = 'PersonalDataOfUser',
  // PricingPoliciesListOfUser = 'PricingPoliciesListOfUser',
  // PricingPoliciesOfUser = 'PricingPoliciesOfUser',
  // GeneralStatisticsOfUser = 'GeneralStatisticsOfUser',
  // ObjectStatisticsListOfUser = 'ObjectStatisticsListOfUser',
  // ObjectStatisticsOfUser = 'ObjectStatisticsOfUser',
  // OnlinePortfolioOfUser = 'OnlinePortfolioOfUser',
  // BonusesAndPointsOfUser = 'BonusesAndPointsOfUser',
  // DeliveryRequestListOfUser = 'DeliveryRequestListOfUser',
  // GeneralPriceRange = 'GeneralPriceRange',
}

export type WorkStackListType = {
  [WorkStackEnum.Work]: undefined;
  // [WorkStackEnum.CreateObject]: undefined;
  // [WorkStackEnum.InWork]: undefined;
  // [WorkStackEnum.ObjectInformation]: { objectId: string };
  // [WorkStackEnum.ObjectAreas]: { objectId: string };
  // [WorkStackEnum.SelectTypesOfWorkAtArea]: { objectId: string; areaId: string };
  // [WorkStackEnum.SelectPriceAndMaterialPoliciesAtArea]: {
  //   objectId: string;
  //   areaId: string;
  // };
  // [WorkStackEnum.MeasurementInputAtArea]: { objectId: string; areaId: string };
  // [WorkStackEnum.Documents]: { objectId: string };
  // [WorkStackEnum.DeliveryRequestListOfObject]: { objectId: string };
  // [WorkStackEnum.RequestDelivery]: { objectId: string };
  // [WorkStackEnum.ViewDeliveryRequest]: {
  //   objectId: string;
  //   deliveryRequestId: string;
  // };
  // [WorkStackEnum.ObjectsHistory]: undefined;
  // [WorkStackEnum.DeliveryRequestList]: undefined;
  // [WorkStackEnum.Users]: undefined;
  // [WorkStackEnum.UserInfo]: { userId: string };
  // [WorkStackEnum.PersonalDataOfUser]: undefined;
  // [WorkStackEnum.PricingPoliciesListOfUser]: undefined;
  // [WorkStackEnum.PricingPoliciesOfUser]: {
  //   userId: string;
  //   pricingPolicyId: string;
  // };
  // [WorkStackEnum.GeneralStatisticsOfUser]: undefined;
  // [WorkStackEnum.ObjectStatisticsListOfUser]: undefined;
  // [WorkStackEnum.ObjectStatisticsOfUser]: {
  //   userId: string;
  //   objectId: string;
  // };
  // [WorkStackEnum.OnlinePortfolioOfUser]: undefined;
  // [WorkStackEnum.BonusesAndPointsOfUser]: undefined;
  // [WorkStackEnum.DeliveryRequestListOfUser]: { userId: string };
  // [WorkStackEnum.GeneralPriceRange]: undefined;
};

export enum PostStackEnum {
  PostsList = 'PostsList',
  // Post = 'Post',
}

export type PostStackListType = {
  [PostStackEnum.PostsList]: undefined;
  // [PostStackEnum.Post]: { content: string };
};

export enum StatisticStackEnum {
  Statistics = 'Statistics',
  // GeneralStatistics = 'GeneralStatistics',
  // ObjectStatisticsList = 'ObjectStatisticsList',
  // ObjectStatistics = 'ObjectStatistics',
  // BonusesAndPoints = 'BonusesAndPoints',
}

export type StatisticStackListType = {
  [StatisticStackEnum.Statistics]: undefined;
  // [StatisticStackEnum.GeneralStatistics]: undefined;
  // [StatisticStackEnum.ObjectStatisticsList]: undefined;
  // [StatisticStackEnum.ObjectStatistics]: { objectId: string };
  // [StatisticStackEnum.BonusesAndPoints]: undefined;
};
