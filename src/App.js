import { useState, useEffect } from 'react'
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import NotFound from './components/NotFound'
import AddEditPage from './features/photos/pages/AddEdit';
import MainPage from "./features/photos/pages/Main";
import './App.scss'
import productApi from './api/productApi';

// const Photo = React.lazy(() => import ('./features/photos'));

function App() {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,

        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }

    fetchProductList();
  }, []);

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
