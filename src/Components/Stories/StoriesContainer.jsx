import React from 'react'
import StoriesComponent from './StoriesComponent'

export default function StoriesContainer({people}) {
    return (
        <StoriesComponent people={people}/>
    )
}
