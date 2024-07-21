import LoginRegisterLayout from '../layouts/LoginRegisterLayout'
import FitLogo from '../components/FitLogo'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <LoginRegisterLayout>
      <FitLogo />
      <h2 className='font-semibold text-2xl'>Prijava</h2>
      <LoginForm />
    </LoginRegisterLayout>
  )
}

export default Login
