import CategoryMajor from "./CategoryMajor";

export default interface CategoryMinor {
  id: number;
  categoryMajor: CategoryMajor;
  name: string;
  pathname: string;
}