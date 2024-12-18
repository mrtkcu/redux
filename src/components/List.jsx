import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/actions/cardActions";

export default function List() {
  const cars = useSelector((store) => store.list.list);
  const dispatch = useDispatch();

  function handleClick(item) {
    dispatch(addItem(item));
  }

  return (
    <div>
      {cars.map((item) => (
        <p
          onClick={() => handleClick(item)}
        >{`${item.brand} ${item.model} - ${item.year}`}</p>
      ))}
    </div>
  );
}
