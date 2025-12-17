export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: "🔍",
      title: "Discover Stays",
      desc: "Browse handpicked luxury hotels curated for comfort, style, and premium experiences.",
    },
    {
      id: 2,
      icon: "🤍",
      title: "Personalized Match",
      desc: "We help you find the perfect stay based on your preferences and travel style.",
    },
    {
      id: 3,
      icon: "🏨",
      title: "Book with Confidence",
      desc: "Verified listings, transparent pricing, and a seamless booking experience.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      
   
      <div className="text-center mb-16">
        <h2 className="font-playfair text-5xl mb-4">
          How It Works
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A simple, elegant journey from discovery to a perfect stay.
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group bg-white rounded-2xl p-10 text-center
            shadow-sm hover:shadow-xl transition-all duration-300
            hover:-translate-y-2"
          >
       
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
            rounded-full border border-yellow-400/40 text-3xl
            group-hover:bg-yellow-400/10 transition">
              {step.icon}
            </div>

           
            <h3 className="font-playfair text-2xl mb-3">
              {step.title}
            </h3>

           
            <p className="text-gray-500 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
