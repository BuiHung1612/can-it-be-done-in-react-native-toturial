import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YoutubeScreen from 'animations/youtube/youtubeScreen';

const { Screen, Navigator, Group } = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Screen name="youtube" component={YoutubeScreen} />
        </Navigator>
    );
};

export default AppNavigator;
