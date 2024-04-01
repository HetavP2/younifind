import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = `https://www.younifind.ca`;

export const ReviewOpportunityAgain = (content: string | undefined) => {
  const previewText = `Needs review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src={`${baseUrl}/images/younifind.png`}
              width="96"
              height="30"
              alt="younifind"
            />
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Please review your opportunity again</Text>
              <Text style={paragraph}>
                Here is why it does not meet our standards:
              </Text>
              <Text style={review}>{content}</Text>

              <Button style={button} href="https://www.younifind.ca/dashboard">
                Make Changes
              </Button>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* <Section>
            <Row>
              <Text style={{ ...paragraph, fontWeight: "700" }}>
                Common questions
              </Text>
              <Text>
                <Link href="https://airbnb.com/help/article/13" style={link}>
                  How do reviews work?
                </Link>
              </Text>
              <Text>
                <Link href="https://airbnb.com/help/article/1257" style={link}>
                  How do star ratings work?
                </Link>
              </Text>
              <Text>
                <Link href="https://airbnb.com/help/article/995" style={link}>
                  Can I leave a review after 14 days?
                </Link>
              </Text>
              <Hr style={hr} />
              <Text style={footer}>
                Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103
              </Text>
              <Link href="https://airbnb.com" style={reportLink}>
                Report unsafe behavior
              </Link>
            </Row>
          </Section> */}
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "-apple-system,BlinkMacSystemFont,roboto-slab",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#0C234D",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
