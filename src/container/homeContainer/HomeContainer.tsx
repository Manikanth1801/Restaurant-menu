import { menuData } from "@/data/menudata"
import { FC } from "react"

const HomeContainer: FC = () => {
  // Group menu items by category
  const groupedMenuData = menuData.reduce((acc, menu) => {
    if (!acc[menu.category]) {
      acc[menu.category] = [];
    }
    acc[menu.category].push(menu);
    return acc;
  }, {} as Record<string, typeof menuData>);

  return (
    <div className="container mx-auto">
      {Object.keys(groupedMenuData).map((category, index) => (
        <div key={index} className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 gap-4">
            {groupedMenuData[category].map((menu, index) => (
              <div key={index} className="bg-gray-200 p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{menu.name}</h3>
                  <p>{menu.description}</p>
                </div>
                <div className="text-lg font-semibold">
                  ${menu.price}
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