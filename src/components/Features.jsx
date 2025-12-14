import React from 'react';

const Features = () => {
    const features = [
        {
            icon: "fa-check-double",
            title: "Strong Welds",
            desc: "Achieving high shear strength and structural integrity in every spot weld."
        },
        {
            icon: "fa-bolt",
            title: "Fast Production",
            desc: "Automated spot welding processes ensuring rapid turnaround for large orders."
        },
        {
            icon: "fa-certificate",
            title: "ISO Certified",
            desc: "Adhering to strict welding quality standards (ISO 3834) for consistency."
        },
        {
            icon: "fa-microchip",
            title: "Advanced Control",
            desc: "Microprocessor-controlled welders for precise current and timing."
        }
    ];

    return (
        <section id="about" className="section-padding bg-light">
            <div className="container">
                <div className="section-header reveal fade-bottom">
                    <h2>Why Choose Our Welding?</h2>
                    <p>Specialized expertise in joining sheet metal components.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-box reveal fade-bottom" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="feature-icon">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
