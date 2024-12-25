import { FC } from "react"

const Header: FC = () => {
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-white font-bold text-xl">Company Name</div>
                <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 rounded-md md:mr-4"
                    />
                    <div className="text-white mt-2 md:mt-0">
                        <div>Contact Us</div>
                        <div>+123 456 7890</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;