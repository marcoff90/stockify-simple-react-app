import React from 'react';
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
      <Layout>
       <Home/>
      </Layout>
  );
}

export default App;
