/* eslint-disable react/prop-types */
import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

import Button from "../ui/Button";

function OrderListsRow({ lists = [] }) {
  const [day, setDay] = useState(lists[0]);
  // // eslint-disable-next-line no-unused-vars
  // let [searchParams, setSearchParams] = useSearchParams();
  // useEffect(
  //   function () {
  //     setSearchParams({ day });
  //   },
  //   [day, setSearchParams],
  // );

  return (
    <ul className="flex gap-4 rounded-md bg-white p-1 shadow-sm">
      {lists.map((e, i) => (
        <Button
          type={day === e ? "primary" : ""}
          key={i}
          onClick={() => setDay(e)}
        >
          {e}
        </Button>
      ))}
    </ul>
  );
}

export default OrderListsRow;
