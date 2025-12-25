import { Facebook, Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Flag } from "lucide-react";
import { Phone } from "lucide-react";
import { MailOpen } from "lucide-react";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-2">
      <div className="left flex flex-col items-center justify-center gap-3">
        <h2 className="text-2xl uppercase text-primary font-bold">
          Qarabag FK sosial şəbəkələrdə
        </h2>
        <div className="icons flex gap-4">
          <Link to="https://www.facebook.com/FKQarabagh/">
            <Facebook className="bg-gray-400 rounded-4xl text-white p-2 size-10" />
          </Link>

          <Link to="https://twitter.com/FKQarabagh">
            <Twitter className="bg-gray-400 rounded-4xl text-white p-2 size-10" />
          </Link>

          <Link to="https://www.instagram.com/fkqarabagh/">
            <Instagram className="bg-gray-400 rounded-4xl text-white p-2 size-10" />
          </Link>
        </div>
        <div className="account mt-3">
          <Link to="https://www.facebook.com/FKQarabagh/">
            <img src="public/fcbqrb.png" alt="account" />
          </Link>
        </div>
      </div>
      <div className="middle bg-main text-white flex justify-center  items-center flex-col gap-5 ">
        <img src="public/logo.png" alt="logo" className="w-50" />
        <p className="p-8 ">
          Qarabağ FK 1987-ci ildən bu adla çıxış etməyə başlayıb. Komandamız 12
          dəfə Azərbaycan çempionu, 8 dəfə ölkə kubokunun sahibi olmuşdur.
          Çempionlar Liqasının əsas mərhələsinə vəsiqə qazanmış ilk və tək
          Azərbaycan klubudur.
        </p>
      </div>
      <div className=" right bg-main shadow-[-15px_0px_79px_0px_rgba(0,0,0,0.57)]">
        <div className="maillogo flex items-center justify-center flex-col gap-3 mt-10">
          <Mail className="text-white size-40" />
          <h2 className="text-white text-2xl uppercase">Bizimlə əlaqə</h2>
        </div>
        <div className="detailed">
          <div className="location flex items-center gap-3 mt-8 ml-4 justify-baseline">
            <Flag className="text-white size-8" />
            <Link to="https://www.google.com/maps/place/Tofig+Bahramov+Republican+Stadium/@40.397347,49.8477734,17.11z/data=!4m6!3m5!1s0x40307d6858175895:0xb7c12372dc499ca0!8m2!3d40.3973253!4d49.8524143!16zL20vMGJwd3hu?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D">
              <h2 className="text-white text-xl">
                Tofiq Bahramov Republic Stadion
              </h2>
            </Link>
          </div>
          <div className="phone flex items-center gap-3 mt-4 ml-4 justify-baseline ">
            <Phone className="text-white size-8" />
            <h2 className="text-white text-xl">+994 12 404 19 51</h2>
          </div>
          <div className="email flex items-center gap-3 mt-4 ml-4 justify-baseline ">
            <MailOpen className="text-white size-8" />
            <h2 className="text-white text-xl">qarabagh@qarabagh.com</h2>
          </div>
        </div>
      </div>
      <div className="copyright bg-main text-white text-center py-2 col-span-3 flex justify-between px-3">
        <p>Copyright©2025</p>
        <p>Bütün hüquqlar qorunur FS-41</p>
      </div>
    </div>
  );
};

export default Footer;
