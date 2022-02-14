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
                    }}>MY PORTFOLIO (Mobile)</Text>

                    <Text style = {{
                        color: 'gray',
                    }}>Mobile App. (Android) represent my portfolio including my personal data, education, work experience, projects, skills and certifications</Text>

                    <Text style = {{
                        color: SECONDARY_COLOR, marginTop: 10,
                    }}>{'Tools & Technologies'}</Text>
                    <Text style = {{
                        color: 'gray',
                    }}>{`- JavaScript
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
                    }}>Notes App (Backend)</Text>

                    <Text style = {{
                        color: 'gray',
                    }}>Simple Notes services that allows user to take notes and also user can view, edit and delete his notes at any time</Text>

                    <Text style = {{
                        color: SECONDARY_COLOR, marginTop: 10,
                    }}>{'Features'}</Text>
                    <Text style = {{
                        color: 'gray',
                    }}>{
`- Create Note
- Edit Note
- Delete Note
- Get All Notes
- Get One Note Details`}</Text>
                    <Text style = {{
                        color: SECONDARY_COLOR, marginTop: 10,
                    }}>{'Tools & Technologies'}</Text>
                    <Text style = {{
                        color: 'gray',
                    }}>{
`- JavaScript
- Node.JS
- Express.JS
- MongoDB`}</Text>
                    <TouchableOpacity
                        onPress = {() => {
                            Linking.openURL('https://github.com/marwan-rashed/notes-app')
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
                    }}>Transactions Handling System - Graduation Project</Text>

                    <Text style = {{
                        color: 'gray',
                    }}>Design and realization of smart local transactions handling system</Text>

                    <Text style = {{
                        color: SECONDARY_COLOR, marginTop: 10,
                    }}>{'Tools & Technologies'}</Text>
                    <Text style = {{
                        color: 'gray',
                    }}>
{`- JavaScript
- React Native
- Node.JS
- Express.JS
- MongoDB
- Socket.io
- AWS`}             </Text>
                </View>

                {/* Empty view as a marginBottom */}
                <View style = {{height: 20}}/>
            </ScrollView>
        </View>
    );
}

export default Projects;
