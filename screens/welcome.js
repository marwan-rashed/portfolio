import React, { useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constants';

const Welcome = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 1000);
    },[]);

    return(
        <View style = {{
                width: '100%', height: '100%',
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: MAIN_COLOR
            }}
        >
            <View style = {{
                width: '100%', height: '50%',
                justifyContent: 'flex-end', alignItems: 'center'
            }}>
                <Text style = {{
                    color: 'white', fontSize: 30
                }}>MY PORTFOLIO</Text>
            </View>
            <View style = {{
                width: '100%', height: '50%',
                justifyContent: 'flex-end', alignItems: 'center'
            }}>
                <Text style = {{
                    color: SECONDARY_COLOR, fontSize: 15,
                    marginBottom: 10
                }}>copyrights marwan rashed 2022</Text>
            </View>
        </View>
    );
}

export default Welcome;
