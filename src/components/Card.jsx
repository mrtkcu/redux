import { useSelector } from "react-redux";

export default function Card() {
  const liste = useSelector((store) => store.card.card);
  return (
    <div>
      {liste.map((item) => (
        <p>{`${item.brand} ${item.model} - ${item.year}`}</p>
      ))}
    </div>
  );
}
