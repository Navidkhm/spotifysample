import React, { Component } from 'react';
import Store from '../models/SongsModel';
import Media from "../components/media";
import Detailsmodel from "../models/DetailsModel";
import Detailshow from "../components/detailshow";


class Lists extends Component {
  
    render() {
        let lost = new Media;
        
        function now(e){
            
            Store.currentMusic = `/${e.target.innerText}.mp3`;

            let src1 = Store.currentMusic.split(' ');
            
            if(src1.length>1){
                Store.currentMusic = src1[0]+src1[1]
            }

            Detailsmodel.name = e.target.innerText;
            Detailsmodel.pic = `/images/${e.target.innerText}.jpg`;


            for(let i=0;i<Detailsmodel.album.length;i++){
                for (let j=1;j<Detailsmodel.album[i].length;j++){
                    if (Detailsmodel.album[i][j] === Detailsmodel.name){
                        
                        let c = Detailsmodel.album[i][0]
                        Detailsmodel.pic = `/images/${c}.jpg`;
                        Detailsmodel.artist = Detailsmodel.album[i][1]
                        Detailsmodel.songalbum = Detailsmodel.album[i][0]
                    }
                }
                
            }
            
            Store.scrollflag = 1;
            Store.paused = 0;
            lost.playing();
            lost.time();
            
        }
        return (
            <div id='lists'>
                <h3  onDoubleClick={now} className='links'>thoughts</h3>
                <h3  onDoubleClick={now} className='links'>Barmigardam</h3>
                <h3  onDoubleClick={now} className='links'>The plan</h3>
                <h3  onDoubleClick={now} className='links'>Foils</h3>
                <h3  onDoubleClick={now} className='links'>Sator</h3>
                <h3  onDoubleClick={now} className='links'>Terry Time</h3>
                <h3  onDoubleClick={now} className='links'>Rappin Ced</h3>
                <h3  onDoubleClick={now} className='links'>Falling</h3>
                <h3  onDoubleClick={now} className='links'>Lost Soul</h3>
                <h3  onDoubleClick={now} className='links'>Thank You</h3>
                
            </div>
        );
    }
}

export default Lists;