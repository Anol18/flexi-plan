export default function DisplaySummery({
  title,
  count,
  unit,
  subTitle = "",
  notice = "",
  color,
}) {
  return (
    <div className="w-[200px]">
      <div>
        <p className="font-medium text-2xl">{title}</p>
        <p>{subTitle}</p>
        <p
          className={`${
            color == "green"
              ? "text-green"
              : color == "cyan"
              ? "text-cyan"
              : color == "levender"
              ? "text-levender"
              : color == "pink"
              ? "text-pink"
              : ""
          } text-xl`}
        >
          {count} {unit}
        </p>
        <p className="text-gray-500 text-sm ">{notice}</p>
      </div>
    </div>
  );
}
