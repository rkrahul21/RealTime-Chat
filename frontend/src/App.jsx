import Navbar from "./components/Navbar";
import { Routes,Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingPage from "./pages/SettingPage";
import SignUpPage from "./pages/SignupPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";


function App() {
 const {authUser, checkAuth,isCheckingAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(authUser);

  if(isCheckingAuth && !authUser){
    return (
    <div className="flex items-center justify-center h-screen">
      Loading...</div>
  )
  }

  return (
    <div >
     
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ?<HomePage /> : <Navigate to={"/login"}/>} />
        <Route path="/signup" element={ !authUser ? <SignUpPage/> : <Navigate to={"/"}/>} />
        <Route path="/login" element={ !authUser ? <LoginPage /> : <Navigate to={"/"}/>} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/profile" element={ authUser ? <ProfilePage /> : <Navigate to={"/login"}/>} />

      </Routes>
      
    </div>
  )
}

export default App
