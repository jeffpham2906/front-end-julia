/* eslint-disable react/prop-types */
function SummaryItem({ icon, title, quantity, salary }) {
  return (
    <li className="flex items-center gap-4 rounded-md border bg-white p-4">
      <span className="rounded-full bg-teal-100 p-4">{icon}</span>
      <div>
        <h1 className="font-medium text-gray-600">{title}</h1>
        <p className="text-3xl font-medium">
          {quantity}
          {salary}
        </p>
      </div>
    </li>
  );
}
export default SummaryItem;
