import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ListByOrder from "../features/ListByOrder";
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
  let [searchParams] = useSearchParams();
  const [data, setData] = useState(1);

  useEffect(
    function () {
      const day = searchParams.get("day");
      console.log(day);
      setData(day);
    },
    [searchParams],
  );

  return (
    <>
      <HeaderWrapper>
        <Heading>Dashboard{data}</Heading>
        <ListByOrder lists={[TODAY, SEVEN_DAY, THIRTY_DAY, ALLIST]} />
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
