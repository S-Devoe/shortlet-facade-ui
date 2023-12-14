import AuthenticatedLayout from "@/layouts/authenticated.layout";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
};

export default Layout;
