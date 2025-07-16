import Header from "./components/header";
import Footer from "./components/footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between ">
      <Header />
      <main className="sm:max-w-2xl  px-4 py-2">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
