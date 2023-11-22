import { Navigate, Outlet } from 'react-router-dom';
import { userStore } from '../store/store';

export default function ProtectedRoute({ children }) {
  const user = userStore((state) => state.user);
  if (!user) return <Navigate to="/not-authenticated" />
  return children ? children : <Outlet />;
}