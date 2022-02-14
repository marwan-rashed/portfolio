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

const Education = ({ navigation }) => {
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
                    Education
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
                            onPress = {() => Linking.openURL('https://www.aiet.edu.eg/')}
                        >
                            <Image 
                                source = {require('../assets/AIET.png')}
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
                        }}>Alexandria Higher Institute of Engineering and Technology</Text>
                        <Text style = {{
                            color: 'gray',
                        }}>Alexandria, Egypt</Text>
                        <Text></Text>
                        <Text style = {{
                            color: MAIN_COLOR
                        }}>Computer Engineering Department</Text>
                        <Text style = {{
                            color: 'gray',
                        }}>Class of 2022</Text>
                        <Text></Text>
                        <Text style = {{
                            color: MAIN_COLOR
                        }}>Main Courses :</Text>
                        <Text style = {{
                            color: 'gray',
                        }}>{`- Introduction to Computer Systems (CE001)

- Computer Programming (CE002)

- Structured Programming & Data Structures (CE101)

- Fundamentals of Logic Design (CE112)

- Intro to Discrete Math (MAT271)

- Advanced Algorithms (CE201)

- Database Systems (CE232)

- Digital System Design (CE212)

- Numerical Methods (MAT361)

- System Programming (CE321)

- Intro to Microprocessors (CE311)

- Digital Signal Processing (ECE355)

- Communication Theory and Systems (ECE357)

- Information Technology (CE304)

- Computer Architecture (CE314)

- Operating Systems (CE322)

- Formal Languages (CE302)

- Microprocessor Interfacing (CE312)

- Intro to AI (CE433)

- Software Engineering (CE401)

- Applications of Real-Time Computing Systems (CE411)

- Distributed Systems (CE413)`}</Text>
                    </View>
                </View>

                {/* Empty view as a marginBottom */}
                <View style = {{height: 20}}/>
            </ScrollView>
        </View>
    );
}

export default Education;
