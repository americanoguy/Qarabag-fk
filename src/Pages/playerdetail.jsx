import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "../Components/Container";

const Playerdetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/players")
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          const foundPlayer = res.data.find((p) => p.id == id);
          setPlayer(foundPlayer);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-primary">Yüklənir...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <Container>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="bg-main p-8 flex items-center justify-center">
              <img
                src={`/${player.image}`}
                alt={player.name}
                className="w-full max-w-sm object-cover rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col justify-center">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full inline-block w-fit mb-4">
                {player.position}
              </span>

              <h1 className="text-3xl font-bold text-primary mb-2">
                {player.name}
              </h1>

              <p className="text-lg text-gray-600 mb-6">#{player.number}</p>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Milliyyət:</span>
                  <span className="font-semibold">{player.nationality}</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Yaş:</span>
                  <span className="font-semibold">{player.age} yaş</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Boy:</span>
                  <span className="font-semibold">{player.height}</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Çəki:</span>
                  <span className="font-semibold">{player.weight}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Müqavilə:</span>
                  <span className="font-semibold">
                    {player.contractUntil}-ci ilə qədər
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Playerdetail;
