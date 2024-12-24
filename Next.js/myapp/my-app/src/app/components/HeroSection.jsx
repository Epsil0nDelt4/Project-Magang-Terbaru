import React from "react";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[433px,auto] gap-4 p-4 lg:p-6 max-w-screen-xl">
        {/* Gambar Kiri Atas */}
        <div className="relative w-[433px] h-[278px] rounded-2xl overflow-hidden">
          <Image
            src="/images/Gambar_Kiri_Atas.jpg"
            alt="Image Left"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        {/* Tulisan Kanan Atas */}
        <div className="bg-green-100 p-6 rounded-2xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-green-800">
            Investasi Saham dalam Sekali Klik
          </h2>
          <p className="mt-2 text-gray-600">
            Beli dan kelola saham favorit Anda dengan antarmuka yang intuitif,
            didukung data real-time dan rekomendasi ahli.
          </p>
        </div>

        {/* Kartu-kartu */}
        <div className="col-span-full flex flex-col lg:flex-row gap-4">
          {/* Kartu 1 */}
          <div className="bg-white rounded-lg shadow-md flex-1">
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src="/images/Kartu_1.jpg"
                alt="Card Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-800">
                Belajar Keuangan dengan Ahli
              </h3>
              <p className="mt-2 text-gray-600">
                Pelajari strategi keuangan dan investasi dari para ahli
                berpengalaman.
              </p>
            </div>
          </div>

          {/* Kartu 2 */}
          <div className="bg-white rounded-lg shadow-md flex-1">
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src="/images/Kartu_2.jpg"
                alt="Card Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-800">
                Bergabung dengan Komunitas
              </h3>
              <p className="mt-2 text-gray-600">
                Bersama komunitas Inspiratif yang mendukung perjalanan investasi
                Anda.
              </p>
            </div>
          </div>

          {/* Kartu 3 */}
          <div className="bg-white rounded-lg shadow-md flex-1">
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src="/images/Kartu_3.jpg"
                alt="Card Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-800">
                Platform All-in-One yang Mudah Digunakan
              </h3>
              <p className="mt-2 text-gray-600">
                Semua kebutuhan Anda dalam satu platform yang dirancang untuk
                kenyamanan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;