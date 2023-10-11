import Avatar from "../../ui/Avatar";
export default function RankItem() {
  return (
    <li className="grid grid-cols-[auto,1fr,auto,auto] gap-x-4 rounded-md px-4 py-2 hover:bg-teal-100">
      <Avatar type="small" />
      <p className="">Jeff pham</p>
      <p>
        7 đơn / <strong>16</strong> bộ
      </p>
      <a href="#">Xem chi tiết</a>
    </li>
  );
}
