import React from "react";
import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Images from '../../../../constant/Images';
import Banner from "../../../../components/Banner/Banner";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from '../../photoSlice'
import './Mainpage.scss'

function MainPage(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const photos = useSelector(state => state.photos)
    // console.log('list of photo: ', photos);

    const handlePhotoEditClick = (photo) => {
        // console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        navigate(editPhotoUrl);
      }
    
    const handlePhotoRemoveClick = (photo) => {
        // console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }

    return (  
        <div className="photo-main">
            <Banner 
                title="Your awesome photos"
                backgroundUrl={Images.PINK_BG}
            />

            <Container className="text-center photoList">
                <PhotoList 
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

MainPage.propTypes = {}

export default MainPage;