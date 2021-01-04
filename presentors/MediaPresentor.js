import React, { Component } from 'react';
import Mediamodel from '../models/MediaModel';
import media from '../components/Media';

class MediaPresentor extends Component {

    componentWillReceiveProps (newprops){
        // console.log(newprops.lastname,'pp')
        console.log(newprops,typeof newprops,'hello')
        if (newprops.play === 1){
           media.play('player')
        }
    }


    render() {
        return (
            <>
                <audio controls className='player'></audio>
            </>
        );
    }
}

export default MediaPresentor;