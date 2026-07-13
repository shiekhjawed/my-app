function Hero() {
  return (
    <div
      className="bg-dark text-white py-5"
      style={{
        backgroundImage: "url('/images/back-cake.jfif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container text-center">
        <h1 className="display-1  mb-4">Delicious Moments</h1>
        <p className="lead fs-3 mb-5">Handcrafted cakes made with love in every layer</p>
        <button
          className="btn btn-light fw-bold btn-lg px-5 py-3 fs-5"
          onClick={() => document.getElementById('cakes')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Our Cakes
        </button>
      </div>
    </div>
  );
}

export default Hero;