import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const useUser = () => {
  const { data, error } = useSWR('/api/user/get', fetcher);

  return {
    user: data,
    isLoading: !error && data === undefined,
    isError: error,
  };
};

export default useUser;
