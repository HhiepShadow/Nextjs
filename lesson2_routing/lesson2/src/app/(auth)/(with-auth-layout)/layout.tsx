import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
          <h2>Auth Layout</h2>
          {children}
    </div>
  );
};

export default AuthLayout;
