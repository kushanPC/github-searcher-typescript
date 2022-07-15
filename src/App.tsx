import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import SearchUsers from './components/searchUsers/SearchUsers';
import UserProfile from './components/userProfile/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<SearchUsers />} />
          <Route path="/user/:login" element={<UserProfile />} />
          <Route path="*" element={<h3>Page Not Found!</h3>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
