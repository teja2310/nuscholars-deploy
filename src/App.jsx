
import Login from './pages/Login.jsx';
import NavBar from './components/NavBar.jsx';
import ChatRoom from "./pages/ChatRoom.jsx";
import JobPortal from './pages/JobPortal.jsx';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


function App() {

  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
          <Route path="/research-opportunities" element={<PrivateRoute><JobPortal /></PrivateRoute>} />
        </Routes>

      </AuthProvider>
      
    </>
  )
}

export default App
