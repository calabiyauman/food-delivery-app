// import React, {Component, props, View} from "react";


// class Maps extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         region: {
//           latitude:       LATITUDE,
//           longitude:      LONGITUDE,
//           latitudeDelta:  LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         },
//         marker: {
//           latlng:{
//             latitude:       null,
//             longitude:      null,
//             latitudeDelta:  LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA
//           }
//         }
//       }
//     }
  
//     componentDidMount() {
//       navigator.geolocation.getCurrentPosition (
//         (position) => { alert("value:" + position) },
//         (error)    => { console.log(error) },
//         {
//           enableHighAccuracy: true,
//           timeout:            20000,
//           maximumAge:         10000
//         }
//       )
//     }
  
//     onMapPress(e) {
//       alert("coordinates:" + JSON.stringify(e.nativeEvent.coordinate))
//         this.setState({
//           marker: [{ coordinate: e.nativeEvent.coordinate }]
//         })
//       }
  
//     render() {
//       return (
//         <View style={styles.container}>
//           <View style={{flexGrow:1}}>
//             <MapView
//               ref="map"
//               provider={this.props.provider}
//               style={styles.map}
//               onPress={this.onMapPress.bind(this)}
//               provider = {PROVIDER_DEFAULT}
//               mapType="standard"
//               zoomEnabled={true}
//               pitchEnabled={true}
//               showsUserLocation={true}
//               followsUserLocation={true}
//               showsCompass={true}
//               showsBuildings={true}
//               showsTraffic={true}
//               showsIndoors={true}>
//             </MapView>
//           </View>
//         </View>
//       )
//     }
//   }