import React from 'react';
import BatteryLife from './src/BatteryLife';
import BrightnessSetting from './src/BrightnessSetting';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

function MyApps() {
  return (
    <Tabs.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },tabBarLabelPosition:"beside-icon", tabBarIconStyle: {display: 'none'} }}>
      <Tabs.Screen name="Brightness" component={BrightnessSetting} />
      <Tabs.Screen name="Battery" component={BatteryLife} />
    </Tabs.Navigator>
  );
}


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyApps />
    </NavigationContainer>
  )
}

export default App;
