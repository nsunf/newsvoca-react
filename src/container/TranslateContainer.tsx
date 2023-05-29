import Paragraph from "../model/Paragraph";
import TranslatePresenter from "../presenter/TranslatePresenter";
import { uesAppSelector } from "../store";

const paragraph: Paragraph = {
  id: 1,
  order: 1,
  content: "Singh is a powerful lawmaker and politician from India’s ruling Bharatiya Janata Party. He has previously made headlines for his controversial comments and actions as WFI president, including slapping a young wrestler on stage.",
  translation: "싱은 인도의 집권당인 바라티야 자나타당의 강력한 국회의원이자 정치인입니다. 그는 이전에 무대에서 젊은 레슬링 선수를 때리는 것을 포함하여 WFI 회장으로서 논란이 많은 발언과 행동으로 헤드라인을 장식했습니다.",
  titleYN: "N"
}

export default function TranslateContainer() {
  const translaterState = uesAppSelector(state => state.translater);

  return (
    <TranslatePresenter state={translaterState} />
  );
}