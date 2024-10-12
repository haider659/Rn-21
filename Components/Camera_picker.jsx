// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
// import React, { useState } from 'react';
// import { launchCamera } from 'react-native-image-picker';

// const CameraPicker = () => {
//   const [capturedImages, setCapturedImages] = useState([]);

//   const openCamera = async () => {
//     const result = await launchCamera({
//       mediaType: 'photo',
//       selectionLimit: 3, // Allow selecting up to 3 photos
//     });

//     console.log(result);

//     if (result.assets) {
//       // Extract URIs from the selected assets
//       const imgSrcs = result.assets.map(asset => asset.uri);
//       setCapturedImages(prevImages => [...prevImages, ...imgSrcs]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Camera Picker</Text>

//       <TouchableOpacity onPress={openCamera} style={styles.button}>
//         <Text style={styles.buttonText}>Open Camera</Text>
//       </TouchableOpacity>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {capturedImages.map((uri, index) => (
//           <Image key={index} source={{ uri }} style={styles.image} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'grey',
//     width: 200,
//     padding: 15,
//     alignItems: 'center',
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   image: {
//     width: 100, // Adjust width as needed
//     height: 100, // Adjust height as needed
//     borderRadius: 10,
//     marginRight: 10,
//   },
// });

// export default CameraPicker;
