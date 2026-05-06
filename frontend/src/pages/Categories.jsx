import React from 'react'

export default function Categories({ catego }) {
  if (!catego) return null;
  
  // Use VITE_API_URL from .env or fallback to localhost:4000
  const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
  
  // If the image path starts with /upload, prepend the backend URL
  const imageUrl = catego.img && catego.img.startsWith('/upload') 
    ? `${backendUrl}${catego.img}` 
    : catego.img;

  return (
    <div
      className="card border-0 text-center p-2 h-100"
      style={{
        borderRadius: "12px",
        backgroundColor: "#f8f9fa",
        border: "1px solid #198754",
        transition: "0.3s",
        cursor: "pointer"
      }}
    >
      {/* Image */}
      <div
        className="overflow-hidden rounded mb-2"
        style={{ borderRadius: "10px", height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={imageUrl}
          alt={catego.title}
          className="img-fluid"
          style={{
            maxHeight: "100%",
            transition: "transform 0.3s ease"
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Text */}
      <div className="pt-1">
        <p className="mb-0 fw-bold small">{catego.title}</p>
      </div>
    </div>
  )
}
