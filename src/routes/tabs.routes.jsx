import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import ScreenC from '../screens/ScreenC';

const { Screen, Navigator } = createBottomTabNavigator();

export const TabsRoutes = () => {
  return (
    <Navigator>
      <Screen name="ScreenA" component={ScreenA} />
      <Screen name="ScreenB" component={ScreenB} />
      <Screen name="ScreenC" component={ScreenC} />
    </Navigator>
  );
};
