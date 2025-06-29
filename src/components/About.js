import Image from 'next/image';


const About = () => (
  <section className="bg-white py-16 px-6 sm:px-12 text-gray-800">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
      {/* Doctor's Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/serenaBlake.jpg"
          alt="Dr. Serena Blake"
          className="rounded-xl shadow-md object-cover"
          width={500}
          height={600}
        />
      </div>

      {/* About Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 text-green-800">
          Meet Dr. Serena Blake, PsyD
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Dr. Serena Blake is a licensed clinical psychologist based in Los Angeles, CA, with over 8 years of experience and 500+ sessions supporting individuals on their healing journeys. 
          She blends cognitive-behavioral therapy and mindfulness with personalized, compassionate care.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mt-4">
          Whether navigating anxiety, trauma, or relationship challenges, Dr. Blake offers in-person care in Los Angeles and virtual sessions through PSYPACT in most U.S. states — all in a safe, supportive space.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mt-4">
          Her goal is to help you reconnect with calm, build resilience, and move forward with clarity and confidence.
        </p>
      </div>
    </div>
  </section>
);

export default About;
