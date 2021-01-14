import '../styles/globals.css';
import '../styles/components.css'
import Media from '../components/Media.js';
import React from 'react';
import Lists from '../components/lists'
import 'antd/dist/antd.css';
import Detailshow from '../components/detailshow'


// function MyApp({ Component, pageProps }) {
//   return (
//   <Component {...pageProps} />)
// }

// export default MyApp;

class _app extends React.Component {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <>
        <Lists/>
        <Detailshow/>
        <Media/>
        {/* <Component {...pageProps} /> */}
      </>
    );
  }
}
export default _app;
