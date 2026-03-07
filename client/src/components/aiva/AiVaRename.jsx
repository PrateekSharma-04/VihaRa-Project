import { useState } from "react";

export default function AiVaRename() {
  const [name, setName] = useState("");

  return (
    <section id="rename-guide" className="bg-[#F5F2EC] py-28">

      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-5xl font-serif text-[#1F3D34]">
          Make It Personal
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          AiVa adapts to your style, your pace, and your preferences.
        </p>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm mt-12 p-10">

          <p className="text-[#1F3D34] mb-4">
            What would you like to call your guide?
          </p>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter a name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#1F3D34] rounded-xl px-6 py-4 text-lg outline-none"
          />

          {/* Button */}
          <button
            className="w-full mt-6 bg-[#8C988F] text-white py-4 rounded-xl text-lg font-medium"
          >
            Save Name
          </button>

          {/* Note */}
          <p className="text-center text-gray-400 text-sm mt-6">
            You can change your guide's name anytime in settings.
          </p>

        </div>

      </div>

    </section>
  );
}