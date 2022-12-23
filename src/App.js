import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Template } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Template />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
