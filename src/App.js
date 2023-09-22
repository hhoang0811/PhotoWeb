import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Photo from "./features/photos";
import './App.scss'
import NotFound from './components/NotFound';

function App() {

  return (
    <div className="photo-app">
      <BrowserRouter>
        <Header />

          <Routes>
            <Route path="/photos/*" element={<Photo />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
