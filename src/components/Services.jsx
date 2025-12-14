import React from 'react';
import serviceSpot from '../assets/images/service-spot.png';
import serviceProjection from '../assets/images/service-projection.png';
import serviceFabrication from '../assets/images/service-fabrication.png';

const Services = () => {
    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <div className="section-header reveal fade-bottom">
                    <h2>Our Specialized Services</h2>
                    <p>Comprehensive welding and fabrication solutions tailored for Chennai's industrial needs.</p>
                </div>
                <div className="grid-3">
                    <div className="service-card reveal fade-left">
                        <div className="service-img">
                            <img src={serviceSpot} alt="Spot Welding" />
                        </div>
                        <h3>Spot Welding</h3>
                        <p>High-speed, precision spot welding for sheet metal assemblies, ensuring strong and clean joints for automotive parts.</p>
                    </div>
                    <div className="service-card reveal fade-bottom">
                        <div className="service-img">
                            <img src={serviceProjection} alt="Projection Welding" />
                        </div>
                        <h3>Projection Welding</h3>
                        <p>Advanced projection welding services for nuts, bolts, and specialized fasteners on sheet metal components.</p>
                    </div>
                    <div className="service-card reveal fade-right">
                        <div className="service-img">
                            <img src={serviceFabrication} alt="Sheet Metal Fabrication" />
                        </div>
                        <h3>Sheet Metal Fabrication</h3>
                        <p>Complete fabrication services including bending, cutting, and assembly to complement our welding capabilities.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
