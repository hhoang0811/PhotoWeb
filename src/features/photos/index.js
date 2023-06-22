import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

Photo.propTypes = {};

function Photo(props) {

  return (
        <Routes>
          <Route path="" element={<MainPage />}>
            <Route path="photos" element={<AddEditPage />} />
            <Route path="/:photoId" element={<AddEditPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
}

export default Photo;