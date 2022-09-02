import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Dashboard } from '../screens/public/Dashboard';

const MainStack = createStackNavigator();

export const Main = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Dashboard" component={Dashboard} />
      </MainStack.Navigator>
    </SafeAreaView>
  </SafeAreaProvider>
);
