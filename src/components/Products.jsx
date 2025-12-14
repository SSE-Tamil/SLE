import React from 'react';
import productBracket from '../assets/images/product-bracket.png';
import productEnclosure from '../assets/images/product-enclosure.png';
import productMesh from '../assets/images/product-mesh.png';

const Products = () => {
    return (
        <section id="products" className="products section-padding">
            <div className="container">
                <div className="section-header reveal fade-bottom">
                    <h2>Welded Components</h2>
                    <p>Delivering high-strength assemblies for leading manufacturers.</p>
                </div>
                <div className="grid-3">
                    {[
                        { title: "Automotive Brackets", desc: "Precision spot-welded mounting brackets.", img: productBracket, delay: "0.1s" },
                        { title: "Electrical Enclosures", desc: "Seam and spot welded industrial cabinets.", img: productEnclosure, delay: "0.2s" },
                        { title: "Grid Mesh Assemblies", desc: "Multi-point welded wire mesh structures.", img: productMesh, delay: "0.3s" }
                    ].map((prod, index) => (
                        <div key={index} className="product-card reveal fade-bottom" style={{ transitionDelay: prod.delay }}>
                            <div className="product-img">
                                <img src={prod.img} alt={prod.title} />
                            </div>
                            <div className="product-info">
                                <h3>{prod.title}</h3>
                                <p>{prod.desc}</p>
                                <a href="#contact" className="link-arrow">Enquire Now <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
