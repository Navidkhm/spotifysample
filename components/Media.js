
import List from "./List";
import React, { Component } from 'react';
import Mediamodel from '../models/MediaModel';


class Media extends Component {

    play = (idplayer) =>{
        console.log(idplayer)
        document.getElementsByClassName(idplayer)[0].src = Mediamodel.musicsrc;
        console.log(Mediamodel.musicsrc)
        document.getElementsByClassName(idplayer)[0].load();
        document.getElementsByClassName(idplayer)[0].play();
    }
    

}

const media = new Media
export default media;