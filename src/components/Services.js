import Image from 'next/image';

const services = [
  {
    title: "Anxiety & Stress Management",
    image: "/streesanxiety.jpg",
    alt: "Calm woman breathing deeply outdoors",
    text: "Constant overthinking, tension, or restlessness can be overwhelming. Therapy offers tools to soothe anxiety, regulate stress, and help you reconnect with calm, clarity, and confidence in everyday life."
  },
  {
    title: "Relationship Counseling",
    image: "/relation.jpg",
    alt: "Two people in conversation or walking together",
    text: "Whether you're navigating conflict, communication issues, or patterns that feel hard to break, therapy creates space to explore your relationships with others—and with yourself—with compassion and insight."
  },
  {
    title: "Trauma Recovery",
    image: "/traumarecovery.jpg",
    alt: "Person walking forward in soft light",
    text: "Trauma can disconnect you from safety and self-trust. Through grounded, evidence-based approaches, we’ll process your experiences at your pace and help rebuild a sense of resilience, meaning, and wholeness."
  }
];

const Services = () => (
  <section className="bg-gray-50 py-20 px-6 sm:px-12">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-green-800 mb-12">
        Services & Specialties
      </h2>

      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center gap-8 mb-16`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 h-64 relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4">
              {service.title}
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">{service.text}</p>
          </div>
        </div>
      ))}
    </div>
    {/* --- Rates & Insurance Section --- */}
{/* --- Rates & Insurance Section --- */}
<div className="bg-white mt-20 rounded-2xl shadow-xl p-8 sm:p-10 text-gray-800 space-y-10">
  <h3 className="text-3xl font-semibold text-center text-green-800">
    Rates & Insurance
  </h3>

  {/* Session Fees Cards */}
  <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
    <div className="flex-1 bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm hover:shadow-md transition">
      <p className="text-lg font-semibold text-green-900">Individual Session</p>
      <p className="text-2xl font-bold mt-2">$200</p>
    </div>
    <div className="flex-1 bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm hover:shadow-md transition">
      <p className="text-lg font-semibold text-green-900">Couples Session</p>
      <p className="text-2xl font-bold mt-2">$240</p>
    </div>
  </div>

  {/* Insurance Details */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-inner text-base">
    <h4 className="text-xl font-semibold text-green-700 mb-3">Insurance</h4>
    <p className="text-gray-700 leading-relaxed">
      I accept private pay and am in-network with <strong>BCBS</strong> and <strong>Aetna</strong>. 
      If you’re using an out-of-network plan, I’ve partnered with Mentaya to help you{' '}
      <a href="#" className="text-green-700 underline hover:text-green-900 transition">
        check your eligibility for reimbursement
      </a>{' '}
      for my services.
    </p>
  </div>
</div>



  </section>
);

export default Services;
