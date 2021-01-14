import React, { Component } from 'react';
import { Slider, Switch } from 'antd';
import Volumemodel from '../models/VolumeModel';

class Volume extends React.Component {
  state = {
    volnum: 100,
    lastvol: Volumemodel.volume,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };

  me=(value)=>{
      this.setState({
          volnum:value
      })
    Volumemodel.volume = value
  }

  mute=()=>{ 
    if (Volumemodel.muted === 1){
      document.getElementById('volume').src = '/volume.svg'
      this.me(this.state.lastvol)
      Volumemodel.muted = 0

    }else{
      document.getElementById('volume').src = '/mute.svg';
      this.setState({
        lastvol:Volumemodel.volume
      })
      this.me(0)
      Volumemodel.muted = 1

    }
    }
    

  render() {
    const { disabled } = this.state;
    return (
      <>
        <img id='volume' src='/volume.svg' onClick={this.mute}></img>
        <Slider defaultValue={this.state.volnum}  disabled={disabled} onChange={this.me}/>
       
      </>
    );
  }
}

export default Volume;