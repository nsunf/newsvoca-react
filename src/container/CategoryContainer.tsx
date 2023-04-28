import { useParams } from "react-router-dom";
import CategoryMajor from "../model/CategoryMajor";
import CategoryMinor from "../model/CategoryMinor";
import CategoryPresenter from "../presenter/CategoryPresenter";
import { useEffect, useState } from "react";

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

interface State {
  majorCatList: CategoryMajor[];
  minorCatList: CategoryMinor[];
  selectedCat: {
    major: CategoryMajor|null;
    minor: CategoryMinor|null;
  };
}

const initialState: State = {
  majorCatList: majorCatList,
  minorCatList: minorCatList,
  selectedCat: {
    major: null,
    minor: null
  }
};

export default function CategoryContainer() {
  const params = useParams();
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    const majorCat = (majorCatList.find(v => v.name === params.majorCat)) ?? (majorCatList.length > 0 ? majorCatList[0] : null);
    const minorCat = (minorCatList.find(v => v.name === params.minorCat)) ?? null;


    setState({
      majorCatList,
      minorCatList,
      selectedCat: {
        major: majorCat,
        minor: minorCat
      }
    });

  }, [params]);

  return (
    <>
    <CategoryPresenter
      majorCategoryList={state.majorCatList}
      minorCategoryList={state.minorCatList}
      selectedMajorCat={state.selectedCat.major}
      selectedMinorCat={state.selectedCat.minor}
    />
    </>
  );
}