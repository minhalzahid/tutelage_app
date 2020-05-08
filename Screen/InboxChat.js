import React, { Component } from 'react';
import { ChatScreen } from 'react-native-easy-chat-ui'


class InboxChat extends Component {
  state = {
    messages: [
      {
        id: `poiuytrew`,
        type: 'text',
        content: 'hello world',
        targetId: '12345678',
        chatInfo: {
          id: '12345678',
        },
        renderTime: true,
        sendStatus: 0,
        time: '1542006036549'
      },
      {
        id: `oiuytrew`,
        type: 'text',
        content: 'hi/{se}',
        targetId: '12345678',
        chatInfo: {
          id: '12345678',
        },
        renderTime: true,
        sendStatus: 0,
        time: '1542106036549'
      },
      {
        id: `iuytre`,
        type: 'text',
        content: "qwertyuiop",
        targetId: '12345678',
        chatInfo: {
          id: '12345678',
          nickName: 'Test'
        },
        renderTime: false,
        sendStatus: 0,
        time: '1542106037000'
      },
      {
        id: `uytre`,
        type: 'text',
        content: 'hello/{weixiao}',
        targetId: '88886666',
        chatInfo: {
          id: '12345678'
        },
        renderTime: true,
        sendStatus: 1,
        time: '1542177036549'
      }
    ],
    // chatBg: require('../../source/bg.jpg'),
    inverted: false,  // require
    voiceHandle: true,
    currentTime: 0,
    recording: false,
    paused: false,
    stoppedRecording: false,
    finished: false,
    audioPath: '',
    voicePlaying: false,
    voiceLoading: false
  }


  sendMessage = (type, content, isInverted) => {
    console.log(type, content, isInverted, 'msg')
  }

  render() {
    return (
      <ChatScreen
        avatarStyle={{ display: 'none' }}
        useVoice={false}
        ref={(e) => this.chat = e}
        messageList={this.state.messages}
        placeholder={'message'}
        sendMessage={this.sendMessage}
      />
    )
  }
}

export default InboxChat