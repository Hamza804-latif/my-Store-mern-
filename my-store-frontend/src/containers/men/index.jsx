import axios from "axios";
import { useQuery } from "react-query";
import AppCard from "../../components/card";
import "./index.css";

const Men = () => {
  const { isLoading, error, data } = useQuery(
    "categories",
    async () => {
      let data = await axios("http://localhost:5000/men");
      return data.data;
    },
    { enabled: true }
  );

  if (isLoading) {
    return (
      <h2 className="flex justify-center items-center m-5 p-5">lOADING...</h2>
    );
  }

  if (error) {
    return (
      <h2 className="flex justify-center items-center m-5 p-5">SERVER ERROR</h2>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {data &&
            data?.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded border border-gray-200 bg-white"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-60">
                  <img
                    src={item.image}
                    alt="_alt"
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <p href={item.name}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.title}
                    </p>
                  </h3>
                  <p className="text-sm text-gray-500">color: {item.color}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">
                      size: {item.size}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      Rs.{item.price}
                    </p>
                  </div>
                  <div className="w-full float-right">
                    <button class="bg-blue-500 hover:bg-blue-300 w-32 text-white font-bold py-1 float-right rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
