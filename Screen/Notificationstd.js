

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
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContext } from '@react-navigation/native';
const logo = require('../images/std2.jpg');
const logo1 = require('../images/pc.jpg');
const logo2 = require('../images/test.jpg');
const logo3 = require('../images/Aj.jpg');

import { config } from '../config';


export default class Notificationstd extends React.Component {
  static contextType = NavigationContext;
  state = {
    text: '',
    demoArray: [

      {
        id: '1',
        name: "Teacher Name",
        subtitle: 'Request Approved for course , topic ',
        image: logo,
        category: "Teacher"
      },
      {
        id: '2',
        name: "Teacher Name",
        subtitle: 'Request Approved for course , topic ',
        image: logo1,
        category: "Teacher"
      },
      {
        id: '3',
        name: "Teacher Name",
        subtitle: 'Request Approved for course , topic ',
        image: logo2,
        category: "Teacher"
      },
      {
        id: '4',
        name: "Teacher Name",
        subtitle: 'Request Approved for course , topic ',
        image: logo3,
        category: "Teacher"
      },


    ],
  };


  constructor(props) {
    super(props);
    this.getUser().then(data => {
      console.log(data.user)
      this.setState({ user: data.user })
    })
  }

  getUser = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  render() {
    const navigation = this.context;
    const { user } = this.state;

    return (
      <View>
        <ScrollView style={styles.main}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>

            <View style={styles.body}>

              <View style={styles.sectionContainer}>
                <View>

                  <Text style={styles.heading}>Notifications</Text>
                </View>

                <FlatList
                  data={this.state.demoArray}
                  initialNumToRender={1}
                  extraData={this.state}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>



                    <View style={{ flex: 0.9, height: 150, paddingRight: 6, paddingLeft: 6, paddingBottom: 3, paddingTop: 3, justifyContent: 'center', }}>
                      <View style={{
                        justifyContent: 'center', elevation: 3,
                        height: 150, borderRadius: 4, padding: 4, shadowOpacity: 10, backgroundColor: 'white', shadowColor: 'black'
                      }}
                        onPress={() => this.rowSelected(item)}>


                        {/* First Apply image Code and View of Image in Flate List */}
                        <View style={{ flex: 1, flexDirection: 'row', }}>

                          <View style={styles.MainContainer}>



                            <Image source={item.image} style={{ width: 90, height: 90, borderRadius: 170 / 2 }} />

                          </View>
                          {/* Title Code Like Teacher Name */}
                          <View style={{ justifyContent: 'flex-start', marginLeft: 100, marginTop: 10, }}>

                            <Text style={{ color: '#000000', fontSize: 20, fontFamily: 'sans-serif', paddingBottom: 5 }}>
                              {item.name} </Text>

                            {/* Subtitle Code Like  Text Initiate  */}

                            <Text style={{ color: '#000000', fontSize: 15, marginRight: 80, }}>
                              {item.subtitle} </Text>



                            <TouchableOpacity style={styles.details}
                              onPress={() => navigation.navigate('golive2')}>
                              <View style={{ flex: 3, paddingTop: 3, }}>

                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: '#348224', }}>
                                  {item.btn}Details</Text>
                              </View>
                            </TouchableOpacity>

                          </View>
                        </View>
                      </View>
                    </View>
                  }
                />

              </View>

            </View>

          </SafeAreaView>
        </ScrollView>


        <View style={styles.lastButton} >
          <View style={styles.lastBtn5} >
            <TouchableOpacity style={styles.buttonContainer5}
              onPress={() => navigation.navigate((user) ? user.userType === config.userType.student ? "Studenthomepage" : "Teacherhomepage" : "")}>
              <Text style={styles.buttonText5}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn5} >
            <TouchableOpacity style={styles.buttonContainer5}
              onPress={() => navigation.navigate('Teacherprofilepage')}>
              <Text style={styles.buttonText5}>Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn5} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => navigation.navigate('Studentinbox')}>
              <Text style={styles.buttonText5}>Inbox</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn6} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => navigation.navigate('Notificationstd')}>
              <Text style={styles.buttonText5}>Notifications</Text>
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

  heading: {
    fontSize: 28,
    alignContent: 'center',
    marginLeft: '20%',
    backgroundColor: '#9a090c',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 45,
    width: '48%',
    height: 60,
    borderRadius: 31,
    textAlign: 'left',
    paddingTop: 8,
    paddingLeft: '7%',
  },

  sectionContainer: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },

  MainContainer:
  {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 5,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  details: {
    width: 70,
    height: 33,
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: '#348224',
    alignContent: 'flex-end',
    marginTop: 12,
    marginLeft: '60%'
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

  lastButton: {
    flex: 3,
    flexDirection: 'row',
  },

  lastBtn5: {
    width: 90,
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
    width: 150,
    height: 53,
    backgroundColor: '#9a090c',
    justifyContent: 'center',
    paddingTop: 4,
    paddingRight: 25,
    paddingLeft: 15,

  },

});


