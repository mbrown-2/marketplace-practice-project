import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

// replace /genres, /games with a generic /[endpoint_name]
interface FetchResponse<T> {
    count: number;
    results: T[];
  }


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
      
    // Use EffectHook to call upon first render to make GET request
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        // Second param: axios param config object
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => { 
          setData(res.data.results);
          setLoading(false);
         })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });
      return () => controller.abort();
    }, deps ? [...deps] : []);
    return { data, error, isLoading };
};

export default useData;