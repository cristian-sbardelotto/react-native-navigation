import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './stack.routes';
import { TabsRoutes } from './tabs.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
      <TabsRoutes />
    </NavigationContainer>
  );
};
