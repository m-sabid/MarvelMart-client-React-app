import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import axios from "axios";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [category, setCategory] = useState("Action Figures");

  const url = "https://marvel-mart-m-sabid.vercel.app/api/toys";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setToys(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = toys?.toys?.filter((toy) => toy.subCategory === category);
    setFilteredToys(filtered);
  }, [toys, category]);

  const filterToysByCategory = (category) => {
    setCategory(category);
  };

  return (
    <Tabs>
      <TabList className="flex flex-wrap justify-center bg-gray-200 py-4">
        <Tab
          className={`cursor-pointer px-4 py-2 m-2 rounded-lg bg-white shadow-md ${
            category === "Action Figures" ? "bg-blue-200" : ""
          }`}
          onClick={() => filterToysByCategory("Action Figures")}
        >
          Action Figures
        </Tab>
        <Tab
          className={`cursor-pointer px-4 py-2 m-2 rounded-lg bg-white shadow-md ${
            category === "Plush Toys" ? "bg-blue-200" : ""
          }`}
          onClick={() => filterToysByCategory("Plush Toys")}
        >
          Plush Toys
        </Tab>
        <Tab
          className={`cursor-pointer px-4 py-2 m-2 rounded-lg bg-white shadow-md ${
            category === "Collectible Statues" ? "bg-blue-200" : ""
          }`}
          onClick={() => filterToysByCategory("Collectible Statues")}
        >
          Collectible Statues
        </Tab>
      </TabList>

      <TabPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 justify-center">
          {filteredToys?.map((toy) => (
            <ToyCard key={toy._id} toy={toy} />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 justify-center">
          {filteredToys?.map((toy) => (
            <ToyCard key={toy._id} toy={toy} />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 justify-center">
          {filteredToys?.map((toy) => (
            <ToyCard key={toy._id} toy={toy} />
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ShopByCategory;
