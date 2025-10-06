import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useState } from "react"
import Landing from "./pages/Landing/Landing"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Dashboard from "./pages/Dashboard/Dashboard"

function ProtectedRoute({ children, isAuthed }) {
  return isAuthed ? children : <Navigate to="/login" replace />
}

function AppRouter() {
  const [isAuthed, setIsAuthed] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login onLogin={() => setIsAuthed(true)} />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/app"
        element={
          <ProtectedRoute isAuthed={isAuthed}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
