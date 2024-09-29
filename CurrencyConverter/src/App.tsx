import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// constants

import {currencyByRupee} from './constants';
import CurrencyBtn from './components/CurrencyBtn';

// component

import Snackbar from 'react-native-snackbar';

const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (target: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert !!',
        backgroundColor: '#ea7773',
        textColor: '#000000',
      });
    }
    const inputAmount = parseFloat(inputValue);
      if (!isNaN(inputAmount)) {
        const convertedValue = inputAmount * target.value;
        const result = `${target.symbol} ${convertedValue.toFixed(2)}`;
        setResultValue(result);
        setTargetCurrency(target.name);
      } else {
        return Snackbar.show({
          text: 'Not a valid number to convert',
          backgroundColor: '#f4be2c',
          textColor: '#000000',
        });
      }
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>Rupee</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode="always" // only for ios
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter amount in rupees"
            />
          </View>
          {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text> || <Text style={styles.resultTxt}></Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable style={[
                styles.button,
                targetCurrency === item.name && styles.selected
              ]}
              
              onPress={()=> buttonPressed(item)}
              
              >
                <CurrencyBtn  {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
