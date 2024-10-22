import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="grid h-screen w-full place-content-center">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
