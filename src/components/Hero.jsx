export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white">
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">

        <span className="inline-block mb-6 px-4 py-2 bg-green-600/30 text-green-200 rounded-full text-sm">
          ● Join 50,000+ Nature Guardians
        </span>

        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight">
  Adopt a Tree.
  <br />
  <span className="text-green-400">Restore the Earth.</span>
</h1>

<p className="mt-6 text-lg text-gray-200 font-sans">
  Every tree you plant fights climate change, restores ecosystems, and
  creates a greener future. Start your journey with just ₹1 per day.
</p>


        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold">
            ❤ Donate ₹1/day →
          </button>

          <button className="border border-white px-8 py-3 rounded-full">
            🌱 Adopt a Tree
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <span>🏆 Certified NGO</span>
          <span>🔒 100% Secure</span>
          <span>📊 Transparent Reports</span>
          <span>🌍 Global Impact</span>
        </div>

      </div>
    </section>
  )
}
