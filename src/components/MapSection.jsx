import React from 'react';

const MapSection = () => {
    return (
        <section className="map-section reveal fade-bottom" style={{ marginBottom: '-6px' }}>
            {/* Map pointing to Ambattur Industrial Estate, Chennai */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.002955562064!2d80.16045637489626!3d13.102574987224853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263a43697621d%3A0xc68dff0397500127!2sAmbattur%20Industrial%20Estate%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715594000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location Chennai"
            ></iframe>
        </section>
    );
};

export default MapSection;
