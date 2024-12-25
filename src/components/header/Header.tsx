import { FC } from "react"
import { RESTURANT_NAME, RESTURANT_PHONE, RESTURANT_SERVES } from "@/data/restaurantData"

const Header: FC = () => {
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-white font-bold text-xl">
                    {RESTURANT_NAME}
                    <div className="text-sm font-normal">
                        {RESTURANT_SERVES.join(" | ")}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                    <input
                        type="text"
                        placeholder="Menu Search..."
                        className="p-2 rounded-md md:mr-4"
                    />
                    <div className="text-white mt-2 md:mt-0">
                        <div>Contact Us</div>
                        <div>{RESTURANT_PHONE}</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;