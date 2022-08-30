import {baseUrls} from '@/store';
import useRequest from '@/app_core/core/assets/scripts/hooks/requestHook';

import usePushNotificationStore from '@/app_core/push_notifications/store';
import {defineStore} from 'pinia';
import {computed, ComputedRef, Ref, ref} from 'vue';
import {IWeatherCurrent} from '@/store/weather/current/store/types';
import {serializeFromObjectToQueryString} from '@/app_core/core/assets/scripts/helpers/serialize';
import useUserStore from '@/store/user';

export interface IWeatherCurrentStore {
    currentWeather: Ref<IWeatherCurrent | null>,
    isLoading: Ref<boolean>,
    getCurrentWeatherData: ComputedRef<IWeatherCurrent | null>,
    loadCurrentWeatherData: () => Promise<IWeatherCurrent>,
}


const request = useRequest();

export const baseUrl = baseUrls.weather;

const urls = {
    current: '/weather',
};

const useWeatherCurrentStore = defineStore('weatherCurrent', (): IWeatherCurrentStore => {
    const pushNotificationModule = usePushNotificationStore();
    const userModule = useUserStore();

    const currentWeather = ref<IWeatherCurrent | null>(null);
    const isLoading = ref(false);

    const getCurrentWeatherData = computed<IWeatherCurrent | null>(() => currentWeather.value);

    const setIsLoading = (value: boolean) => {
        isLoading.value = value;
    };

    const setCurrentWeatherData = (data: IWeatherCurrent | null) => {
        currentWeather.value = data;
    };


    const loadCurrentWeatherData = async () => {
        const query = '?' + serializeFromObjectToQueryString(userModule.getUserLocation);
        const url = baseUrl + urls.current + query;

        setIsLoading(true);
        return await request.get(url)
            .then((data: IWeatherCurrent) => {
                setCurrentWeatherData(data);
                return data;
            })
            .catch((error) => {
                const message = error?.error?.error?.detail || error;
                pushNotificationModule.sendErrorNotification(message.toString());
                return error;
            })
            .finally(() => setIsLoading(false));
    };

    return {
        currentWeather,
        isLoading,

        getCurrentWeatherData,

        loadCurrentWeatherData,
    };
});

export default useWeatherCurrentStore;
