import RankItem from "./RankItem";
function RankList() {
  return (
    <div className="rounded-md border bg-white p-8">
      <h1 className="mb-5 text-xl font-medium">Hôm nay</h1>
      <ul className="flex h-60 flex-col overflow-y-auto">
        <RankItem />
        <RankItem />
        <RankItem />
        <RankItem />
        <RankItem />
        <RankItem />
        <RankItem />
      </ul>
    </div>
  );
}

export default RankList;
