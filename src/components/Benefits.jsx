export default function Benefits() {
  const features = [
    { 
      img: "https://mlwqjelx2sgt.i.optimole.com/cb:bbVa.40e/w:745/h:746/q:mauto/https://thethinkschool.com/wp-content/uploads/2025/02/success_11350911-2.png", 
      title: "Measure Your Growth" 
    },
    { 
      img: "https://mlwqjelx2sgt.i.optimole.com/cb:bbVa.40e/w:592/h:592/q:mauto/https://thethinkschool.com/wp-content/uploads/2025/02/diagram_7147881-1.png", 
      title: "Structured Learning" 
    },
    { 
      img: "https://mlwqjelx2sgt.i.optimole.com/cb:bbVa.40e/w:759/h:758/q:mauto/https://thethinkschool.com/wp-content/uploads/2025/02/megaphone_6801754-1.png", 
      title: "Stay Updated and Informed" 
    },
    { 
      img: "https://mlwqjelx2sgt.i.optimole.com/cb:bbVa.40e/w:745/h:746/q:mauto/https://thethinkschool.com/wp-content/uploads/2025/02/certificate_12659962-1.png", 
      title: "Get Certified" 
    },
    { 
      img: "https://mlwqjelx2sgt.i.optimole.com/cb:bbVa.40e/w:745/h:746/q:mauto/https://thethinkschool.com/wp-content/uploads/2025/02/certificate_12659962-1.png", 
      title: "Exclusive Community" 
    },
    { 
      img: "https://mlwqjelx2sgt.i.optimole.com/cb:bbVa.40e/w:746/h:746/q:mauto/https://thethinkschool.com/wp-content/uploads/2025/02/success_11350911-3.png", 
      title: "Tools of Titans" 
    },
  ];

  return (
    <section id="benefits" className="w-full bg-black py-16 px-6 md:px-16 text-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        What Makes our Services Best 
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-20 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-4 text-left justify-start"
          >
            <img 
              src={feature.img} 
              alt={feature.title} 
              className="w-24 h-24 object-contain"
            />
            <p className="text-lg font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
