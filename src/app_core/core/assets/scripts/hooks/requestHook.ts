import doRequest from '@/app_core/core/assets/scripts/api/doRequest';


const useRequest = () => {
  const getRequest = async (url: string, headers?: Record<string, string>) => {
    return await doRequest(url, 'GET', null, headers);
  };

  const postRequest = async (url: string, body?: unknown, headers?: Record<string, string>) => {
    return await doRequest(url, 'POST', body, headers);
  };

  const pathRequest = async (url: string, body?: unknown, headers?: Record<string, string>) => {
    return await doRequest(url, 'PATH', body, headers);
  };

  const putRequest = async (url: string, body?: unknown, headers?: Record<string, string>) => {
    return await doRequest(url, 'PUT', body, headers);
  };

  const deleteRequest = async (url: string, headers?: Record<string, string>) => {
    return await doRequest(url, 'DELETE', null, headers);
  };

  return {
    get: getRequest,
    post: postRequest,
    path: pathRequest,
    put: putRequest,
    delete: deleteRequest,
  };
};

export default useRequest;
