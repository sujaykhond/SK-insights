import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer, Loader } from './components';
import { Outlet } from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex flex-col min-h-screen bg-gray-400">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="flex flex-col min-h-screen bg-gray-400">
      <Header />
      <main className="flex-grow flex items-center justify-center">

        <Loader />

      </main>
      <Footer />
    </div>
  )
}

export default App;
