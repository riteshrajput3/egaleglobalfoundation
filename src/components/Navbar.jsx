export default function Navbar() {
  return (
   <nav className="absolute top-0 left-0 w-full z-50 font-sans">

      <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center text-white">
        
        <div className="flex items-center gap-2 font-semibold text-lg">
          🌱 Egale Global Foundation
        </div>

        <div className="hidden md:flex gap-6 items-center text-sm">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Donate</a>
          <a href="#">Carbon Credits</a>
          <a href="#">Events</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>

          <button className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold">
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  )
}
