import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  CheckBox,
  AsyncStorage
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { Button } from 'react-native-elements'
import { getRequestList } from '../API/lectureAPI';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const logo = require('../images/std4.jpg');
const logo1 = require('../images/pc.jpg');
const logo2 = require('../images/test.jpg');
const logo3 = require('../images/Aj.jpg');
import { config } from '../config'

const { status } = config
export default class Request extends React.Component {
  static contextType = NavigationContext;
  state = {
    requestList: []
  }

  getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  componentDidMount() {
    this.getData().then(res => {
      getRequestList(res.user._id).then(list => {
        this.setState({
          requestList: list.data
        })
      })
    })
  }


  render() {
    const navigation = this.context;
    return (
      <View>
        <React.Fragment>
          <ScrollView style={styles.main}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.body}>

              <View style={styles.sectionContainer}>
                <View>

                  <Text style={styles.heading}>Requests</Text>
                </View>

                <FlatList
                  data={this.state.requestList}
                  initialNumToRender={1}
                  extraData={this.state}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View style={{ flex: 0.9, height: 175, paddingRight: 6, paddingLeft: 6, paddingBottom: 3, paddingTop: 3, justifyContent: 'center', }}>
                      <View style={{
                        justifyContent: 'center', elevation: 3,
                        height: 175, borderRadius: 4, padding: 4, shadowOpacity: 10, backgroundColor: 'white', shadowColor: 'black'
                      }}>
                        {/* First Apply image Code and View of Image in Flate List */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <View style={styles.MainContainer}>
                            <Text style={{ width: 150, fontSize: 25 }}>{item.sender.name}</Text>
                            <Text style={{ width: 150, fontSize: 15 }}>{item.lecture.course}</Text>
                            <Text style={{ width: 150, fontSize: 15 }}>{item.lecture.topic}</Text>
                            <Text style={{ width: 150, fontSize: 15 }}>Status: {status[item.status]}</Text>
                          </View>
                          {/* Title Code Like Teacher Name */}
                          <View style={{ justifyContent: 'flex-start', height: 100, marginLeft: 60 }}>
                            <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', fontFamily: 'sans-serif', paddingBottom: 5, marginLeft: 40, marginTop: 10 }}>
                              {item.name} </Text>
                            <Text style={{ color: '#000000', fontSize: 16, marginLeft: 40 }}>
                              {item.subtitle} </Text>
                          </View>
                          <TouchableOpacity style={styles.accept}>
                            <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                              <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', padding: 10, fontFamily: 'sans-serif', textAlign: 'center' }}>
                                {item.btn} Accept </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.decline}>
                            <View style={{ flex: 3, justifyContent: 'flex-end' }}>

                              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, padding: 8, fontFamily: 'sans-serif', textAlign: 'center', }}>
                                {item.btn1} Decline</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  }
                />
              </View>
            </View>

          </ScrollView>
        </React.Fragment>
        <View style={styles.lastBtn4} >
          <View style={styles.lastBtn5} >
            <TouchableOpacity style={styles.buttonContainer5}
              onPress={() => navigation.navigate('Teacherhomepage')}>
              <Text style={styles.buttonText5}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn6} >
            <TouchableOpacity style={styles.buttonContainer5}
              onPress={() => navigation.navigate('Teacherprofilepage')}>
              <Text style={styles.buttonText5}>Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn7} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => navigation.navigate('Request')}>
              <Text style={styles.buttonText5}>Requests</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn8} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => navigation.navigate('Studentinbox')}>
              <Text style={styles.buttonText5}>Inbox</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.lastBtn9} >
            <TouchableOpacity style={styles.buttonContainer5}
              onPress={() => navigation.navigate('GoLive')}>
              <Text style={styles.buttonText5}>Go Live</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


    );
  }
}


const styles = StyleSheet.create({
  main: {
    height: '95.5%',
  },

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

  heading: {
    fontSize: 28,
    alignContent: 'center',
    marginLeft: '23%',
    backgroundColor: '#9a090c',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 40,
    width: '45%',
    height: 60,
    borderRadius: 33,
    textAlign: 'left',
    paddingTop: 8,
    paddingLeft: '12%',
  },

  sectionContainer: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 0,
  },

  accept: {
    flexDirection: 'row',
    width: 80,
    height: 40,
    marginTop: 120,
    borderRadius: 5,
    borderColor: 'red',
    justifyContent: 'space-around',
    backgroundColor: '#348224',
    paddingBottom: 1,
    marginLeft: -49,
  },

  decline: {
    flexDirection: 'row',
    width: 80,
    height: 40,
    marginTop: 120,
    borderRadius: 5,
    borderColor: 'red',
    justifyContent: 'space-around',
    backgroundColor: '#cb2525',
    marginLeft: 20,
    paddingBottom: 1,
    marginRight: 20
  },

  lastBtn4: {
    flex: 3,
    flexDirection: 'row',
  },

  lastBtn5: {
    width: 78,
    height: 53,
    backgroundColor: '#9a090c',
    justifyContent: 'center',
    paddingTop: 4,
  },

  buttonText5: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  lastBtn6: {
    width: 80,
    height: 53,
    backgroundColor: '#9a090c',
    paddingTop: 12,
  },

  lastBtn7: {
    width: 93,
    height: 53,
    backgroundColor: '#9a090c',
    justifyContent: 'center',
    paddingTop: 4,
  },

  lastBtn8: {
    width: 69,
    height: 53,
    backgroundColor: '#9a090c',
    justifyContent: 'center',
    paddingTop: 4,
  },
  lastBtn9: {
    width: 93,
    height: 53,
    backgroundColor: '#9a090c',
    justifyContent: 'center',
    paddingTop: 4,
  },
});


