import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import SignUpScreen from './Screen/SignUpScreen';
import Teacherhomepage from './Screen/Teacherhomepage';
import Teacherprofilepage from './Screen/Teacherprofilepage';
import Readmore from './Screen/Readmore';
import StudentHomepage from './Screen/StudentHomepage';
import Studentib from './Screen/Studentib';
import Teacherinbox from './Screen/Teacherinbox';
import Notificationstd from './Screen/Notificationstd';
import chat from './Screen/chat';
import GoLive from './Screen/GoLive';
import golive2 from './Screen/golive2';
import mylectures from './Screen/mylectures';
import studentprofilepage from './Screen/studentprofilepage';
import Check from './Screen/Check';
import Request from './Screen/Request';
import Forgetpass from './Screen/Forgetpass';
import InboxChat from './Screen/InboxChat';


const Stack = createStackNavigator();

function App() {
  return (
    <React.Fragment>
      {/* <Check/> */}
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name="SignUpScreen"
            component={SignUpScreen}
            options={{
              headerTitle: 'Back',

            }}
          />
          <Stack.Screen name="Teacherprofilepage"
            component={Teacherprofilepage}
            options={{
              headerTitle: 'Back',

            }}
          />
          <Stack.Screen name="Teacherhomepage"
            component={Teacherhomepage}
            options={{

              headerLeft: null,
              headerShown: false,
            }}
          />

          <Stack.Screen name="Studenthomepage"
            component={StudentHomepage}
            options={{

              headerLeft: null,
              headerShown: false,
            }}
          />

          <Stack.Screen name="studentprofilepage"
            component={studentprofilepage}
            options={{
              headerTitle: 'Back',

            }}
          />

          <Stack.Screen name="Readmore"
            component={Readmore}
            options={{
              headerTitle: 'Back',

            }}
          />

          <Stack.Screen name="chat"
            component={chat}
            options={{
              headerTitle: 'Back',

            }}
          />

          <Stack.Screen name="Studentinbox"
            component={Studentib}
            options={{
              headerTitle: 'Back',

            }}
          />
          <Stack.Screen name="Teacherinbox"
            component={Teacherinbox}
            options={{
              headerTitle: 'Back',

            }}
          />

          <Stack.Screen name="Notificationstd"
            component={Notificationstd}
            options={{
              headerTitle: 'Back',

            }}
          />

          <Stack.Screen name="GoLive"
            component={GoLive}
            options={{
              headerTitle: 'Back',

            }}
          />

          <Stack.Screen name="golive2"
            component={golive2}
            options={{
              headerTitle: 'Back',
            }}
          />

          <Stack.Screen name="mylectures"
            component={mylectures}
            options={{
              headerTitle: 'Back',
            }}
          />

          <Stack.Screen name="Request"
            component={Request}
            options={{
              headerTitle: 'Back',

            }}
          />
          <Stack.Screen name="Forgetpass"
            component={Forgetpass}
            options={{
              headerTitle: 'Back',

            }}
          />
          <Stack.Screen name="inboxChat"
            component={InboxChat}
            options={{
              headerTitle: 'Back',

            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;