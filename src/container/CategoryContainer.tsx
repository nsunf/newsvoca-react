import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryPresenter from "../presenter/CategoryPresenter";

import CategoryMajor from "../model/CategoryMajor";
import CategoryMinor from "../model/CategoryMinor";

import categoryMajorData from "../dummyData/categoryMajorList.json";
import categoryMinorData from "../dummyData/categoryMinorList.json";

const majorCatList: CategoryMajor[] = categoryMajorData;
const minorCatList: CategoryMinor[] = categoryMinorData;

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
    const majorCat = (majorCatList.find(v => v.pathname === params.majorCat)) ?? (majorCatList.length > 0 ? majorCatList[0] : null);
    const minorCat = (minorCatList.find(v => v.pathname === params.minorCat)) ?? null;

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