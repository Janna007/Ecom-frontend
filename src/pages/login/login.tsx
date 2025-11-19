function Login() {
  return (
    <div>
      <h1>Sign In</h1>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <input type='checkbox' id="remember-me"/>
      <label htmlFor="remember-me">Remember me</label>
      <button>Log In</button>
      <a href="#">Forgot Password?</a>

    </div>
  )
}
export default Login
