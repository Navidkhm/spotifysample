import React, { Component } from 'react';
import Lists from './lists';
import Store from '../models/SongsModel';
import IntegerStep from './seekbar';
import Volumemodel from '../models/VolumeModel'
import Volume from './volume';


class Media extends Component {

    state={
        lastvol: Volumemodel.volume,
        newvol: 0,
    }
   
    playing=()=>{
        let src = document.getElementById('mysource').src
        src = src.slice(21)
        let src1 = src.split('%20');
        // console.log(src1.length,'noyy');
        if(src1.length>1){
            src = src1[0]+src1[1]
            console.log(src)
        }
        
        // console.log(src,Store.currentMusic,'kkkkkk')
        if (src === Store.currentMusic ){  
           
            if(Store.paused === 1){
                document.getElementsByClassName('btn')[0].src = '/pause.svg'
                document.getElementsByClassName('musicplayer')[0].play();
                Store.paused = 0
            } else{
                document.getElementsByClassName('btn')[0].src = '/play.png'
                document.getElementsByClassName('musicplayer')[0].pause();
                Store.paused = 1;
            }
            
        }else if (src !== Store.currentMusic){
            document.getElementsByClassName('btn')[0].src = '/pause.svg'
            document.getElementById('mysource').src = Store.currentMusic;
            document.getElementsByClassName('musicplayer')[0].onloadmetedata = function(){
                
            }
            document.getElementsByClassName('musicplayer')[0].load();
            document.getElementsByClassName('musicplayer')[0].play();
            Store.scrollflag = 0
        }
        
    }

    onload=()=>{
        Store.musicLength = document.getElementsByClassName('musicplayer')[0].duration;
    }

    time=(e)=>{
           if (Store.timelistener === 0){
            let timing = setInterval(() => {
                
                Store.timelistener = 1
                if (Store.scrollflag === 0){
                    Store.curTime = document.getElementsByClassName('musicplayer')[0].currentTime;
                } else{
                    document.getElementsByClassName('musicplayer')[0].currentTime = Store.curTime;
                    Store.scrollflag = 0
                }
                if (Store.paused === 1){
                    Store.timelistener = 0
                    clearInterval(timing)
                }
               
            }, 1000);
           } 
           
            
    }

    volumeChange=()=>{
            
            setInterval(() => {
                this.state.newvol = Volumemodel.volume/100;
            if (this.state.newvol !== this.state.lastvol){
                document.getElementsByClassName('musicplayer')[0].volume = this.state.newvol;
                this.setState({
                    lastvol: this.state.newvol
                })
            }
            }, 1000);
    }


    end=()=>{
        document.getElementsByClassName('btn')[0].src = '/play.png'
    }

    render() {
        
        return (
            <>
                
                <div id='mainmusic'>
                    <div className='buttons'>
                        <img onClick={this.playing} className='btn' src='/play.png'></img>
                    </div>
                    <div className='progresses'>
                        <audio className='musicplayer' id='musicplayer' onEnded={this.end}
                        preload="metadata" onLoadedMetadata={this.onload} onPlaying={this.time} onPause={this.not}>
                            <source id='mysource'></source>
                        </audio>
                        <div className='progressbar'>
                            <IntegerStep/>
                        </div>
                        <div id='numnum' onClick={this.volumeChange}>
                            <Volume/>
                        </div>
                    </div>
                    
                </div>
               
            </>
        );
    }
}

export default Media;

