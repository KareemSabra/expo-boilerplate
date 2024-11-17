import { appConfig } from '@/config/appConfig';
import { useColorScheme } from 'react-native';

export default function useAppConfig() {
    const colorScheme = useColorScheme() ?? 'light';

    return {
        colorScheme,
        colors: appConfig.colors,
    };
}
