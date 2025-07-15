import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout";
import Toaster from "./components/toaster";
import { GitHubProvider } from "./context/github";

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
        <Toaster />
        <PageRouter />
      </Layout>
    </GitHubProvider>
  );
}

export default App;
