import axios from "axios";
import { useEffect, useState } from "react";

const News = () => {
  const endpoint = "http://localhost:3000/news";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(endpoint).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        setData(res.data);
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map(({ id, ImgSrc, newsTitle }) => {
        return (
          <div key={id} className={`h-50 flex flex-col`}>
            <img
              src={`/news-carousel/${ImgSrc}`}
              className="h-40 object-cover"
            />
            <p className="bg-main text-white p-2 w-full h-15 truncate">
              {newsTitle}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default News;
