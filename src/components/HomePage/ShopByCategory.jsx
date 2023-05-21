import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ShopByCategory = () => {
  return (
    <Tabs>
      <TabList className="flex justify-center bg-gray-200 py-4">
        <Tab className="cursor-pointer px-4 py-2 m-2 rounded-lg bg-white shadow-md">
          Action Figures
        </Tab>
        <Tab className="cursor-pointer px-4 py-2 m-2 rounded-lg bg-white shadow-md">
          Plush Toys
        </Tab>
        <Tab className="cursor-pointer px-4 py-2 m-2 rounded-lg bg-white shadow-md">
          Collectible Statues
        </Tab>
      </TabList>

      <TabPanel>
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold">Any content 1</h2>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold">Any content 1</h2>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold">Any content 1</h2>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ShopByCategory;
