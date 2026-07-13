function Signup({ setCurrentPage }) {
  return (
    <div className="container d-flex align-items-center justify-content-center py-5" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg" style={{ maxWidth: "450px", width: "100%" }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Join SweetDelight</h2>
            <p className="text-muted">Create your account and enjoy fresh cakes</p>
          </div>

          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="Emma" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Watson" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="you@example.com" />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="+1 (555) 123-4567" />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Create a strong password" />
            </div>

            <button type="button" className="btn btn-dark btn-lg w-100 mb-3">
              Create Account
            </button>
          </form>

          <div className="text-center">
            <p>
              Already have an account?{' '}
              <button 
                className="btn btn-link p-0 text-decoration-none fw-medium"
                onClick={() => setCurrentPage('login')}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;