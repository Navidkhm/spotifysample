import React, { Component } from 'react';
import Media from "../components/Media";
import list from '../components/List'

class ListPresentor extends Component {

    pchangesource=(e)=>{
        console.log(e.target.innerHTML)
        list.changesource(e.target.innerHTML)
    }

    render() {
        
        return (
            <>
                <h3 onClick={this.pchangesource}>The plan</h3>
                <h3 onClick={this.pchangesource}>Barmigardam</h3>
            </>
        );
    }
}

export default ListPresentor;