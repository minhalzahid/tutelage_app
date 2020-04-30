import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'my pic app',
  takePhotoButtonTitle: 'Take photo With your Camra',
  chooseFromLibraryButtonTitle: 'choose photo from Gallary ',

}

const logo = require('../images/logo.jpeg'); //Apply Logo pic
function Teacherprofilepage({ navigation }) {
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

  return (
    <ScrollView style={styles.main}>
      <React.Fragment>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            styles={styles.BorderClass}
            source={logo}
          />
        </View>
        <View style={styles.header1}>
          <Text style={styles.header}>
            Welcome to Teacher Profile !
          </Text>
        </View>
        <TouchableOpacity onPress={this.myfun}>
          <View style={styles.Image}>
            <Text > Change Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contain}>
          <TextInput placeholder="User Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View style={styles.contain1}>
          <TextInput placeholder="Contact no" style={styles.input} keyboardType='number-pad' maxLength={12} />
          <TextInput placeholder="Age" style={styles.input} />
        </View>
        <View style={styles.contain1}>
          <TextInput placeholder="password" style={styles.input} secureTextEntry={true} />
        </View>
        <View style={styles.contain1}>
          <TextInput placeholder="Profile Type-Teacher Account" style={styles.input} editable={false} />
        </View>
        <View style={styles.Btn}>
          <TouchableOpacity>
            <Button
              title="Save Change"
              type="outline"
              onPress={() => navigation.navigate('Teacherprofilepage')}
            />
          </TouchableOpacity>

        </View>
        <View style={styles.lastBtn1} >
          <TouchableOpacity style={styles.buttonContainer1}
            onPress={() => navigation.navigate('LoginScreen')} >
            <Text style={styles.buttonText1}>Logout</Text>
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
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },

  main: {
    backgroundColor: 'white',
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
    borderRadius: 9,
    height: 85,
    width: 300,
    paddingLeft: '7%',
    paddingTop: 7,
    marginTop: 45,
    marginBottom: 30,
  },

  logo: {
    marginTop: 15,
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


});
export default Teacherprofilepage;