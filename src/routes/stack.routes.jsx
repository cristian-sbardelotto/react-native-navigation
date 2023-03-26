import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import ScreenC from '../screens/ScreenC/index.jsx';

const { Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <>
      <Screen name="ScreenA" component={ScreenA} />

      <Screen name="ScreenB" component={ScreenB} />

      <Screen name="ScreenC" component={ScreenC} />
    </>
  );
};
