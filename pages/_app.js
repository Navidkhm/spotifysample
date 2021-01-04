import '../styles/globals.css'
import ListPresentor from '../presentors/ListPresentor';
import MediaPresentor from '../presentors/MediaPresentor';
import React from 'react'; 
import List from '../components/List' 
import media from '../components/Media';



class MyApp extends React.Component{

  constructor(){
    super();
    
  }

  state={
    myname:'nothing',
    play:0,
  }

  exam=()=>{
    this.setState({
      play:1
    })
  }

  render(){
    
    return(
      <div className='main'>
        <div className ='list' onClick={this.exam}>
          <ListPresentor />
        </div>
        <div className='mediao'>
          <MediaPresentor name={this.state.myname} play={this.state.play}/>
        </div>
        
      </div>
    )
  }
}

export default MyApp;
