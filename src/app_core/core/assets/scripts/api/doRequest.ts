import {Timer} from '@/app_core/core/assets/scripts/helpers/timer';


/**
 * Метод отправки нотификации об ошибке
 * @param {String} url - Адресс запроса
 * @param {String} method - Метод запроса
 * @param {Object} body - Тело запроса
 * @param {Object} headers - Заголовки запроса
 * @return {Promise}
 * */
async function doRequest(
    url: string,
    method = 'GET',
    body: unknown = null,
    headers: Record<string, string> = {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  // fix url
  const deleteStrings = ['http://', 'https://'];
  deleteStrings.forEach((item) => url = url.replace(item, ''));

  const prefix = 'https';
  url = prefix + '://' + url;

  url += `&appid=e3b360674770b24f511d76037c988b8b&lang=ru&units=metric`;

  if (headers['Content-Type'] == null) headers['Content-Type'] = 'application/json';

  const initConfig: RequestInit = {
    method,
    headers,
  };

  if (body != null) initConfig['body'] = JSON.stringify(body);

  const timer = new Timer('doRequest', url);

  return await fetch(url, initConfig)
      .then((response : Response) => {
        return response.json()
            .then((data) => {

              if (response.ok) return data;
              // eslint-disable-next-line no-throw-literal
              else throw {isUserError: true, response, error: data};
            })
            .catch((error) => {
              // eslint-disable-next-line no-throw-literal
              throw {isUserError: true, response, error};
            });
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        timer.endWithLogToDoRequest();
      });
}

export default doRequest;
