import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Error } from './pages/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <p>Learn React</p>
              <Home />
            </div>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
