import { useLayoutEffect } from 'react';

import { useNavigation } from 'expo-router';
import { BackHandler } from 'react-native';

export const useSystemBackDisabled = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const disableBackButtonHandler = BackHandler.addEventListener('hardwareBackPress', () => true);

    navigation.setOptions({
      gestureEnabled: false,
    });

    return () => disableBackButtonHandler.remove();
  }, [navigation]);
};
