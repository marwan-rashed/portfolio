import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constants';

const Education = ({ navigation }) => {
    return(
        <View style = {{
            width: '100%', height: '100%',
            justifyContent: 'flex-end', alignItems: 'center',
            backgroundColor: MAIN_COLOR
          }}
        >
            <View style = {{
                height: '15%', width: '90%',
                justifyContent: 'space-around', alignItems: 'center'
                }}
            >
                <View style = {{
                    width: '100%',
                }}>
                    <TouchableOpacity
                        onPress = {() => navigation.goBack()}
                    >
                        <Text style = {{
                            color: 'white'
                        }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style = {{
                    color: 'white', fontSize: 30,
                    borderBottomWidth: 1, borderBottomColor: SECONDARY_COLOR
                }}>
                    Education
                </Text>
            </View>
            <ScrollView
                contentContainerStyle = {{
                    alignItems: 'center'
                }}
                style = {{
                    width: '90%', height: '75%',
                    backgroundColor: 'white',
                    borderTopRightRadius: 25, borderTopLeftRadius: 25,
                    padding: 20,
                }}
            >

            </ScrollView>
        </View>
    );
}

export default Education;
