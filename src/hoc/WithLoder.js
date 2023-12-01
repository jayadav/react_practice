import { useEffect, useState } from "react";
import instance from "../http";



const withLoader = (WrappedComponent, api, fetchData, cachekey) => {
  return function WithLoader(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    // console.log(data);
    const fetchDataAndHandling = async () => {
      try {
        const result = await instance.get(api);
        const response = await result;
        localStorage.setItem(cachekey, JSON.stringify(result.data));
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchDataFromCache = async () => {
      console.log('cache');
      try {
        if (localStorage.getItem(cachekey)) {
          const result = localStorage.getItem(cachekey);
          setData(JSON.parse(result));
        } else {
          console.log('switching ....');
          fetchDataAndHandling();
        }
      } catch (error) {
        console.error("Error fetching data from Cache:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    useEffect(() => {
      fetchDataFromCache();
    }, []);
    if (isLoading) {
      return (
        <>
          <p>Data is Loading....</p>
        </>
      );
    }

    if (isError) {
      return <p>Unable to fetch data, got an error</p>;
    }

    return (
      <>
        <WrappedComponent data={data} {...props} />
      </>
    );
  };
};

export default withLoader;
