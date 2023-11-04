import 'react-native-gesture-handler';
import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';
import SplashScreen from './screens/SplashScreen';

export default function App() {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return <SplashScreen/>;
    }

    return <Navigation/>;
}
