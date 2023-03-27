import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Messages from '../screens/Messages';
import Contacts from '../screens/Contacts';
import Calls from '../screens/Calls';

const { Screen, Navigator } = createBottomTabNavigator();

export const TabsRoutes = () => {
  return (
    <Navigator initialRouteName='Messages'>
      <Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="chat" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="phone" size={30} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
