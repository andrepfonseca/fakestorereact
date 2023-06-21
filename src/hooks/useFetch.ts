/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

type Config = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body?: string | undefined;
};

export const useFetch = (url: any) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState<Config>();
  const [method, setMethod] = useState<string>();
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string>("");

  const [itemId, setItemId] = useState<string>();

  const httpConfig = (data: string, method: any) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMethod("DELETE");
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);

        setMethod("");

        setError("");
      } catch (error: any) {
        setError("Houve um erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        setLoading(true);

        const fetchOptions: [string, Config?] = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config]);

  return { data, httpConfig, loading, error };
};
