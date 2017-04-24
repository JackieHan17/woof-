import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity,ListView,Image} from 'react-native';
import { createRouter, NavigationProvider } from '@expo/ex-navigation';
import ChatScreen from './ChatScreen';
const image1 = require('../assets/images/geasy.jpg')
const image2 = require('../assets/images/eminem.jpg')
const image3 = require('../assets/images/kyle.jpg')
const image4 = require('../assets/images/devon.jpg')
const data = [{
  "id": 1,
  "first_name": "G Eazy",
  "message": "I just need to be alone",
  "image": image1
}, {
  "id": 2,
  "first_name": "Eminem",
  "message": "Fuck off",
  "image": image2
}, {
  "id": 2,
  "first_name": "Kyle",
  "message": "Lame NI**As hide your girls",
  "image": image3
}, {
  "id": 2,
  "first_name": "Devon Baldwin",
  "message": "Where the Avacados at tho?",
  "image": image4
}]
const Router = createRouter(() => ({
  Friends_List: () => Friends_ListScreen,
  Chat: () => ChatScreen,
 }));

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Friends_ListScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '好友',
      backgroundColor: '#f5dd90',
      tintColor: '#f38961',
      height:60
    },
  };
    constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }
  _goToScreen = name => () => {
    this.props.navigator.push(Router.getRoute(name));
  };

  eachMessage(x){
    return (
      <TouchableOpacity onPress={this._goToScreen('Chat')}>
        <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
          <Image source={x.image} style={{ borderRadius:30, width:60, height:60 }} resizeMode='contain' />
          <View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', width:280 }}>
              <Text style={{ marginLeft:15, fontWeight:'600', color:'#222', fontSize:15 }}>{x.first_name}</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#666', fontSize:12, marginLeft:15 }}>{x.message}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachMessage(rowData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


