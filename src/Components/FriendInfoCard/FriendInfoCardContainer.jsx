import React from 'react'
import { MdPanoramaPhotosphereSelect } from 'react-icons/md'
import FriendInfoCardComponent from './FriendInfoCardComponent'

export default function FriendInfoCardContainer(props) {
    return (
        <FriendInfoCardComponent firstName={props.firstName} lastName={props.lastName} info={props.info} />
    )
}
