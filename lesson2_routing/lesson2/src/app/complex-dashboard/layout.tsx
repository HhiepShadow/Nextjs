import React from "react";

const DashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex flex-col">
        <div>{users}</div>
        <div>{revenue}</div>
      </div>
      <div className="flex flex-1">{notifications}</div>
    </div>
  ) : (
    login
  );
};

export default DashboardLayout;
