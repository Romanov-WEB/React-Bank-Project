import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import './assets/style/Style.scss'
import Authorization from './authorization/component'
import Wrapper from './pages/wrapper'
import IssueCard from './pages/issue-card/component'
import AuthReg from './store/auth/ActionAuth'

const App = observer(() => {
  console.log('render App')
  return (
    <Routes>
      <Route path="/" element={<Authorization auth={AuthReg.validAuth} />} />
      <Route path="card" element={<Wrapper auth={AuthReg.validAuth} />} />
      <Route path="issue" element={<IssueCard auth={AuthReg.validAuth} />} />
    </Routes>
  )
})
export default App

// export default class App extends React.Component {
//   state = {
//     auth: false,
//   }
//
//   componentDidMount() {
//     const token = localStorage.getItem('token')
//     fetch('https://lab.lectrum.io/js2/api/ironbank/auth', {
//       headers: {
//         accept: '*/*',
//         'x-token': token,
//       },
//     })
//       .then((res) => res.ok)
//       .then((data) => {
//         this.setState({
//           auth: data,
//         })
//       })
//   }
//
//   render() {
//     return (
//       <Routes>
//         <Route path="/" element={<Authorization auth={this.state.auth} />} />
//         <Route path="card" element={<Wrapper auth={this.state.auth} />} />
//         <Route path="issue" element={<IssueCard auth={this.state.auth} />} />
//       </Routes>
//     )
//   }
// }
