import React from 'react'
import GeneralPostComponent from './GeneralPostComponent'

export default function GeneralPostContainer(props) {
    const {profile,uploadedImage,userName}=props
    return (
        <GeneralPostComponent profile={profile} uploadedImage={uploadedImage} username={userName}/>
    )
}
