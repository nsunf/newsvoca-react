import { useParams } from "react-router-dom";
import CategoryMajor from "../model/CategoryMajor";
import CategoryMinor from "../model/CategoryMinor";
import CategoryPresenter from "../presenter/CategoryPresenter";
import { useEffect, useState } from "react";
import categoryData from "../dummyData/Category.json";

const { major: majorCatList, minor: minorCatList }: { major: CategoryMajor[], minor: CategoryMinor[] } = categoryData;

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