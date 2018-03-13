import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';

export default class App extends React.Component {
  componentDidMount() {
    console.log('mount');
    debugger;
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          {/* <AddEntry /> */}
          <History style={{height: 20}} />
        </View>
      </Provider>
    );
  }
}
