import React, {PureComponent} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withAuthentication, AuthenticationService } from '../Helpers'
import EsriLoaderReact from 'esri-loader-react'
import { WebMap, WebScene } from 'react-arcgis'
//import {Col, Row, Modal, Button} from 'react-materialize'


// (esriConfig) => {esriConfig.request.proxyUrl = "https://arcportal.htm.boozallencsn.com/portal"})
// let esriConfig.portalUrl = "https://arcportal.htm.boozallencsn.com/portal"

const ArcGIS = (props) => (
  <div style={{ width: '100vw', height: '100vh' }}>
      <WebMap

        id="4f4682790c324242b1e347235548465d"
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            zoom: 10
        }}
      />

  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null,mapDispatchToProps)(withAuthentication(ArcGIS))
//
// class ArcGIS extends PureComponent {
//
//   render() {
//     const options = {
//       url: 'https://arcportal.htm.boozallencsn.com/portal'
//     };
//     const itemId = 'd985b1bfee954cd094e387613f5effa1'
//
//     return (
//       <EsriLoaderReact
//         options={options}
//         modulesToLoad={['esri/Map', 'esri/views/MapView']}
//         onReady={({loadedModules: [Map, MapView], containerNode}) => {
//           new MapView({
//             container: containerNode,
//             map: new Map({basemap: 'oceans'})
//           });
//         }}
//       />
//     );
//   }
// }
//
// export default ArcGIS
