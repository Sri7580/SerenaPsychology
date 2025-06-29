import { useState } from 'react';
import { X } from 'lucide-react'; // Or use your preferred close icon

const Contact = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.message) newErrors.message = 'This field is required';
    if (!form.preferredTime) newErrors.preferredTime = 'Please add a time';
    if (!form.agree) newErrors.agree = 'Consent required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      alert('Message sent!');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/40 animate-fadeIn">
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md sm:max-w-lg p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-6">
          Contact Dr. Serena Blake
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-4 py-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

          <input
            type="tel"
            placeholder="Phone"
            className="w-full border px-4 py-2 rounded"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

          <textarea
            rows="3"
            placeholder="What brings you here?"
            className="w-full border px-4 py-2 rounded"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}

          <input
            type="text"
            placeholder="Preferred time to reach you"
            className="w-full border px-4 py-2 rounded"
            value={form.preferredTime}
            onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
          />
          {errors.preferredTime && <p className="text-sm text-red-500">{errors.preferredTime}</p>}

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            />
            <label className="text-sm text-gray-700">I agree to be contacted.</label>
          </div>
          {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
