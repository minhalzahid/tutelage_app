import * as React from 'react';
import { View, TextInput,StyleSheet,Image,Text,} from 'react-native';
import { Button } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';
class Teacherhomepage extends React.Component{
  static contextType = NavigationContext;
  
  state = {
    checked: 'Null',
   
  };
  
  render(){  
    
    const navigation = this.context;
return(
  <ScrollView style={styles.main}>
<React.Fragment>
<View style={{alignItems:'center',padding:15}}>
              <Text style={styles.header}>
                Post new Lecture !
              </Text>
          </View>
          <View style={styles.contain}> 
        <TextInput  placeholder="Course/Subject" style={styles.input} />
        <TextInput  placeholder="Topic Name" style={styles.input} />
</View>
<View><Text style={styles.description}>Decription</Text></View>
<View style={styles.MainContainer}> 
 <TextInput
    style={styles.TextInputStyleClass}
    underlineColorAndroid="transparent"
    placeholder={"Type Something...."}
    placeholderTextColor={"#9E9E9E"}
    numberOfLines={5}
    multiline={true}
  />
</View>
<View >
<Text style={styles.select}> Select One of the folllowing:</Text>
<View style = {{flexDirection : 'row', alignItems : 'center', marginLeft:'20%',}}>
              <RadioButton
                value="onlineChecked"
                status={this.state.checked === 'onlineChecked' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'onlineChecked' }); }}
              />
              <Text style = {{fontSize:16,}}> Online</Text>
              </View>

  <View style = {{flexDirection : 'row', alignItems : 'center', marginLeft:'20%',}}>
              <RadioButton
                value="offlineChecked"
                status={this.state.checked === 'offlineChecked' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'offlineChecked' }); }}
              />
              <Text style = {{fontSize:16,}}> Offline</Text>
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
            onPress={() => navigation.navigate('Teacherprofilepage')} >
                     <Text style={styles.buttonText1}>Post</Text>
            </TouchableOpacity>

          </View>
  

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
const styles=StyleSheet.create({
  header:{
  fontSize: 25,
    color:'white',
    fontWeight: 'bold',
    backgroundColor: '#9a090c',
    borderRadius: 9,
    height: 50,
    width: 260,
    paddingLeft: '7%',
    paddingTop: 7,
    marginTop: 45,
    marginBottom:30,
  },

  main:{
    backgroundColor: 'white',
  },

    text:{
  fontSize:20,
  padding:10,
    },

    description:{
 fontSize: 20,
 marginTop: 20,
 paddingLeft:15,
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
    MainContainer :{
      flex:1,
      marginLeft:20,
      marginRight: 20,
        
      },
      TextInputStyleClass:{
 
        textAlign: 'left',
        height: 150,
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20 ,
        backgroundColor : "#FFFFFF",

        },

        lastBtn1:{
          width:90,
          height:40,
          backgroundColor: '#9a090c',
          marginTop: 40,
          marginBottom: 40,
          marginLeft: '40%',
          borderRadius: 6,
          justifyContent: 'center',
          paddingTop: 4,
           },

           buttonText1:{
            textAlign:'center',
            color:'white',
            fontWeight:'bold',
            fontSize:18,
            marginBottom: 10,
         
        
               },

        TextInputStyleClass2:{
 
          textAlign: 'left',
          height: 100,
          borderWidth: 2,
          borderColor: '#9E9E9E',
          borderRadius: 20 ,
          backgroundColor : "#FFFFFF",
  
          },

        select:{
            marginTop: 30,
            fontSize: 18,
            marginLeft: 12,
            marginBottom:5,
        },

        venue:{
          marginTop: 30,
          fontSize: 18,
          marginLeft: 17,
          marginBottom:5,
        },

        Btn:{
          padding:16,
          width:400,
          borderRadius:50,
          alignItems:"center"
            },


            lastBtn:{
              flex:1,
              flexDirection:'row',
              width:440,
              borderRadius:54,
             justifyContent:'space-around'
                   }
            
})
export default  Teacherhomepage;