import {UnorderedList,ListItem } from '@chakra-ui/react'
import React,{useState} from 'react'
import "./imageshome.css";
function ImagesHome() {
    
    const [imageList,setImageList] = useState("")
    return (
            <UnorderedList display="flex" justifyContent="center" color="grey">
               <ListItem className="list-item-image" ></ListItem>
               <ListItem className="list-item-image"></ListItem>
               <ListItem className="list-item-image"></ListItem>
               <ListItem className="list-item-image"></ListItem>
               <ListItem className="list-item-image"></ListItem>
               <ListItem className="list-item-image"></ListItem>
               <ListItem className="list-item-image"></ListItem>
            </UnorderedList>
    )
}

export default ImagesHome
