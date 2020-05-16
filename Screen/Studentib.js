import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getChatList } from '../API/chatAPI';
import { getUserName } from '../API/userAPI';

import { NavigationContext } from '@react-navigation/native';
const logo = require('../images/std1.jpg');
const logo1 = require('../images/std2.jpg');
const logo2 = require('../images/std3.jpg');
const logo3 = require('../images/std4.jpg');

export default class Studentib extends React.Component {
  state = {
    text: '',
    inboxList: ''
  }

  getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  getUserInfo = (id) => {
    getUserName(id).then(res => {
      console.log(`${res.data.firstName} ${res.data.lastName}`)
      return `${res.data.firstName} ${res.data.lastName}`
    })
  }



  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.getData().then(res => {
      getChatList(res.user._id).then(chatData => {
        console.log(chatData.data)
        this.setState({ inboxList: chatData.data })
      }).catch(e => {
        alert(e)
      })
    })

    // getChatList().then()
    this.state = {
      text: '',
      demoArray: [
        {
          id: '1',
          name: "Student Name",
          subtitle: 'Text Initiate',
          btn: 'Del chat',
          image: logo,
          category: "Teacher"
        },
        {
          id: '2',
          name: "Student Name",
          subtitle: 'Text Initiate',
          btn: 'Del chat',
          image: logo1,
          category: "Teacher"
        },
        {
          id: '3',
          name: "Student Name",
          subtitle: 'Text Initiate',
          btn: 'Del chat',
          image: logo2,
          category: "Teacher"
        },
        {
          id: '4',
          name: "Student Name",
          subtitle: 'Text Initiate',
          btn: 'Del chat',
          image: logo3,
          category: "Teacher"
        },


      ],
      // demoArray:[{id:0,name:'Akhzar'},{id:1,name:'Abrar'}],
    };
  }


  render() {
    const navigation = this.context;

    return (
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>

          <View style={styles.body}>

            <View style={styles.sectionContainer}>
              <View>

                <Text style={{ fontSize: 25, alignContent: 'center' }}>Messages:</Text>
              </View>


              <FlatList
                data={this.state.inboxList}
                initialNumToRender={1}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <View style={{ flex: 0.9, height: 150, paddingRight: 6, paddingLeft: 6, paddingBottom: 3, paddingTop: 3, justifyContent: 'center', }}>
                    <TouchableOpacity style={{
                      justifyContent: 'center', elevation: 3,
                      height: 150, borderRadius: 4, padding: 4, shadowOpacity: 10, backgroundColor: 'white', shadowColor: 'black'
                    }}
                      onPress={() => navigation.navigate('inboxChat', item._id)}>
                      {/* First Apply image Code and View of Image in Flate List */}
                      <View style={{ flex: 1, flexDirection: 'row', width: 300 }}>
                        {/* Title Code Like Teacher Name */}
                        <View style={{ flex: 0.5, justifyContent: 'flex-start' }}>
                          <View style={{ flex: 0.3, justifyContent: 'flex-start' }}>
                            <Text style={{ color: '#000000', fontSize: 20, fontFamily: 'sans-serif', paddingBottom: 5 }}> {this.getUserInfo(item.members[1].member)} </Text>
                          </View>
                          {/* Subtitle Code Like  Text Initiate  */}
                          <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 5 }}>

                            <View style={{ alignItems: 'flex-start' }}>
                              <Text style={{ color: '#000000', fontSize: 15, }}>
                                {item.subtitle} </Text>
                            </View>
                          </View>
                        </View>

                        <TouchableOpacity>
                          <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                            <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'sans-serif', textAlign: 'right', color: '#9C27B0' }}>
                              {item.btn} </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </View>
                }
              />
            </View>
          </View>
        </SafeAreaView>
        {/* <View style={styles.lastBt} >
          <Button
            title="Notification"
            type="outline"
            onPress={() => navigation.navigate('Notificationstd')}
          />
          <Button
            title="Profile"
            type="outline"
            onPress={() => navigation.navigate('studentprofilepage')}
          />
        </View> */}
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  MainContainer:
  {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 5,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  lastBt: {
    flex: 1,
    flexDirection: 'row',
    width: 440,
    borderRadius: 54,
    justifyContent: 'space-around',
    padding: 30
  },

});


