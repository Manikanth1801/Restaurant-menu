import { FC } from "react"

const Footer: FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <p>Mail: <a href="mailto:manikanthapanigrahi@gmail.com" className="text-blue-400">manikanthapanigrahi@gmail.com</a></p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">About Us</h2>
                    <p>We are Dev-evelopers Software Solutions, committed to delivering the best software solutions.</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                    <p>&copy; 2024 Dev-evelopers Software Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer