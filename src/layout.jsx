import Header from "./components/header";
import Footer from "./components/footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between ">
      <Header />
      <main className="w-full max-w-screen-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
