import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, AsyncStorage } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { NavigationContext } from '@react-navigation/native';
import { login } from '../API/authAPI';

const logo = require('../images/logo.jpeg');
class LoginScreen extends React.Component {
  static contextType = NavigationContext;

  state = {
    checked: 'Null',
    username: '',
    password: ''
  };

  setData = async (res) => {
    const _navigation = this.context;
    await AsyncStorage.setItem("user", JSON.stringify(res.data))
    if (res.data.user.userType === 1) {
      _navigation.navigate('Studenthomepage')
    } else if (res.data.user.userType === 0) {
      _navigation.navigate('Teacherhomepage')
    }
  }

  getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  render() {
    const navigation = this.context;
    this.getData().then(user => {
      if (user) {
        if (user.userType === 0) {
          navigation.navigate('Studenthomepage')
        } else if (user.userType === 1) {
          navigation.navigate('Teacherhomepage')
        }
      }
    });


    return (
      <ScrollView style={styles.main}>
        <React.Fragment>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={logo}
            />
          </View>
          <View>

            <TextInput
              placeholder="Username"
              style={styles.TextStyle}
              value={this.state.username}
              onChange={(e) => {
                this.setState({
                  username: e.nativeEvent.text
                })
              }}
            />
            <TextInput
              placeholder="Password"
              style={styles.TextStyle}
              value={this.state.password}
              onChange={(e) => {
                this.setState({
                  password: e.nativeEvent.text
                })
              }}
              secureTextEntry={true} />
          </View>
          {/* <View style={{ padding: 35, paddingBottom: 10 }}>
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
                    status={this.state.checked === 'teacherChecked' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'teacherChecked' }); }}
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
                    status={this.state.checked === 'studentChecked' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'studentChecked' }); }}
                  />
                  <Text> Student Account</Text>
                </View>
              </View>

            </View>
          </View> */}

          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => {
                if (this.state.username === '' || this.state.password === '') {
                  alert('Please fill out the form')
                }
                login(this.state.username, this.state.password).then((res) => {
                  this.setData(res)
                }).catch(e => {
                  alert("Invalid username or password")
                })
              }}

            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BtnSignUp}>
            <Text style={{ marginLeft: '32%', marginBottom: 5, marginTop: 35, fontSize: 15.5, }}>Don't Have an Account ? </Text>
            <TouchableOpacity style={styles.buttonContainer1} onPress={() => navigation.navigate('SignUpScreen')} >
              <Text style={styles.buttonText1}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer1} onPress={() => navigation.navigate('Forgetpass')} >
              <Text style={styles.buttonText2}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

  main: {
    backgroundColor: 'white',
  },

  container: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    marginTop: 50,
    width: 210,
    height: 90,
  },
  tlogo: {
    width: 80,
    height: 80,
    marginTop: 15,
  },

  TextStyle:
  {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  select: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: '#9a090c',
    borderRadius: 8,
    height: 45,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',

  },

  buttonText1: {
    textAlign: 'center',
    color: '#9a090c',
    fontWeight: 'bold',
    fontSize: 16.5,
    marginBottom: 10,

  },
  buttonText2: {
    textAlign: 'center',
    color: '#9a090c',
    fontWeight: 'bold',
    fontSize: 16.5

  },
  BtnSignUp: {
    width: 400,
    color: '#194D33',
  },
  forgetbtn: {
    flex: 4,
  }

})
export default LoginScreen;

// ... other code from the previous section