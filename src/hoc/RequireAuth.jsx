import { useLocation, Navigate } from 'react-router'
import AuthReg from 'store/auth/ActionAuth'
import { observer } from 'mobx-react-lite'

const RequireAuth = observer(({ children }) => {
  const location = useLocation()
  const auth = AuthReg.validAuth

  if (!auth) {
    return <Navigate to={'/'} state={{ from: location }} />
  }
  return children
})
export default RequireAuth
