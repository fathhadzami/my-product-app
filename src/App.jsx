import './index.css'
import image1 from './assets/image-1.png'

export default function App() {
  return (
    <>
      <div className="flex h-24 bg-sky-900 py-8 px-32 justify-between">
        <h1 className="text-xl font-bold text-white cursor-pointer">
          Logo
        </h1>
        <ul className="flex space-x-6">
          <li className="text-sm font-bold text-white cursor-pointer">
            Home
          </li>
          <li className="text-sm font-bold text-white cursor-pointer">
            Contact
          </li>
          <li className="text-sm font-bold text-white cursor-pointer">
            Profile
          </li>
        </ul>
      </div>
      <div className="flex h-96 bg-sky-900 py-8 px-32">
        <div className="flex w-full h-full flex-col space-y-7">
          <p className="text-5xl text-white">Persembahan Istimewa! Bersama kami</p>
          <p className="text-sm text-white text-ellipsis">Dapatkan diskon luar biasa hingga 20% untuk produk pilihan kami. Tingkatkan gaya hidupmu dengan
            koleksi terbaru dan hemat lebih banyak! Segera kunjungi toko kami sebelum minggu ini berakhir. Jangan lewatkan
            kesempatan emas ini untuk berbelanja cerdas!</p>
        </div>
        <div className="w-full h-full justify-center hidden lg:flex">
          <img className="h-96" src={image1} alt="img" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
          <img className="p-8 rounded-t-lg" src="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg" alt="product image" />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-sky-900">Fujifilm, Camera Body Only, Photography</h5>
            <span className="text-3xl font-bold text-sky-900">Rp10.000.000</span>
            <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
          <img className="p-8 rounded-t-lg" src="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg" alt="product image" />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-sky-900">Fujifilm, Camera Body Only, Photography</h5>
            <span className="text-3xl font-bold text-sky-900">Rp10.000.000</span>
            <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
          <img className="p-8 rounded-t-lg" src="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg" alt="product image" />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-sky-900">Fujifilm, Camera Body Only, Photography</h5>
            <span className="text-3xl font-bold text-sky-900">Rp10.000.000</span>
            <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
          <img className="p-8 rounded-t-lg" src="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg" alt="product image" />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-sky-900">Fujifilm, Camera Body Only, Photography</h5>
            <span className="text-3xl font-bold text-sky-900">Rp10.000.000</span>
            <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
          <img className="p-8 rounded-t-lg" src="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg" alt="product image" />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-sky-900">Fujifilm, Camera Body Only, Photography</h5>
            <span className="text-3xl font-bold text-sky-900">Rp10.000.000</span>
            <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
          <img className="p-8 rounded-t-lg" src="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg" alt="product image" />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-sky-900">Fujifilm, Camera Body Only, Photography</h5>
            <span className="text-3xl font-bold text-sky-900">Rp10.000.000</span>
            <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}
