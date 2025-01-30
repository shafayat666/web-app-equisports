import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null);

const Root = () => {
  const loaderData = useLoaderData();

  const [data, setData] = useState(loaderData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow p-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </DataContext.Provider>

  );
};

export default Root;
