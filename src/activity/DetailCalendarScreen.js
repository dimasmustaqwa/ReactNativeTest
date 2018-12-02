

import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends React.Component {

  constructor() {
    super();
  }
  render () {
    return(
      <View>
          <ScrollView>
            <Text>This is Title</Text>
            <Text>
            tent This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//            t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Con
//            tent This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content Th
//            is is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conte
//            nt This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is 
//            Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This
//             is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content T
//             his is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//             t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is C
//             ontent This is Content This is Content This 
ent This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//            t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Con
//            tent This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content Th
//            is is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conte
//            nt This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is 
//            Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This
//             is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content T
//             his is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//             t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is C
//             ontent This is Content This is Content This 
ent This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//            t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Con
//            tent This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content Th
//            is is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conte
//            nt This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is 
//            Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This
//             is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content T
//             his is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//             t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is C
//             ontent This is Content This is Content This 
ent This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//            t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Con
//            tent This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content Th
//            is is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conte
//            nt This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is 
//            Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This
//             is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content T
//             his is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//             t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is C
//             ontent This is Content This is Content This 
ent This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//            t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Con
//            tent This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content Th
//            is is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conte
//            nt This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is 
//            Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This
//             is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content T
//             his is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//             t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is C
//             ontent This is Content This is Content This 
            </Text>
          </ScrollView>
      </View>
    )
  }
}


export default Home
// export default class dimas extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       scrollY: new Animated.Value(0)
//     }
//   }

//   render() {
//     const headerHeight = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
//       outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
//       extrapolate: 'clamp'
//     });
//     const headerTitleOpacity = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
//       outputRange: [0, 1],
//       extrapolate: 'clamp'
//     });
//     const heroTitleOpacity = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
//       outputRange: [1, 0],
//       extrapolate: 'clamp'
//     });

//     const headerTitle = 'HEADER'

//     return (
//       <View style={styles.container}>
//         <Animated.View style={[styles.header, { height: headerHeight }]}>
//           <Animated.Text style={{textAlign: 'center', fontSize: 18, color: 'black', marginTop: 28, opacity: headerTitleOpacity}}>{headerTitle}</Animated.Text>
//           <Animated.Text style={{textAlign: 'center', fontSize: 32, color: 'black', position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity}}>{headerTitle}</Animated.Text>
//         </Animated.View>
//         <ScrollView
//           contentContainerStyle={styles.scrollContainer}
//           onScroll={Animated.event(
//             [{ nativeEvent: {
//                 contentOffset: {
//                   y: this.state.scrollY
//                 }
//               }
//             }])
//           }
//           scrollEventThrottle={16}>
//           <Text style={styles.title}>This is Title</Text>
//           <Text style={styles.content}>This is Content This is Content This is Content This
//            is Content This is Co
//            n
//            tent This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//            t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Con
//            tent This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content Th
//            is is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conte
//            nt This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is 
//            Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This
//             is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content T
//             his is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Conten
//             t This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is C
//             ontent This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content 
//             This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is Content This is
//              Content This is Content This is Content This is Content This is Content This is Content </Text>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eaeaea',
//   },
//   scrollContainer: {
//     padding: 16,
//     paddingTop: HEADER_EXPANDED_HEIGHT
//   },
//   header: {
//     backgroundColor: 'lightblue',
//     position: 'absolute',
//     width: SCREEN_WIDTH,
//     top: 0,
//     left: 0,
//     zIndex: 9999
//   },
//   title: {
//     marginVertical: 16,
//     color: "black",
//     fontWeight: "bold",
//     fontSize: 24
//   }
// });

