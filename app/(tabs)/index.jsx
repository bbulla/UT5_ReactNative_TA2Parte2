import React, { useState } from 'react';
import { 
  Image, 
  Text, 
  View, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native';

const imageData = [
  {
    id: '1',
    uri: require('../../assets/images/images.png'),
    description: 'Bart'
  },
  {
    id: '2',
    uri: require('../../assets/images/png-clipart-mario-mario.png'),
    description: 'Mario'
  },
  {
    id: '3',
    uri: require('../../assets/images/png-clipart-minions-minions.png'),
    description: 'Minions'
  }
];

export default function Gallery() {
  const { width } = Dimensions.get('window');

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = () => {
    const nextIndex = (currentIndex + 1) % imageData.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={imageData[currentIndex].uri} 
          style={[styles.image, { width: width * 0.9 }]} 
        />
        <Text style={styles.description}>
          {imageData[currentIndex].description}
        </Text>
      </View>

      {/* Botón para cambiar la imagen */}
      <TouchableOpacity style={styles.button} onPress={changeImage}>
        <Text style={styles.buttonText}>Cambiar Imagen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    height: 300,
    borderRadius: 15,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
