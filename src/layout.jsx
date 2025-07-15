import Header from "./components/header";
import Footer from "./components/footer";

const Layout = ({children}) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
