import * as React from "react";
import { Button } from "@react-email/components";

interface ReactEmailButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function ReactEmailButton({
  href,
  children,
}: ReactEmailButtonProps) {
  return (
    <Button href={href} style={buttonStyle}>
      {children}
    </Button>
  );
}

const buttonStyle = {
  backgroundColor: "#3b82f6",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 24px",
  margin: "24px 0",
  border: "none",
  cursor: "pointer",
};
