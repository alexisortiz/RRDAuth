import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from 'react-router-dom'
import { LoginPage } from './pages/Login'
import { ProfilePage } from './pages/Profile'
import { SettingsPage } from './pages/Settings'
import { ProtectedLayout } from './components/ProtectedLayout'
import { HomeLayout } from './components/HomeLayout'
import { AuthLayout } from './components/AuthLayout'

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user')
      resolve(user)
    }, 3000),
  )

// for error
// const getUserData = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 3000)
//   );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Route>,
  ),
)
