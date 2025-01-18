import { useEffect, useState } from 'react';

import { useNavigation } from 'expo-router';

export const useNavigationReady = () => {
  const [isNavigationReady, setNavigationReady] = useState(false);

  const rootNavigation = useNavigation();

  useEffect(() => {
    if (!rootNavigation) return;
    rootNavigation.addListener('state', () => setNavigationReady(true));
    return () => rootNavigation.removeListener('state', () => setNavigationReady(false));
  }, []);

  return { isNavigationReady };
};
