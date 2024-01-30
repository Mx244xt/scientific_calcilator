import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  )
}

export default AppNavigation