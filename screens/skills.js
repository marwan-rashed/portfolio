import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constants';

const Skills = ({ navigation }) => {
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
                    Skills
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
                <Text style = {{
                    color: MAIN_COLOR, fontSize: 25,
                    alignSelf: 'flex-start', marginBottom: 5,
                }}>Technical Skills</Text>

                <View style = {{
                    width: '100%', padding: 10, marginBottom: 20,
                    borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10,
                }}>
                    <Text style = {{
                        color: SECONDARY_COLOR, fontSize: 15,
                    }}>Backend</Text>
                    <Text>Node.JS - Express - TypeScript</Text>
                    <Text></Text>
                    <Text style = {{
                        color: SECONDARY_COLOR, fontSize: 15,
                    }}>Mobile App Development</Text>
                    <Text>JavaScript - React Native - Dart - Flutter</Text>
                    <Text></Text>
                    <Text style = {{
                        color: SECONDARY_COLOR, fontSize: 15,
                    }}>Database</Text>
                    <Text>SQL - MySQL - MongoDB - FirebaseDB</Text>
                    <Text></Text>
                    <Text style = {{
                        color: SECONDARY_COLOR, fontSize: 15,
                    }}>Testing</Text>
                    <Text>Jest - Mocha</Text>
                    <Text></Text>
                    <Text style = {{
                        color: SECONDARY_COLOR, fontSize: 15,
                    }}>Other Skills</Text>
                    <Text>Problem Solving - Algorithms - OOP - Data Structures - Git</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Skills;
