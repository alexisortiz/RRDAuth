// import React, { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom'
// import Root, { loader as rootLoader, action as rootAction } from './routes/root'
// import './index.css'
// import ErrorPage from './error-page'
// import Contact, {
//   loader as contactLoader,
//   action as contactAction,
// } from './routes/contact'
// import EditContact, { action as editAction } from './routes/edit'
// import { action as destroyAction } from './routes/destroy'
// import Index from './routes/index'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Index />} />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//           action={contactAction}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//         <Route path="contacts/:contactId/destroy" action={destroyAction} />
//       </Route>
//     </Route>,
//   ),
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router-dom'

import { router } from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const theme = createTheme({
  palette: {
    primary: { main: '#3a34d2' },
  },
})

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
