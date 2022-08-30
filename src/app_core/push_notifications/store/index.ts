import {EPushNotificationType, IPushNotification, IPushNotificationBody} from './types';

import objectsListHook from '@/app_core/core/assets/scripts/hooks/objectsListHook';
import {defineStore} from 'pinia';
import {computed, ComputedRef} from 'vue';

export interface IPushNotificationStore {
  pushNotificationsList: ComputedRef<IPushNotification[]>,
  sendNotification: (obj : IPushNotificationBody) => Promise<IPushNotification>,
  deleteNotification: (id: number | string) => void,
  sendInfoNotification: (message: string) => Promise<IPushNotification>,
  sendSuccessNotification: (message: string) => Promise<IPushNotification>,
  sendErrorNotification: (message: string) => Promise<IPushNotification>,
}
const hook = objectsListHook<IPushNotification>();


const usePushNotificationStore = defineStore('pushNotification', (): IPushNotificationStore => {
  const pushNotificationsList = computed(() => hook.getList.value);


  const sendNotification = async (obj : IPushNotificationBody): Promise<IPushNotification> => {
    const currentObj = await hook.addListItem({...obj, id: -1} as IPushNotification);
    setTimeout(() => hook.deleteItem(currentObj.id), 4000);

    return currentObj;
  };

  const deleteNotification = async (id: number | string) => {
    hook.deleteItem(id);
  };

  const sendInfoNotification = async (message: string) => {
    return await sendNotification({type: EPushNotificationType.INFO, message});
  };

  const sendSuccessNotification = async (message: string) => {
    return await sendNotification({type: EPushNotificationType.SUCCESS, message});
  };

  const sendErrorNotification = async (message: string) => {
    return await sendNotification({type: EPushNotificationType.ERROR, message});
  };

  return {
    pushNotificationsList,

    sendNotification,
    deleteNotification,
    sendInfoNotification,
    sendSuccessNotification,
    sendErrorNotification,
  };
});

export default usePushNotificationStore;
