import { useEffect, useState } from "react";
import Container from "../Components/Container";
import axios from "axios";

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
    <div className="content">
      <Container>
        <div className="py-8 flex items-end">
          <h2 className="text-4xl text-primary font-medium uppercase">
            Xəbərlər
          </h2>
          <div className="h-0.5 w-full bg-main"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
          {data.map(({ id, imgSrc, newsTitle, date }) => {
            return (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={imgSrc}
                    alt={newsTitle}
                    className="w-full h-56 object-cover"
                  />
                  {date && (
                    <div className="absolute top-4 right-4 bg-main text-white px-3 py-1 rounded-md text-sm font-medium">
                      {date}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary leading-tight">
                    {newsTitle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default News;
