import {action, observable} from 'mobx';


class SongsModel{
    
    @observable currentMusic = '/barmigardam.mp3';
    @observable musicLength = 0;
    @observable curTime = 0;
    @observable scrollflag = 0;
    @observable paused = 0;
    @observable timelistener = 0;
    

    @action timeplay(){
        let min = Math.floor(this.curTime/60);
        let sec = Math.floor(this.curTime%60);
        if (sec<=9){
            return(`${min}:0${sec}`)
        }else{
            return(`${min}:${sec}`)
        }
    }
    @action timelenght(){
        let min = Math.floor(this.musicLength/60);
        let sec = Math.floor(this.musicLength%60);
        if (sec<=9){
            return(`${min}:0${sec}`)
        }else{
            return(`${min}:${sec}`)
        }
       
    }
}

const store = new SongsModel;
export default store;