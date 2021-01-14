import React, { Component } from 'react';
import Detailsmodel from '../models/DetailsModel';


class Detailshow extends Component {

    constructor(){
        super()
        let lastname = Detailsmodel.name
        setInterval(() => {
            if (Detailsmodel.name !== lastname){
                this.forceUpdate();
                lastname = Detailsmodel.name
            }
        }, 1000);
    }

    render() {
        return (
            <div id='detailshow'>
                <div id='songpic'>
                    <img src={Detailsmodel.pic}></img>
                </div>
                <div id='songname'>{Detailsmodel.name}</div>
                <div id='albumname'>{Detailsmodel.songalbum}</div>
                <div id='artistname'>{Detailsmodel.artist}</div>
            </div>
            
        );
    }
}

export default Detailshow;