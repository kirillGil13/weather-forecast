<template>
  <router-view/>

  <PushNotificationGroup/>
</template>


<script setup lang="ts">
import PushNotificationGroup from
  '@/app_core/push_notifications/components/PushNotificationGroup.vue';
import {onMounted, watch} from 'vue';
import useWeatherCurrentStore from '@/store/weather/current/store';
import useUserStore from '@/store/user';


const currentWeatherModule = useWeatherCurrentStore();
const userModule = useUserStore();

onMounted(() => {
  userModule.showUserLocation();
});

watch(() => userModule.userLocation, () => {
  currentWeatherModule.loadCurrentWeatherData();
});
// TODO by city name
</script>


<style lang="scss">
@import "assets/styles/defaults";

</style>
