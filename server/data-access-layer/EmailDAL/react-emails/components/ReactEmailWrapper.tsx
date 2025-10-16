import * as React from "react";
import { Html, Head, Body, Container, Section } from "@react-email/components";

interface ReactEmailWrapperProps {
  children: React.ReactNode;
}

export default function ReactEmailWrapper({
  children,
}: ReactEmailWrapperProps) {
  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={sectionStyle}>{children}</Section>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle = {
  backgroundColor: "#ccc",
  fontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: "0",
  padding: "0",
};

const containerStyle = {
  backgroundColor: "#ccc",
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const sectionStyle = {
  backgroundColor: "#FAFAFA",
  borderRadius: "8px",
  padding: "40px",
  margin: "20px 0",
};
