import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Grid, Col } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const itemWidth = (width) / 2; //2 is number columns

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start' }}>
        <Image source={require('../assets/images/menu.png')} style={{ alignSelf: 'center', marginLeft: 10 }} />
        <Text style={{ backgroundColor: '#fff', textAlign: 'center', fontSize: 24, flex: 1 }}>Event Hackathon</Text>
        <Image source={require('../assets/images/search.png')} style={{ alignSelf: 'center', marginRight: 10 }} />
      </View>
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  constructor(props) {
    super(props);

    this.state = {
      data: [
        require('../assets/images/ai.png'),
        require('../assets/images/iot.png'),
        require('../assets/images/bigdata.png'),
        require('../assets/images/industry.png'),
        require('../assets/images/nonprofit.png'),
        require('../assets/images/transport.png'),
        require('../assets/images/blockchain.png'),
        require('../assets/images/seemore.png'),
      ],
    };

    this._renderItem = this._renderItem.bind(this);
    this._keyExtractor = this._keyExtractor.bind(this);
    this._onPressButton = this._onPressButton.bind(this);
  }

  _renderItem = data => {
    const item = data.item;
    return (
      <View style={{ flex:1, flexDirection: 'column', alignContent: 'center', marginBottom:16 }}>
        <Image source={item} style={{
          width:itemWidth*0.8,
          height:itemWidth*0.8,
          resizeMode:'contain',
          alignSelf:'center'
        }} />
      </View>
      );
  }
  _keyExtractor(item, soundID) {
    return `sound-item-${soundID}`;
  }
  _onPressButton(){
    this.props.navigation.navigate("EventDetail");
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={{ flexDirection: 'row', justifyContent:'center'}}>
              <Image source={require('../assets/images/test.png')} style={{
                flex:1,
                resizeMode:'contain'
              }}/>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 270 }}>
              <Text style={{ backgroundColor: '#C4C4C4', width: 85, height: 2.5 }} />
              <Text style={{ backgroundColor: '#2196F3', width: 85, height: 2.5 }} />
              <Text style={{ backgroundColor: '#C4C4C4', width: 85, height: 2.5 }} />
            </View>
          </View>
          <View style={{ marginTop: 20 }} >
            <Text style={{ fontSize: 24, textAlign: 'center', color: '#2196F3' }}>Popular Topics</Text>
          </View>
          <View style={{marginTop:16}}>
            <FlatList
              data={this.state.data}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  contentContainer: {
  },
});
