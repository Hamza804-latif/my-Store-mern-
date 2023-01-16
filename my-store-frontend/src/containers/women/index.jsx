import { useDispatch } from "react-redux";
import { slice } from "../../store/Slice/Cart";
import AppCard from "../../components/card";
import { useQuery } from "react-query";
import axios from "axios";

const Women = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery(
    "women",
    async () => {
      let data = await axios.get("http://localhost:5000/women");
      return data.data;
    },
    { enabled: true }
  );

  const handleClick = (params) => {
    dispatch(slice.actions.addToCart(params));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {data &&
            data?.map((ele) => (
              <AppCard
                item={ele}
                handleAddToCart={(item) => handleClick(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
