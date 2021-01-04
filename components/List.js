import React, { Component } from 'react';
import MediaPresentor from '../presentors/MediaPresentor';
import ListPresentor from '../presentors/ListPresentor';
import Mediamodel from '../models/MediaModel'

class List extends Component {


    deletespacefromsource=(target)=>{
        target = target.split(" ")
        if (target.length>1){
            target = target[0]+target[1]
        } else{
            target = target[0]
        }
        return target
    }

    changesource =(musicsource)=>{
        console.log(musicsource)
        musicsource = this.deletespacefromsource(musicsource)
        musicsource = `/${musicsource}.mp3`
        Mediamodel.musicsrc = musicsource
        
    }


}

const list = new List;
export default list;