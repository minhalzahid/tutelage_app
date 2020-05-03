import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, Picker } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { NavigationContext } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { signUp } from '../API/authAPI';
import { config } from '../config';

const options = {
  title: 'Choose Profile Photo',
  takePhotoButtonTitle: 'From Camra',
  chooseFromLibraryButtonTitle: 'From Gallary ',
}



const logo = require('../images/logo.jpeg'); //Apply Logo pic
class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  myfun = () => {

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });

  }


  static contextType = NavigationContext;

  state = {
    firstName: "",
    lastName: "",
    age: 18,
    emailAddress: "",
    country: "Pakistan",
    nationality: "Pakistan",
    phone: 0,
    gender: 0,
    userType: 0,
    username: "",
    password: ""
  };


  render() {
    const navigation = this.context;
    return (
      <ScrollView style={styles.main}>
        <React.Fragment>
          <View style={{ padding: 35, paddingBottom: 10 }}>
            <Text style={styles.select}> Select One of the folllowing:</Text>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  style={styles.tlogo}
                  source={require('../images/teacher.jpg')}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="teacherChecked"
                    status={this.state.userType === 0 ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ userType: 1 }); }}
                  />
                  <Text style={{ marginRight: 30 }}>
                    Teacher Account
                  </Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  style={styles.tlogo}
                  source={require('../images/student.jpg')}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="studentChecked"
                    status={this.state.userType === 1 ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ userType: 0 }); }}
                  />
                  <Text> Student Account</Text>
                </View>
              </View>

            </View>
          </View>
          <View style={styles.contain}>
            <TextInput placeholder="First Name" style={styles.input}
              value={this.state.firstName}
              onChange={(e) => {
                this.setState({
                  firstName: e.nativeEvent.text
                })
              }}
            />
            <TextInput placeholder="Last Name" style={styles.input}
              value={this.state.lastName}
              onChange={(e) => {
                this.setState({
                  lastName: e.nativeEvent.text
                })
              }}
            />
          </View>

          <View style={styles.contain}>
            <TextInput placeholder="Email" style={styles.input}
              value={this.state.emailAddress}
              onChange={(e) => {
                this.setState({
                  emailAddress: e.nativeEvent.text
                })
              }}
            />

            <TextInput placeholder="Contact No" style={styles.input} value={this.state.phone}
              onChange={(e) => {
                this.setState({
                  phone: e.nativeEvent.text
                })
              }} keyboardType='number-pad' maxLength={12} />
          </View>


          <View style={styles.contain1}>
            <TextInput placeholder="Age" value={this.state.age}
              style={styles.input}
              keyboardType='number-pad'
              onChange={(e) => {
                this.setState({
                  age: e.nativeEvent.text
                })
              }}
            />
            <Picker
              selectedValue={this.state.country}
              style={styles.input}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({
                  country: itemValue
                })
              }}
            >
              {config.country.map(x => {
                return (
                  <Picker.Item label={x.Name} value={x.Name} />
                )
              })}
            </Picker>
          </View>

          <View style={styles.contain}>
            <Picker
              selectedValue={this.state.nationality}
              style={styles.input}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({
                  nationality: itemValue
                })
              }}
            >
              {config.country.map(x => {
                return (
                  <Picker.Item label={x.Name} value={x.Name} />
                )
              })}
            </Picker>
            <Picker
              selectedValue={this.state.gender}
              style={styles.input}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({
                  gender: itemValue
                })
              }}
            >
              <Picker.Item label="Male" value={0} />
              <Picker.Item label="Female" value={1} />
              <Picker.Item label="Other" value={2} />
            </Picker>

          </View>



          <View style={styles.contain1}>
            <TextInput placeholder="Username" style={styles.input}
              value={this.state.username}
              onChange={(e) => {
                this.setState({
                  username: e.nativeEvent.text
                })
              }}
            />
            <TextInput placeholder="Password" style={styles.input} value={this.state.password}
              onChange={(e) => {
                this.setState({
                  password: e.nativeEvent.text
                })
              }} secureTextEntry={true} />
          </View>

          <View style={styles.BtnSignUp}>
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => {
                console.log(this.state)
                signUp(this.state).then(res => {
                  console.log(res.data)
                  if (res.data.userType === 0) {
                    navigation.navigate('Studenthomepage')
                  } else {
                    navigation.navigate('Teacherhomepage')
                  }
                }).catch(e => {
                  console.log(e.response.data)
                  alert((e.response.data.message) ? e.response.data.message : e.response.data)
                })
              }} >
              <Text style={styles.buttonText1}>Sign Up</Text>
            </TouchableOpacity>
          </View>


        </React.Fragment>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  main: {
    backgroundColor: 'white',
  },

  logo: {
    marginTop: 15,
    width: 210,
    height: 90,
  },
  tlogo: {
    width: 80,
    height: 80,
    marginTop: 15,
  },
  logo1: {
    width: 80,
    height: 80,
    margin: 10,
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
  Image: {

    padding: 16,
    width: 400,
    borderRadius: 54,
    alignItems: 'flex-end',

  },
  display: {
    color: '#0e08e1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  select: {
    marginTop: 15,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contain1: {

    flex: 2,
    flexDirection: 'column',
    alignContent: 'center'
  },
  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  BtnSignUp: {
    width: 400,
    color: '#194D33',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer1: {
    backgroundColor: '#9a090c',
    padding: 15,
    width: 110,
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  }
})

export default SignUpScreen;