import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constants';

const Home = () => {
  return(
    <View style = {{
      width: '100%', height: '100%',
      justifyContent: 'flex-end', alignItems: 'center',
      backgroundColor: MAIN_COLOR
    }}>
        <View style = {{
          height: '25%', width: '90%',
          justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'
        }}>
          <Image
            source = {require('../assets/profile.jpg')}
            style = {{
              width: 140, height: 140, borderRadius: 70,
              borderColor: SECONDARY_COLOR, borderWidth: 2
            }}
          />
          <View style = {{
            height: '70%', width: '60%',
            padding: 10, justifyContent: 'center'
          }}>
            <Text style = {{
              color: 'white', fontSize: 25
            }}>Marwan Rashed</Text>
            <Text style = {{
              color: SECONDARY_COLOR, fontSize: 15,
              marginTop: 10
            }}>Entry-Level Software Engineer</Text>
          </View>
        </View>
        <View style = {{
          width: '90%', height: '75%',
          backgroundColor: 'white',
          borderTopRightRadius: 25, borderTopLeftRadius: 25
        }}>
            
        </View>
    </View>
  );
}

export default Home;
