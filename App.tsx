import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './app/Navigations/Route';

const App = () =>{

		const [loaded] = useFonts({
        PoppinsRegular: require('./app/assets/fonts/Poppins-Regular.ttf'),
        PoppinsSemiBold : require('./app/assets/fonts/Poppins-SemiBold.ttf'),
        PoppinsMedium : require('./app/assets/fonts/Poppins-Medium.ttf'),
        PoppinsBold : require('./app/assets/fonts/Poppins-Bold.ttf'),
		});  

		if(!loaded){
		  return null;
		}

    return (
        <SafeAreaProvider>
          <SafeAreaView
            style={{
                flex: 1,
              }}
            >
              <Routes/>
          </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default App;
