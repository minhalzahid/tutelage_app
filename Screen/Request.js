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
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { Button } from 'react-native-elements'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const logo = require('../images/umi.jpg');
const logo1 = require('../images/pc.jpg');
const logo2 = require('../images/test.jpg');
const logo3 = require('../images/Aj.jpg');
export default class Request extends React.Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      demoArray: [

        {
          id: '1',
          name: "Student Name",
          subtitle: 'Topic name',
          btn: 'Accept',
          btn1: 'Reject',
          image: logo,
          category: "Teacher"
        },
        {
          id: '2',
          name: "Student Name",
          subtitle: 'Topic name',
          btn: 'Accept',
          btn1: 'Reject',
          image: logo1,
          category: "Teacher"
        },
        {
          id: '3',
          name: "Student Name",
          subtitle: 'Topic name',
          btn: 'Accept',
          btn1: 'Reject',
          image: logo2,
          category: "Teacher"
        },
        {
          id: '4',
          name: "Student Name",
          subtitle: 'Topic name',
          btn: 'Accept',
          btn1: 'Reject',
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

      <React.Fragment>
        <ScrollView>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>

            <View style={styles.body}>

              <View style={styles.sectionContainer}>
                <View>

                  <Text style={{ fontSize: 25, alignContent: 'center' }}>Request:</Text>
                </View>

                <FlatList
                  data={this.state.demoArray}
                  initialNumToRender={1}
                  extraData={this.state}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>



                    <View style={{ flex: 0.9, height: 175, paddingRight: 6, paddingLeft: 6, paddingBottom: 3, paddingTop: 3, justifyContent: 'center', }}>
                      <TouchableOpacity style={{
                        justifyContent: 'center', elevation: 3,
                        height: 175, borderRadius: 4, padding: 4, shadowOpacity: 10, backgroundColor: 'white', shadowColor: 'black'
                      }}
                        onPress={() => this.rowSelected(item)}>


                        {/* First Apply image Code and View of Image in Flate List */}
                        <View style={{ flex: 1, flexDirection: 'row', width: 300 }}>

                          <View style={styles.MainContainer}>



                            <Image source={item.image} style={{ width: 90, height: 90, borderRadius: 170 / 2 }} />

                          </View>
                          {/* Title Code Like Teacher Name */}
                          <View style={{ flex: 0.6, justifyContent: 'flex-start' }}>
                            <View style={{ flex: 0.3, justifyContent: 'flex-start' }}>
                              <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Roboto-Regular', paddingBottom: 5 }}>
                                {item.name} </Text>

                            </View>
                            {/* Subtitle Code Like  Text Initiate  */}
                            <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 5 }}>

                              <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: '#000000', fontSize: 13, }}>
                                  {item.subtitle} </Text>
                              </View>
                            </View>
                          </View>

                          <TouchableOpacity>
                            <View style={{ flex: 3, justifyContent: 'flex-end' }}>

                              <Text style={{ color: '#000000', fontSize: 15, padding: 10, fontFamily: 'noore-huda', textAlign: 'right', color: '#9C27B0' }}>
                                {item.btn} </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View style={{ flex: 3, justifyContent: 'flex-end' }}>

                              <Text style={{ color: '#000000', fontSize: 15, padding: 10, fontFamily: 'noore-huda', textAlign: 'right', color: '#9C27B0' }}>
                                {item.btn1} </Text>
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
          <View style={styles.lastBtn} >




            <Button

              title="Post
                  Lecture"
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
              onPress={() => navigation.navigate('')}
            />

            <Button

              title="Go Live"
              type="outline"
              onPress={() => navigation.navigate('GoLive')}
            />



          </View>

        </ScrollView>
      </React.Fragment>


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
  lastBtn: {
    flexDirection: 'row',
    width: 440,
    borderRadius: 54,
    justifyContent: 'space-around',
  }

});


