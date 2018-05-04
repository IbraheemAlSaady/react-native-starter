import { StackNavigator } from 'react-navigation';
import Splash from 'containers/splash';
import Home from 'containers/home';

const RootNav = StackNavigator({
  Splash: {
    screen: Splash,
  },
  home: {
    screen: Home,
  },
}, {
  mode: 'card',
  headerMode: 'none',
});

export default RootNav;
