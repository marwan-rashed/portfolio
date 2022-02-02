import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Home = () => {
  return(
    <View style = {{
      width: '100%', height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Welcome to my App.</Text>
    </View>
  );
}

export default Home;
