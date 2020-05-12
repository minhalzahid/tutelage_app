
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
  AsyncStorage
} from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContext } from '@react-navigation/native';
import { getMyLectures } from '../API/lectureAPI';

export default class mylectures extends React.Component {
  static contextType = NavigationContext;
  state = {
    text: '',
    demoArray: [

      {
        id: '1',
        name: "Topic Name",
        subtitle: 'Topic details...',
        category: "Teacher"
      },
      {
        id: '2',
        name: "Topic Name",
        subtitle: 'Topic details...',
        category: "Teacher"
      },
      {
        id: '3',
        name: "Topic Name",
        subtitle: 'Topic details...',
        category: "Teacher"
      },
      {
        id: '4',
        name: "Topic Name",
        subtitle: 'Topic details...',
        category: "Teacher"
      },

      {
        id: '5',
        name: "Topic Name",
        subtitle: 'Topic details...',
        category: "Teacher"
      },
      {
        id: '6',
        name: "Topic Name",
        subtitle: 'Topic Details...',
        category: "Teacher"
      },


    ],
    lectures: []
  };

  constructor(props) {
    super(props);
  }

  getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  componentDidMount(){
    this.getData().then(res => {
      getMyLectures(res.user._id).then(lectures => {
        // console.log(lectures.data)
        this.setState({lectures: lectures.data})
      })
    })
  }


  render() {
    const navigation = this.context;

    return (
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        <View style={styles.body}>

          <View style={styles.sectionContainer}>


            <View style={styles.header1}>
              <Text style={styles.header}>
                Lecture History
              </Text>
            </View>

            <FlatList style={styles.list}
              data={this.state.lectures}
              initialNumToRender={1}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <View style={{ flex: 0.9, height: 130, justifyContent: 'center', borderTopsWidth: 3, borderColor: 'black' }}>
                  <View style={{
                    justifyContent: 'center', elevation: 3,
                    height: 150, borderRadius: 4, padding: 4, shadowOpacity: 10, backgroundColor: 'white', shadowColor: 'black'
                  }}>

                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', }}>
                      {console.log(item)}
                      {/* Title Code Like Teacher Name */}
                      <View style={{ justifyContent: 'flex-start' }}>

                        <Text style={{ color: '#605a5a', fontWeight: 'bold', fontSize: 20, fontFamily: 'sans-serif', paddingBottom: 5, paddingLeft: 9, marginTop: 20, }}>
                          ({item.course}) {item.topic} </Text>

                        <Text style={{ color: '#000000', fontSize: 17, paddingLeft: 9, marginTop: 10, }}>
                          {item.description} </Text>
                      </View>


                    </View>

                  </View>
                </View>
              }
            />
          </View>

        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },

  body: {
    backgroundColor: 'white',
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
    width: '45%',
    height: 60,
    borderRadius: 31,
    textAlign: 'left',
    paddingTop: 8,
    paddingLeft: '11%',
  },

  header1: {
    alignItems: 'center',
    padding: 15,
    marginTop: 2,
  },

  header: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#9a090c',
    borderRadius: 23,
    height: 50,
    width: 230,
    paddingLeft: '8%',
    paddingTop: 7,
    marginBottom: 30,
  },

  sectionContainer: {
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },

  del: {
    marginLeft: 120,
    marginTop: 10
  },

  MainContainer:
  {
    ///flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 5,
  },

  lastBtn5: {
    width: 90,
    height: 40,
    backgroundColor: '#348224',
    marginBottom: 40,
    marginLeft: '70%',
    borderRadius: 6,
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

  buttonContainer5: {
    backgroundColor: 'white',
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

  MainContainer3: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
  },

  TextInputStyleClass3: {
    textAlign: 'left',
    height: 50,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    fontSize: 20,

  },
});

