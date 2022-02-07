import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
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
              borderColor: SECONDARY_COLOR, borderWidth: 0.5
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
              color: SECONDARY_COLOR, fontSize: 20,
              marginTop: 10
            }}>Entry-Level Software Engineer</Text>
          </View>
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
            borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10
          }}>
              <Text style = {{
                color: SECONDARY_COLOR, marginBottom: 5
              }}>Full Name :</Text>
              <Text>Marwan Mohamed Mohamed Rashed</Text>
              <Text style = {{
                color: SECONDARY_COLOR, marginBottom: 5, marginTop: 5
              }}>Email :</Text>
              <Text>marwanrashed300@gmail.com</Text>
              <Text style = {{
                color: SECONDARY_COLOR, marginBottom: 5, marginTop: 5
              }}>Mobile :</Text>
              <Text>+20 115 410 3808</Text>
              <Text>+20 114 380 4555</Text>
          </View>
          <View style = {{
            width: '100%', padding: 10, marginBottom: 20,
            borderWidth: 1, borderColor: SECONDARY_COLOR, borderRadius: 10
          }}>

          </View>
        </ScrollView>
    </View>
  );
}

export default Home;
