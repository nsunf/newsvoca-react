import CategoryMajor from "../model/CategoryMajor";
import CategoryMinor from "../model/CategoryMinor";
import CategoryPresenter from "../presenter/CategoryPresenter";

const majorCatList: CategoryMajor[] = [
  { id: 1, name: "World" },
  { id: 2, name: "Tech" },
  { id: 3, name: "Business" },
  { id: 4, name: "Sports" },
  { id: 5, name: "Health" }
];

const minorCatList: CategoryMinor[] = [
  { id: 1, categoryMajor: majorCatList[0], name: "Africa" },
  { id: 2, categoryMajor: majorCatList[0], name: "Americas" },
  { id: 3, categoryMajor: majorCatList[0], name: "Asia" },
  { id: 4, categoryMajor: majorCatList[0], name: "Australia" },
  { id: 5, categoryMajor: majorCatList[0], name: "China" },
  { id: 6, categoryMajor: majorCatList[0], name: "Europe" },
  { id: 7, categoryMajor: majorCatList[0], name: "India" },
  { id: 8, categoryMajor: majorCatList[0], name: "Middle Ease" },
  { id: 9, categoryMajor: majorCatList[0], name: "United Kingdom" }
];

export default function CategoryContainer() {
  return (
    <CategoryPresenter
      majorCategoryList={majorCatList}
      minorCategoryList={minorCatList}
    />
  );
}