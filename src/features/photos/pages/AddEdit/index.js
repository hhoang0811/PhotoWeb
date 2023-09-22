import React from "react";
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from "react-redux";

import Banner from "../../../../components/Banner/Banner";
import './style.scss'
import PhotoForm from "../../components/PhotoForm";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { randomNumber } from '../../../../utils/common'
 

function AddEditPages(props) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === parseInt(photoId)))

    const initialValues = isAddMode 
    ?
    {
        title: '',
        categoryId: null,
        photo: ''
    } 
    : editedPhoto;   

    const handleSubmit = (values) => {

        return new Promise(() => {

            setTimeout(() => {
                if(isAddMode){
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999)
                    }
                    const action = addPhoto(newPhoto)
                    dispatch(action);
                } else {
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                navigate('/photos');
            }, 3000)
        })
    }

    // const photos = useSelector(state => state.photos)
    // console.log('list of photo: ', photos);

    return (  
        <div className="photo-edit">
            <Banner title="pick your photo"/>

            <div className="photo-edit__form">
                <PhotoForm 
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    isAddMode={isAddMode}
                />
            </div>
        </div>
    );
}

export default AddEditPages;