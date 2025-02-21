import React from "react";

const MapComponent = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.523299548893!2d20.46358719329125!3d44.72933964685116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7145f950acdd%3A0x4906396ac6b88453!2sAutomatic%20servis%20Dusan!5e0!3m2!1ssr!2srs!4v1740164663757!5m2!1ssr!2srs"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
