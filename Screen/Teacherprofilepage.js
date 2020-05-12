import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, AsyncStorage } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { config } from '../config';

const options = {
  title: 'my pic app',
  takePhotoButtonTitle: 'Take photo With your Camra',
  chooseFromLibraryButtonTitle: 'choose photo from Gallary ',

}

const logo = require('../images/logo.jpeg'); //Apply Logo pic
class Teacherprofilepage extends React.Component {
  state = {
    user: null
  }

  constructor(props) {
    super(props)
    this.getUser().then(data => {
      console.log(data.user)
      this.setState({ user: data.user })
    })
  }


  getUser = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
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

  render() {
    const { navigation } = this.props;
    const { user } = this.state;
    return (
      <View >
        <ScrollView style={styles.main}>
          <View style={styles.lastBtn1} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => navigation.navigate('LoginScreen')} >
              <Text style={styles.buttonText1}>Logout</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Image
              style={styles.logo}
              styles={styles.BorderClass}
              source={logo}
            />
          </View>
          <View style={styles.header1}>
            <Text style={styles.header}>
              Welcome to {(user) ? user.userType === config.userType.student ? "Student" : "Teacher" : ""} Profile
            </Text>
          </View>


          <View style={styles.contain}>
            <TextInput placeholder="User Name" style={styles.input} value={(user) ? `${user.name.firstName} ${user.name.lastName}` : ""} />
            <TextInput placeholder="Email" style={styles.input} value={(user) ? `${user.emailAddress}` : ""} />
          </View>
          <View style={styles.contain1}>
            <TextInput placeholder="Contact no" style={styles.input} keyboardType='number-pad' maxLength={12} value={(user) ? `${user.phone}` : ""} />
            <TextInput placeholder="Age" style={styles.input} value={(user) ? `${user.age}` : ""} />
          </View>
          <View style={styles.contain1}>
            <TextInput placeholder="Profile Type" style={styles.input} editable={false} value={(user) ? `${user.userType === config.userType.student ? 'Student' : "Teacher"}` : ""} />
          </View>

          <View style={styles.lastBtn2} >
            <TouchableOpacity style={styles.buttonContainer2}
              onPress={() => { alert('Profile has been Updated.') }} >
              <Text style={styles.buttonText2}>Save Changes</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.lastBtn} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => { alert('Lecture Posted Successfully.') }} >
              <Text style={styles.buttonText1}>Post</Text>
            </TouchableOpacity>
          </View>

        </ScrollView >
        {(user) ? user.userType === config.userType.teacher ?
          <View style={styles.lastBtn} >
            <View style={styles.lastBtn5} >
              <TouchableOpacity style={styles.buttonContainer5}
                onPress={() => navigation.navigate((user) ? user.userType === config.userType.student ? "Studenthomepage" : "Teacherhomepage" : "")}>
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
                onPress={() => navigation.navigate((user) ? user.userType === config.userType.student ? "golive2" : "GoLive" : "")}>
                <Text style={styles.buttonText5}>Go Live</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={styles.lastButton} >
            <View style={styles.lastBtn5} >
              <TouchableOpacity style={styles.buttonContainer5}
                onPress={() => navigation.navigate('Studenthomepage')}>
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
          </View> : <React.Fragment />
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  lastButton: {
    flex: 3,
    flexDirection: 'row',
  },

  display: {
    color: '#0e08e1',
    fontSize: 16,
    fontWeight: 'bold',
  },

  main: {
    backgroundColor: 'white',
    height: '95.5%'
  },

  header1: {
    alignItems: 'center',
  },

  header: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#9a090c',
    borderRadius: 23,
    height: 85,
    width: 300,
    paddingLeft: '7%',
    paddingTop: 7,
    marginTop: 45,
    marginBottom: 30,
  },

  logo: {
    marginTop: 5,
    width: 210,
    height: 90,
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
    padding: 24,
    width: 400,
    borderRadius: 54,
    alignItems: 'flex-end',

  },
  contain1: {

    flex: 2,
    flexDirection: 'column',
    alignContent: 'center'
  },

  Btn: {
    padding: 16,
    width: 400,
    borderRadius: 54,
    alignItems: "center"
  },
  

  lastBtn: {
    flex: 1,
    flexDirection: 'row',
    width: 440,
    borderRadius: 54,
    justifyContent: 'space-between'
  },
  BorderClass:
  {
    // Setting up image width.
    width: 160,

    // Setting up image height.
    height: 160,

    // Set border width.
    borderWidth: 1,

    // Set border color.
    borderColor: '#F44336',
  },

  lastBtn1: {
    width: 90,
    height: 40,
    backgroundColor: '#348224',
    marginTop: 10,
    marginBottom: 40,
    marginLeft: '70%',
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

  lastBtn2: {
    width: 200,
    height: 40,
    backgroundColor: '#348224',
    marginTop: 40,
    marginBottom: 40,
    marginLeft: '25%',
    borderRadius: 6,
    justifyContent: 'center',
    paddingTop: 4,
  },

  buttonText2: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,

  },


  lastBtn: {
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
export default Teacherprofilepage;