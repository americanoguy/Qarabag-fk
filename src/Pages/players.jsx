import { useEffect, useState } from "react";
import Container from "../Components/Container";
import axios from "axios";
import { Link } from "react-router-dom";

const Players = () => {
  const endpoint = "http://localhost:3000/players";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(endpoint).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        setData(res.data);
      }
    });
  }, []);

  const translatePosition = (position) => {
    const translations = {
      Goalkeeper: "Qapıçı",
      Defender: "Müdafiəçi",
      Midfielder: "Yarımmüdafiəçi",
      Forward: "Hücumçu",
    };
    return translations[position] || position;
  };

  const groupedPlayers = data.reduce((acc, player) => {
    const position = translatePosition(player.position);
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(player);
    return acc;
  }, {});

  const positionOrder = ["Qapıçı", "Müdafiəçi", "Yarımmüdafiəçi", "Hücumçu"];
  const sortedPositions = positionOrder.filter(
    (position) => groupedPlayers[position]
  );

  return (
    <div className="content">
      <Container>
        <div className="py-8 flex items-end">
          <h2 className="text-4xl text-primary font-medium uppercase">
            Oyunçular
          </h2>
          <div className="h-0.5 w-full bg-main"></div>
        </div>

        {sortedPositions.map((position) => (
          <div key={position} className="mb-12">
            <h3 className="text-2xl text-primary font-medium uppercase mb-6">
              {position}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {groupedPlayers[position].map(
                ({ name, image, position: pos, id, number }) => {
                  return (
                    <div
                      key={number}
                      className="bg-main p-4 flex flex-col gap-4 rounded-2xl relative"
                    >
                      <Link
                        to={`/player/${id}`}
                        className="absolute inset-0"
                      ></Link>
                      <div className="flex items-start gap-4">
                        <span className="text-5xl font-bold text-white">
                          {number}
                        </span>
                        <div className="flex flex-col">
                          <h2 className="text-lg font-medium text-white uppercase leading-tight">
                            {name.split(" ")[0]}
                          </h2>
                          <h2 className="text-lg font-medium text-white uppercase leading-tight">
                            {name.split(" ").slice(1).join(" ")}
                          </h2>
                        </div>
                      </div>
                      <div className="w-full">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-auto object-cover rounded-md"
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Players;
