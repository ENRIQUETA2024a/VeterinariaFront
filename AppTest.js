import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ImageViewer from './src/ImageViewer';
import MyButton from './src/MyButton';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { VeterinaryApp } from './src/VeterinaryApp';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };



  return (
    <VeterinaryApp />
  //   <View style={styles.container}>
  //     <View style={styles.imageContainer}>
  //       <ImageViewer
  //         placeholderImageSource={PlaceholderImage}
  //         selectedImage={selectedImage}
  //       />
  //     </View>
  //     <View style={styles.footerContainer}>
  //       <MyButton theme="primary" label="Choose a photo" onPress={pickImageAsync} />
  //       <MyButton label="Use this photo" onPress={pickImageAsync} />
  //     </View>
  //     <StatusBar style="auto" />
  //   </View>
  // );
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
