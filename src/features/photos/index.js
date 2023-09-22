import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/NotFound';

Photo.propTypes = {};

const MainPage = React.lazy(() => import('../../features/photos/pages/Main'));
const AddEditPage = React.lazy(() => import('../../features/photos/pages/AddEdit'));

function Photo(props) {


  return (
    <Suspense fallback={<h4 style={{marginTop: 400, textAlign: 'center'}}>Loading...</h4>}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path=":photoId" element={<AddEditPage />} />
        <Route path="add" element={<AddEditPage />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Suspense>
  );
}

export default Photo;