import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "../Components/Container";

const Trainerdetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/coachingStaff")
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          setData(res.data);
          const foundTrainer = res.data.find((t) => t.id == id);
          setTrainer(foundTrainer);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!trainer) {
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
                src={trainer.image}
                alt={trainer.name}
                className="w-full max-w-sm object-cover rounded-lg"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full inline-block w-fit mb-4">
                {trainer.role}
              </span>
              <h1 className="text-3xl font-bold text-primary mb-6">
                {trainer.name}
              </h1>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Milliyyət:</span>
                  <span className="font-semibold">{trainer.nationality}</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Yaş:</span>
                  <span className="font-semibold">{trainer.age} yaş</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Təcrübə:</span>
                  <span className="font-semibold">
                    {trainer.experience_years} il
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Klub:</span>
                  <span className="font-semibold">{trainer.club}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trainerdetail;
