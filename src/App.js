import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import ErrorPage from './pages/errorpage/errorpage';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* UNPROTECTED ROUTES */}
          <Route path="/" element={<Homepage />} />

          {/* 404 ROUTE */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
