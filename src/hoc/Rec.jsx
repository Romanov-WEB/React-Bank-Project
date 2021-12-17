import { useLocation, Navigate } from 'react-router'
import AuthReg from 'store/auth/ActionAuth'
import { observer } from 'mobx-react-lite'

const Rec = observer(({ children }) => {
  const location = useLocation()
  const auth = AuthReg.validAuth

  if (!auth) {
    return <Navigate to={'card'} state={{ from: location }} />
  }
  return children
})
export default Rec
