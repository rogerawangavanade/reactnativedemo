import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import About from './about';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    About: undefined;
  };
  
  type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
  
  const Home: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
  
    const aboutPageHandler = () => {
      navigation.navigate('About');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My App!</Text>
        <TouchableOpacity style={styles.button} onPress={aboutPageHandler}>
          <Text style={styles.buttonText}>Go to About Page</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
