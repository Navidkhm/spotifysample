import { Slider, InputNumber, Row, Col } from 'antd';
import React from 'react'
import Store from '../models/SongsModel';
import Media from "./media";


class IntegerStep extends React.Component {

  constructor(){
    super();
    let val0 = Store.curTime;
    let val1;
    
    setInterval(() => {
      val1 = Store.curTime;
     
      if (val0 !== val1 && val1<Store.musicLength){
        val0 = val1
        this.me()
      } else if(val1>Store.musicLength){
        val1 = 0
      }
      
    }, 1000);
  }


  state = {
    inputValue: 0,
    timelength:Store.timelenght(),
    time: '0:00',
    media: new Media,
  };


  me = (value)=>{
   
    // console.log(value,this.state.inputValue,'iii');
    if (value === undefined){
      this.setState({
        inputValue: Store.curTime,
        time: Store.timeplay(),
        timelength:Store.timelenght()
      })
      value = this.state.inputValue
      // console.log(value,this.state.inputValue,'jjj')
    } else{
      Store.scrollflag = 1
      Store.curTime = value
      // console.log(value,this.state.inputValue,'rrr')
      this.setState({
        inputValue: value,
        time: Store.timeplay(),
        timelength:Store.timelenght()
      })
      value = this.state.inputValue
      if (Store.paused === 1){
        
        this.state.media.time()
      }
     
    }
 
  }


  render() {
    let { inputValue } = this.state;

    return (
      <Row>
        <h2 id='currenttime'>{this.state.time}</h2>
        <Col span={12}>
          <Slider
            min={0}
            max={Store.musicLength}
            onChange={this.me}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.01}
            tipFormatter={null}
          />
        </Col>
        <h2 id='songlength'>{this.state.timelength}</h2>
        
      </Row>
    );
  }
}


export default IntegerStep;