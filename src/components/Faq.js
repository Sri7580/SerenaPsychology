import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, I do not accept insurance directly. However, I provide a superbill you can submit to your insurance for potential reimbursement."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes, all sessions are conducted virtually via Zoom in a secure, HIPAA-compliant environment."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Please provide at least 24 hours’ notice for cancellations or rescheduling. Missed or late-cancelled appointments may be subject to a fee."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-green-900 font-medium hover:bg-green-50 transition"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
