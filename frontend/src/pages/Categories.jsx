import React from 'react'

export default function Categories() {
  return (
   <>
    <div className='fs-4 fw-semibold'>
        <p>Popular Categories</p>
      </div>
      <div className="d-flex justify-content-center mt-4">
      

      <div
        className="card border-0 text-center p-2"
        style={{
          width: "170px",
          borderRadius: "12px",
          backgroundColor: "#f8f9fa",
          border: "1px solid #198754",
          transition: "0.3s",
          cursor: "pointer"
        }}
      >
        
        {/* Image */}
        <div
          className="overflow-hidden rounded"
          style={{ borderRadius: "10px" }}
        >
          <img
            src="/your-image.png"  // 👉 add your image
            alt="Fresh Fruit"
            className="img-fluid"
            style={{
              transition: "transform 0.3s ease"
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Text */}
        <div className="pt-2">
          <p className="mb-0 fw-medium small">Fresh Fruit</p>
        </div>

      </div>

    </div>
   </>
  )
}
