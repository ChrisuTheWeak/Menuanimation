import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import Hamburger from '../Lottie/Hamburger.json';
import HamburgerReverse from '../Lottie/HamburgerReverse.json';
import { useEffect, useState } from 'react';
import { useDrawerStatus } from '@react-navigation/drawer';

const HamburgerIcon = ({ navigation }) => {
  const [anim, setAnim] = useState (Hamburger);
  const isDrawerOpen = useDrawerStatus() !== 'open';

  const pressHandler = () =>{
    navigation.toggleDrawer();
  }
useEffect(() => {
  isDrawerOpen ? setAnim(HamburgerReverse) : setAnim(Hamburger);
},[isDrawerOpen]);
  return (
    <TouchableOpacity onPress={pressHandler}>
      <LottieView 
      source={anim} 
      style={{height:40, width:40, marginLeft:10 }}
      autoPlay={true}
      loop={false}
      />
    </TouchableOpacity>
  );
};

HamburgerIcon.propTypes = {
  navigation: PropTypes.object,
};

export default HamburgerIcon;
