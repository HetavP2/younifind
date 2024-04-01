import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = `https://www.younifind.ca`;

export const ApprovalPendingEmailTemplate = () => (
  <Html>
    <Head />
    <Preview>Explore futures, younifind your path.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/images/younifind.png`}
          width="300"
          height="100"
          alt="younifind"
          style={logo}
        />
        <Text style={paragraph}>Hi,</Text>
        <Text style={paragraph}>An opportunity wants to get posted.</Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://www.younifind.ca/adminPanel">
            Approve Now
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          younifind team
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

export default ApprovalPendingEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,roboto-slab',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#0C234D",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#0C234D",
  margin: "20px 0",
};

const footer = {
  color: "#F7CE3D",
  fontSize: "12px",
};
