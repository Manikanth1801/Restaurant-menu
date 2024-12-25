import { FC } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";


interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <div className="mx-4 my-4 p-4 sm:p-6 lg:p-8">
        {children}
      </div>
      <button
        onClick={scrollToBottom}
        className="fixed bottom-4 right-4 px-2 bg-blue-500 text-white rounded-full shadow-lg"
      >
        &#x2193;
      </button>
      <Footer />
    </>
  );
};

export default PageLayout;