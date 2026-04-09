import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouterProps {
  children: ReactElement;
  auth: boolean;
}

export const PrivateRouter: React.FC<PrivateRouterProps> = ({
  children,
  auth,
}) => {
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return children;
};
