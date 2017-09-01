/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  ActivityIndicator,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as COLOR from '../config/colors';

import {bindActionCreators} from 'redux';
import * as people from '../actions/people';
import {connect} from 'react-redux';

class Home extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "Home",
    headerTintColor: COLOR.HEADER_TINT,
    headerStyle: {
      backgroundColor: COLOR.HEADER

    },
    headerRight: null
  });

  componentDidMount() {
    this.props.actions.getPeopleList();
  }

  renderLoading = () => {
    const {state, actions} = this.props;
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.BACKGROUND
      }}>
        <ActivityIndicator color={COLOR.TINT} size='large'/>
      </View>
    );
  }

  renderContent = () => {
    const {state, actions} = this.props;
    return (
      <View style={{
        flex: 1,
        backgroundColor: COLOR.BACKGROUND
      }}>
        <ScrollView style={{
          flex: 1
        }}>

          {state.peopleList.map((user, index) => (
            <View style={{
              padding: 16,
              marginVertical: 1,
              backgroundColor: COLOR.CARD
            }} key={index}>
              <View style={{
                flexDirection: 'row'
              }}>
                <Image style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25
                }} source={{
                  uri: `${user.picture.thumbnail}`
                }}/>
                <View style={{
                  marginLeft: 8
                }}>

                  <Text style={{
                    color: COLOR.PRIMARY_TEXT,
                    fontSize: 16
                  }}>
                    {`${user.name.first} ${user.name.last}`}
                  </Text>

                  <Text style={{
                    color: COLOR.PRIMARY_TEXT,
                    fontSize: 12
                  }}>
                    {`${user.email}`}
                  </Text>
                </View>
              </View>

            </View>
          ))}
        </ScrollView>

      </View>
    );
  }

  render() {
    const {state, actions} = this.props;
    if (state.requestingPeopleList) {
      return this.renderLoading();
    }
    return this.renderContent();
  }
}

export default connect(state => ({state: state.people}), (dispatch) => ({
  actions: bindActionCreators(people, dispatch)
}))(Home);
