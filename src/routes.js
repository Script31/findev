// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import Main from './pages/Main';
// import Profile from './pages/Profile';

// const Routes = createAppContainer(
//   createStackNavigator({
//     Main: {
//       screen: Main,
//       navigationOptions: {
//         title: 'DevRadar'
//       },
//     },
//     Profile: {
//       screen: Profile,
//       navigationOptions: {
//         title: 'Perfil no Github'
//       }
//     },
//   }, {
//     defaultNavigationOptions: {
//       headerTintColor: '#FFF',
//       headerBackTitleVisible: false,
//       headerStyle: {
//         backgroundColor: '#7D40E7',
//       },
//     },
//   })
// );

// export default Routes;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'FinDev',
          headerTitleAlign: 'center',
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'DevProfile',
          headerTitleAlign: 'center',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
      },
    },
  ),
);

export default Routes;
