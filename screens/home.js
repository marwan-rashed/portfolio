import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constants';

const TouchableComponent = (props) => {
  return(
    <TouchableHighlight
        underlayColor = { MAIN_COLOR }
        activeOpacity = { 1 }
        onPress = { props.onPress }
        style = {{
          width: '100%', flexDirection: 'row',
          backgroundColor: SECONDARY_COLOR,
          padding: 10, borderRadius: 10,
          marginBottom: 10
      }}
    >
        <Text style = {{
          color: 'white', fontSize: 18
        }}>{props.title}</Text>
    </TouchableHighlight>
  );
}

const Home = ({ navigation }) => {
  return(
    <View style = {{
      width: '100%', height: '100%',
      justifyContent: 'flex-end', alignItems: 'center',
      backgroundColor: MAIN_COLOR
    }}>

        {/* Header */}
        <View style = {{
            height: '25%', width: '90%',
            justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'
          }}
        >
            <Image
              source = {require('../assets/profile.jpg')}
              style = {{
                width: 140, height: 140, borderRadius: 70,
                borderColor: SECONDARY_COLOR, borderWidth: 0.5
              }}
            />
            <View style = {{
                height: '70%', width: '60%',
                padding: 10, justifyContent: 'center'
              }}
            >
                  <Text style = {{
                    color: 'white', fontSize: 25
                  }}>Marwan Rashed</Text>
                  <Text style = {{
                    color: SECONDARY_COLOR, fontSize: 20,
                    marginTop: 10
                  }}>Entry-Level Software Engineer</Text>
            </View>
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

              {/* Personal info Section */}
              <View style = {{
                width: '100%', padding: 10, marginBottom: 20,
                borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10
              }}>
                  <Text style = {{
                    color: SECONDARY_COLOR, marginBottom: 5
                  }}>Full Name :</Text>
                  <Text style = {{
                    color: 'gray',
                  }}>Marwan Mohamed Mohamed Rashed</Text>
                  <Text style = {{
                    color: SECONDARY_COLOR, marginBottom: 5, marginTop: 5
                  }}>Email :</Text>
                  <Text style = {{
                    color: 'gray',
                  }}>marwanrashed300@gmail.com</Text>
                  <Text style = {{
                    color: SECONDARY_COLOR, marginBottom: 5, marginTop: 5
                  }}>Mobile :</Text>
                  <Text style = {{
                    color: 'gray',
                  }}>+20 115 410 3808</Text>
                  <Text style = {{
                    color: 'gray',
                  }}>+20 114 380 4555</Text>
              </View>

              {/* About Section */}
              <View style = {{
                width: '100%', padding: 10, marginBottom: 20,
                borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10
              }}>
                  <Text style = {{
                    color: SECONDARY_COLOR, marginBottom: 5, marginTop: 5
                  }}>About :</Text>
                  <Text style = {{
                    color: 'gray',
                  }}>
                    {`- Computer Engineering Student (AIET)
- Entry-Level Software Engineer
- Backend and Mobile App. Developer`}
                  </Text>
              </View>

              {/* Reach me Section */}
              <View style = {{
                  width: '100%', padding: 10, marginBottom: 20,
                  borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10
                }}
              >
                  <Text style = {{
                    color: SECONDARY_COLOR, marginBottom: 5, marginTop: 5
                  }}>Reach me :</Text>

                  <View style = {{
                      width: '100%', flexDirection: 'row',
                      alignItems: 'center',
                  }}>
                      <TouchableOpacity
                        onPress = {async() => {
                          await Linking.openURL('https://www.linkedin.com/in/marwan-rashed/');
                        }}
                      >
                        <Image
                            source = {require('../assets/linkedin.png')}
                            style = {{
                              width: 50, height: 50, margin: 5
                            }}
                        />
                      </TouchableOpacity>
                      
                      <TouchableOpacity
                        onPress = {async() => {
                            await Linking.openURL('https://github.com/marwan-rashed');
                        }}
                      >
                        <Image
                            source = {require('../assets/github.png')}
                            style = {{
                              width: 50, height: 50, margin: 5
                            }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress = {async() => {
                          await Linking.openURL('https://twitter.com/MarwanRashed300');
                        }}
                      >
                        <Image
                            source = {require('../assets/twitter.png')}
                            style = {{
                              width: 50, height: 50, margin: 5
                            }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress = {async() => {
                          await Linking.openURL('https://www.facebook.com/marwan.rashed.97');
                        }}
                      >
                        <Image
                            source = {require('../assets/facebook.png')}
                            style = {{
                              width: 50, height: 50, margin: 5
                            }}
                        />
                      </TouchableOpacity>
                  </View>
              </View>
              
              {/* Touchable Sections */}
              <TouchableComponent title = { 'Work Experience' } onPress = {() => {navigation.navigate('Experience')}} />
              <TouchableComponent title = { 'Education' } onPress = {() => {navigation.navigate('Education')}} />
              <TouchableComponent title = { 'Projects' } onPress = {() => {navigation.navigate('Projects')}} />
              <TouchableComponent title = { 'Skills' } onPress = {() => {navigation.navigate('Skills')}} />
              <TouchableComponent title = {'Courses & Certifications'} onPress = {() => {navigation.navigate('Courses')}} />
              
              {/* Empty view as a marginBottom */}
              <View style = {{height: 20}}/>

        </ScrollView>
    </View>
  );
}

export default Home;
