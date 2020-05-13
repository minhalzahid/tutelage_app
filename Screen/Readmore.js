import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
const logo = require('../images/log.jpeg');

class Readmore extends React.Component {

  static contextType = NavigationContext;
  state = {
    checked: 'Null',
    lecture: this.props.route.params
  };



  render() {
    const navigation = this.context;



    return (
      <ScrollView>
        <React.Fragment>
          {console.log(this.props.route.params)}
          <TouchableHighlight
            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
          >
            <Image source={logo} style={styles.profileImg} />
          </TouchableHighlight>
          <View style={styles.contain}>
            <TextInput placeholder="Teacher Name" style={styles.input} editable={false} />
            <TextInput placeholder="Course/Subject" style={styles.input} value={this.state.lecture.course} editable={false} />
            <TextInput placeholder="Topic Name" style={styles.input} value={this.state.lecture.topic} editable={false} />
          </View>
          <View><Text style={styles.description}>Description</Text></View>
          <View style={styles.MainContainer}>
            <TextInput
              editable={false}
              value={this.state.lecture.description}
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Type Something in Text Area."}
              placeholderTextColor={"#9E9E9E"}
              numberOfLines={5}
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
              <Text style={{ fontSize: 16, }}> Online </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '20%', }}>
              <RadioButton
                value="offlinechecked"
                status={this.state.checked === 'offlinechecked' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'offlinechecked' }); }}
              />
              <Text style={{ fontSize: 16, }}> Offline</Text>
            </View>

          </View>
          <View><Text style={styles.venue}>Venue</Text></View>
          <View style={styles.MainContainer}>
            <TextInput
              editable={false}
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Type about Venue."}
              placeholderTextColor={"#9E9E9E"}
              numberOfLines={5}
              multiline={true}
            />
          </View>



          <View style={styles.lastBtn} >
            <View style={styles.lastBtn1} >
              <TouchableOpacity style={styles.buttonContainer1}
                onPress={() => navigation.navigate('chat')} >
                <Text style={styles.buttonText1}>Chat</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.lastBtn2} >
              <TouchableOpacity style={styles.buttonContainer2}
                onPress={() => { alert('Request Sent Successfully!') }} >
                <Text style={styles.buttonText1}>Attend</Text>
              </TouchableOpacity>
            </View>

          </View>




        </React.Fragment>

      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,


  },
  input: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    borderBottomWidth: 1,
  },
  contain: {
    flex: 1,
  },

  lastBtn1: {
    width: 90,
    height: 40,
    backgroundColor: '#348224',
    marginTop: 40,
    marginBottom: 40,
    marginLeft: '100%',
    borderRadius: 13,
    paddingTop: 6,
    marginRight: 100,
  },

  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  lastBtn2: {
    width: 90,
    height: 40,
    backgroundColor: '#348224',
    marginLeft: '95%',
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 13,
    paddingTop: 6,
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

  description: {
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 15,
    marginBottom: 7,

  },

  Btn: {
    padding: 16,
    width: 400,
    borderRadius: 50,
    alignItems: "center"
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

  lastBtn: {
    flex: 1,
    flexDirection: 'row',
    width: 200,
    borderRadius: 54,
    justifyContent: 'space-around'
  },

  Image: {
    padding: 24,
    width: 400,
    borderRadius: 54,


  },
  profileImgContainer: {
    marginLeft: 15,
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: 'flex-end',
    marginTop: 12,
  },

  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },

})
export default Readmore;

// ... other code from the previous section