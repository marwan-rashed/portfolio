import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constants';

const Projects = ({ navigation }) => {
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
                    Projects
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
                <View style = {{
                    width: '100%', padding: 10, marginBottom: 20,
                    borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10,
                }}>
                    <Text style = {{
                        color: MAIN_COLOR,
                        fontSize: 15, fontWeight: 'bold',
                        marginBottom: 5,
                    }}>MY PORTFOLIO</Text>

                    <Text>Mobile App. (Android) represent my portfolio including my personal data, education, work experience, projects, skills and certifications</Text>

                    <Text style = {{
                        color: SECONDARY_COLOR, marginTop: 10,
                    }}>{'Tools & Technologies'}</Text>
                    <Text>{`- JavaScript
- React Native`}</Text>
                    <TouchableOpacity
                        onPress = {() => {
                            Linking.openURL('https://github.com/marwan-rashed/portfolio')
                        }}
                    >
                        <Text style = {{
                            color: SECONDARY_COLOR,
                            fontStyle: 'italic', marginTop: 10
                        }}>Source code on github</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{
                    width: '100%', padding: 10, marginBottom: 20,
                    borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10,
                }}>
                    <Text style = {{
                        color: MAIN_COLOR,
                        fontSize: 15, fontWeight: 'bold',
                        marginBottom: 5,
                    }}>Transactions Handling System</Text>

                    <Text>Design and realization of smart local transactions handling system</Text>

                    <Text style = {{
                        color: SECONDARY_COLOR, marginTop: 10,
                    }}>{'Tools & Technologies'}</Text>
                    <Text>
{`- JavaScript
- React Native
- Node.JS
- Express.JS
- MongoDB
- Socket.io
- AWS`}             </Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Projects;
