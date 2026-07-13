function Login({ setCurrentPage }) {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Welcome Back</h2>
            <p className="text-muted">Sign in to order delicious cakes</p>
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control form-control-lg" placeholder="you@example.com" />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control form-control-lg" placeholder="••••••••" />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="text-decoration-none">Forgot Password?</a>
            </div>

            <button type="button" className="btn btn-dark btn-lg w-100 mb-3">
              Sign In
            </button>
          </form>

          <div className="text-center mt-4">
            <p>
              Don't have an account?{' '}
              <button 
                className="btn btn-link p-0 text-decoration-none fw-medium"
                onClick={() => setCurrentPage('signup')}
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;