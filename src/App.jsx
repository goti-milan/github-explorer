import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout";
import { GitHubProvider } from "./context/githubContext";
import { ToastContainer } from "react-toastify";

function PageRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <GitHubProvider>
      <Layout>
        <ToastContainer />
        <PageRouter />
      </Layout>
    </GitHubProvider>
  );
}

export default App;
