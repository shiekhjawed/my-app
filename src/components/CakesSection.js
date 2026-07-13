const cakes = [
  { 
    id: 1, 
    name: "Chocolate Dream", 
    price: 45, 
    img: "/images/dream cake2.webp",   // ← Must match exactly
    desc: "Rich chocolate with ganache" 
  },
  { 
    id: 2, 
    name: "Strawberry Bliss", 
    price: 42, 
    img: "/images/strawberry cake.jfif", 
    desc: "Fresh strawberries & cream" 
  },
  { 
    id: 3, 
    name: "Velvet Red", 
    price: 48, 
    img: "/images/red valvet.jfif",   // ← Must match exactly
    desc: "Classic red velvet" 
  },
  { 
    id: 4, 
    name: "Mango Paradise", 
    price: 40, 
    img: "/images/mango.jfif", 
    desc: "Tropical mango delight" 
  },
];

function CakesSection() {
  return (
    <section id="cakes" className="py-5 bg-secondary">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5 ">Our Signature Cakes</h2>
        
        <div className="row g-4">
          {cakes.map(cake => (
            <div className="col-md-6 col-lg-3" key={cake.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={cake.img} 
                  className="card-img-top" 
                  alt={cake.name} 
                  style={{ height: "250px", objectFit: "cover" }} 
                />
                <div className="card-body text-center ">
                  <h5 className="card-title">{cake.name}</h5>
                  <p className="text-muted small">{cake.desc}</p>
                  <p className="fw-bold fs-4 text-success">${cake.price}</p>
                  <button className="btn btn-dark w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CakesSection;