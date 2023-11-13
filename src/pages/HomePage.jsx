import FilterOrder from "../ui/FilterOrder";
import RankList from "../features/Dashboard/RankList";
import SummaryList from "../features/SummaryList";
import PieTotalPart from "../features/Dashboard/PieTotalPart";
import Heading from "../ui/Heading";
import HeaderWrapper from "../ui/HeaderWrapper";

import {
  TODAY,
  THIRTY_DAY,
  SEVEN_DAY,
  ALLIST,
} from "../Constants/OrderListConstant";

function HomePage() {
  return (
    <>
      <HeaderWrapper>
        <Heading>Dashboard</Heading>
        <FilterOrder lists={[TODAY, SEVEN_DAY, THIRTY_DAY, ALLIST]} />
      </HeaderWrapper>
      <SummaryList />
      <div className="grid grid-cols-2 gap-8 ">
        <RankList />
        <PieTotalPart />
      </div>
    </>
  );
}

export default HomePage;
