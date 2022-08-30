import {defineStore} from 'pinia';
import {computed, ComputedRef, ref, Ref} from 'vue';
import {ICoords} from '@/store/user/types';


export interface IUserStore {
    userLocation: Ref<ICoords | null>,
    getUserLocation: ComputedRef<ICoords | null>,
    setUserLocation: (coords: ICoords | null) => void,
    showUserLocation: () => void,
}


const defaultUserLocation: ICoords = {
    lat: 55.751244,
    lon: 37.618423,
}

const useUserStore = defineStore('userStore', (): IUserStore => {
    const userLocation = ref<ICoords | null>(null);

    const getUserLocation = computed(() => userLocation.value);

    const setUserLocation = (coords: ICoords | null) => {
        userLocation.value = coords;
    };

    const showUserLocation = () => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const payload = {
                    lon: position.coords.longitude,
                    lat: position.coords.latitude,
                };
                setUserLocation(payload);
            }, (error) => {
                if (error.code === 1) {
                    setUserLocation(defaultUserLocation);
                }
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return {
        userLocation,

        getUserLocation,

        setUserLocation,

        showUserLocation,
    }
});

export default useUserStore;
