import Button from "./Button";
import { useSearchParams } from "react-router-dom";

function FilterOrder({ lists = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("status") || lists[0].value;
  function handleClick(value) {
    searchParams.set("status", value);
    // if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <ul className="flex gap-4 rounded-md bg-white p-1 shadow-sm sm:gap-1">
      {lists.map((e, i) => (
        <Button
          type={currentFilter === e.value ? "primary" : ""}
          key={i}
          onClick={() => handleClick(e.value)}
        >
          {e.label}
        </Button>
      ))}
    </ul>
  );
}

export default FilterOrder;
