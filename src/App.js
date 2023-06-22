import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import NotFound from './components/NotFound'
import AddEditPage from './features/photos/pages/AddEdit';
import MainPage from "./features/photos/pages/Main";
import './App.scss'

// const Photo = React.lazy(() => import ('./features/photos'));

function App() {

  return (
    <div className="photo-app">
    <Suspense fallback={<div>Loading......</div>}>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<MainPage />}/>
          <Route path="photos" element={<AddEditPage />} />
          <Route path="/:photoId" element={<AddEditPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
