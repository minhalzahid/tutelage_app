import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';
import { createLecture } from '../API/lectureAPI';
import { config } from '../config';
import socketIOClient from 'socket.io-client';

let socket = socketIOClient(`http://192.168.0.106:5252`);
class Teacherhomepage extends React.Component {
  static contextType = NavigationContext;

  state = {
    checked: 'Null',
    course: '',
    topic: '',
    description: '',
    schedule: [],
    link: 'www.tutlage/link',
    default: {
      checked: 'Null',
      course: '',
      topic: '',
      description: '',
      schedule: []
    }
  };

  getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  componentDidMount(){
    this.getData().then(res => {
      console.log(res.user._id)
      this.setState({
        token_id: res.user._id,
        user: res.user
      }, () => {
        let socket_packet = {
          name: this.state.user.name.firstName,
          token_id: this.state.token_id
        }
        socket.emit('add-user', socket_packet)
      })
    })
    // this.setState({
    //   token_id
    // }, () => {
  
      // var socket_packet = {
      //   token_id: t
      // };
      // socket.emit('add-user', socket_packet);    
    // })
  }
  
  logout = async () => {
    const _navigation = this.context;

    socket.emit('disconnect')
    await AsyncStorage.clear()
    _navigation.navigate('LoginScreen')

  }

  

  render() {
    const navigation = this.context;
    this.getData().then(user => {
      if (!user) {
        navigation.navigate('LoginScreen')
      } else if (user.userType === config.userType.student) {
        navigation.navigate('Studenthomepage')
      }
    });

    return (
      <ScrollView style={styles.main}>
        <React.Fragment>
          <View style={{ justifyContent: 'center', marginTop: 30, marginLeft: 20 }}>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => {
                this.logout()
              }}
            >
              <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', padding: 15 }}>
            <Text style={styles.header}>
              Post new Lecture !
            </Text>
          </View>
          <View style={styles.contain}>
            <TextInput placeholder="Course/Subject" value={this.state.course}
              onChange={(e) => {
                this.setState({
                  course: e.nativeEvent.text
                })
              }}
              style={styles.input} />
            <TextInput placeholder="Topic Name" value={this.state.topic}
              onChange={(e) => {
                this.setState({
                  topic: e.nativeEvent.text
                })
              }}
              style={styles.input} />
          </View>
          <View>
            <Text style={styles.description}>
              Decription
            </Text>
          </View>
          <View style={styles.MainContainer}>
            <TextInput
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Type Something...."}
              placeholderTextColor={"#9E9E9E"}
              numberOfLines={5}
              value={this.state.description}
              onChange={(e) => {
                this.setState({
                  description: e.nativeEvent.text
                })
              }}
              multiline={true}
            />
          </View>
          <View >
            <Text style={styles.select}> Select One of the folllowing:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '20%', }}>
              <RadioButton
                value="onlineChecked"
                status={this.state.checked === 'onlineChecked' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'onlineChecked' }); }}
              />
              <Text style={{ fontSize: 16, }}> Online</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '20%', }}>
              <RadioButton
                value="offlineChecked"
                status={this.state.checked === 'offlineChecked' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'offlineChecked' }); }}
              />
              <Text style={{ fontSize: 16, }}> Offline</Text>
            </View>

          </View>
          <View><Text style={styles.venue}>Venue</Text>
            <View style={styles.MainContainer}>
              <TextInput
                style={styles.TextInputStyleClass2}
                underlineColorAndroid="transparent"
                placeholder={"Type about Venue."}
                placeholderTextColor={"#9E9E9E"}
                numberOfLines={5}
                multiline={true}
              />
            </View>
          </View>

          <View style={styles.lastBtn1} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => {
                console.log(this.state)
                createLecture(this.state.course, this.state.topic, this.state.description, this.state.schedule, this.state.link).then(res => {
                  alert("lecture Created !")
                  this.setState({
                    ...this.state.default
                  })
                }).catch(e => {
                  alert((e.response.data.message) ? e.response.data.message : e.response.data)
                })
              }} >
              <Text style={styles.buttonText1}>Post</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.lastBtn} >
            <Button
              title="Post Lecture"
              type="outline"
              onPress={() => navigation.navigate('Teacherhomepage')}
            />
            <Button
              title="Profile"
              type="outline"
              onPress={() => navigation.navigate('Teacherprofilepage')}
            />
            <Button
              title="Inbox"
              type="outline"
              onPress={() => navigation.navigate('Teacherinbox')}
            />
            <Button
              title="Requests"
              type="outline"
              onPress={() => navigation.navigate('Request')}
            />

            <Button
              title="Go Live"
              type="outline"
              onPress={() => navigation.navigate('GoLive')}
            />
          </View>
        </React.Fragment>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#9a090c',
    borderRadius: 9,
    height: 50,
    width: 260,
    paddingLeft: '7%',
    paddingTop: 7,
    marginTop: 45,
    marginBottom: 30,
  },

  main: {
    backgroundColor: 'white',
  },

  text: {
    fontSize: 20,
    padding: 10,
  },

  description: {
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 15,
    marginBottom: 7,

  },

  input: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    borderRadius: 7,
    fontSize: 18,
    fontWeight: '500',
    borderBottomWidth: 1,
    textAlign: 'left',
  },
  contain: {
    flex: 1,
  },
  MainContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,

  },
  TextInputStyleClass: {

    textAlign: 'left',
    height: 150,
    borderWidth: 2,
    borderColor: '#9E9E9E',
    borderRadius: 20,
    backgroundColor: "#FFFFFF",

  },

  lastBtn1: {
    width: 90,
    height: 40,
    backgroundColor: '#9a090c',
    marginTop: 40,
    marginBottom: 40,
    marginLeft: '40%',
    borderRadius: 6,
    justifyContent: 'center',
    paddingTop: 4,
  },

  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,


  },

  TextInputStyleClass2: {

    textAlign: 'left',
    height: 100,
    borderWidth: 2,
    borderColor: '#9E9E9E',
    borderRadius: 20,
    backgroundColor: "#FFFFFF",

  },

  select: {
    marginTop: 30,
    fontSize: 18,
    marginLeft: 12,
    marginBottom: 5,
  },

  venue: {
    marginTop: 30,
    fontSize: 18,
    marginLeft: 17,
    marginBottom: 5,
  },

  Btn: {
    padding: 16,
    width: 400,
    borderRadius: 50,
    alignItems: "center"
  },


  lastBtn: {
    flex: 1,
    flexDirection: 'row',
    width: 440,
    borderRadius: 54,
    justifyContent: 'space-around'
  }

})
export default Teacherhomepage;