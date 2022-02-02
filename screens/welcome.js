import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constants';

const Welcome = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 1500);
    },[]);

    return(
        <View style = {{
                width: '100%', height: '100%',
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: MAIN_COLOR
            }}
        >
            <Image
                style = {{
                    width: 150, height: 150,
                    borderRadius: 75, borderColor: SECONDARY_COLOR, borderWidth: 1,
                    marginBottom: '10%'
                }}
                source = {require('../assets/profile.jpg')}
            />

            <Text style = {{
                color: SECONDARY_COLOR,
                fontSize: 25
            }}>
                Hi ! I'm Marwan
            </Text>
            <Text style = {{
                color: SECONDARY_COLOR,
                fontSize: 20,
                marginTop: 15
            }}>
                Welcome to my portfolio
            </Text>
        </View>
    );
}

export default Welcome;
