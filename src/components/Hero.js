const Hero = () => (
  <section className="relative w-full h-screen overflow-hidden bg-black">
    {/* Calming Video Background */}
    <video
      className="absolute inset-0 w-full h-full object-cover brightness-75"
      src="/calm-nature.mp4"
      autoPlay
      muted
      loop
      playsInline
    />

    {/* Content Overlay */}
    <div className="absolute inset-0 flex items-center justify-center px-6">
      <div className="text-center text-white max-w-2xl backdrop-blur-md bg-black/40 p-8 sm:p-12 rounded-xl">
        <h1 className="text-3xl sm:text-5xl font-light leading-snug mb-4">
          Therapy Rooted in <br />
          <span className="text-green-200 font-semibold">Compassion, Clarity, and Growth</span>
        </h1>
        <h2 className="text-sm sm:text-base text-gray-200 font-light mb-6">
          Providing psychotherapy for adults across California and PSYPACT states —
          in-person in Los Angeles and virtually via secure Zoom sessions.
        </h2>
        <button className="bg-white text-green-800 font-medium px-6 py-3 rounded-full hover:bg-green-100 transition">
          Schedule a Consultation
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
