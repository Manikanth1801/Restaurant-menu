import { fetchMenuData } from "@/service";
import { MenuInterface } from "@/types";
import { FC, useEffect, useState } from "react"

const HomeContainer: FC = () => {
  const [menuData, setMenuData] = useState<MenuInterface[]|undefined>();
  // Group menu items by category
  useEffect(() => {
    const fetchData = async () => {
      const menuData = await fetchMenuData();
      setMenuData(menuData);
    };

    // Initial fetch
    fetchData();

    // Set up polling
    const interval = setInterval(fetchData, 10000); // Fetch every 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const groupedMenuData = menuData?.reduce((acc, menu) => {
    if (!acc[menu.category]) {
      acc[menu.category] = [];
    }
    acc[menu.category].push(menu);
    return acc;
  }, {} as Record<string, MenuInterface[]>);
  return (
    <div className="container mx-auto">
      {Object.keys(groupedMenuData || {}).map((category, index) => (
        <div key={index} className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 gap-4">
            {groupedMenuData?.[category].map((menu, index) => (
              <div key={index} className="bg-gray-200 p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{menu.name}</h3>
                  <p>{menu.description}</p>
                </div>
                <div className="text-lg font-semibold">
                    &#8377; {menu.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContainer;