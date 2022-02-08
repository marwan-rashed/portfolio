import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constants';

const Experience = ({ navigation }) => {
    return(
        <View style = {{
            width: '100%', height: '100%',
            justifyContent: 'flex-end', alignItems: 'center',
            backgroundColor: MAIN_COLOR
          }}
        >

            {/* Header */}
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
                    Work Experience
                </Text>
            </View>

            {/* Body */}
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
                    <View style = {{
                        width: '100%', padding: 10, marginBottom: 20,
                        borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10,
                        flexDirection: 'row'
                    }}>
                        <View style = {{
                            height: '100%', width: '25%',
                        }}>
                            <TouchableOpacity
                                onPress = {() => Linking.openURL('https://www.linkedin.com/company/curawella/')}
                            >
                                <Image 
                                    source = {require('../assets/curawella.png')}
                                    style = {{
                                        width: 50, height: 50, borderRadius: 25
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style = {{
                            height: '100%', width: '75%',
                        }}>
                            <Text style = {{
                                color: MAIN_COLOR,
                                fontSize: 15
                            }}>Node.JS Developer - Internship</Text>
                            <Text></Text>
                            <Text>Curawella - Meta Healthcare Software</Text>
                            <Text>Alexandria, Egypt</Text>
                            <Text></Text>
                            <Text>Sep 2021 - Oct 2021</Text>
                        </View>
                    </View>
                    
                    <View style = {{
                        width: '100%', padding: 10, marginBottom: 20,
                        borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10,
                        flexDirection: 'row'
                    }}>
                        <View style = {{
                            height: '100%', width: '25%',
                        }}>
                            <TouchableOpacity
                                onPress = {() => Linking.openURL('https://www.linkedin.com/company/curawella/')}
                            >
                                <Image 
                                    source = {require('../assets/curawella.png')}
                                    style = {{
                                        width: 50, height: 50, borderRadius: 25
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style = {{
                            height: '100%', width: '75%',
                        }}>
                            <Text style = {{
                                color: MAIN_COLOR,
                                fontSize: 15
                            }}>React Native Developer - Internship</Text>
                            <Text></Text>
                            <Text>Curawella - Meta Healthcare Software</Text>
                            <Text>Alexandria, Egypt</Text>
                            <Text></Text>
                            <Text>Jul 2019 - Oct 2019</Text>
                        </View>
                    </View>
            </ScrollView>
        </View>
    );
}

export default Experience;
