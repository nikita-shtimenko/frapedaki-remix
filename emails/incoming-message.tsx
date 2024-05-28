import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Font,
} from "@react-email/components";

interface EmailIncomingMessageProps {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailIncomingMessage = ({
  firstName,
  lastName,
  company,
  email,
  phone,
  message,
}: EmailIncomingMessageProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Heebo"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/heebo/v26/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EiSysd0mg7UiCXB5WkK8.woff",
            format: "woff",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>התקבלה הודעה חדשה</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 text-right font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 mb-[16px] p-0 text-center text-[56px] font-black text-blue-600">
              פראפדקי
            </Heading>
            <Heading className="mx-0 mt-[64px] p-0 text-center text-[32px] font-bold text-black">
              הודעה חדשה
            </Heading>
            <Hr />
            <Section className="py-[16px]">
              <Heading className="text-center text-[24px] font-black">
                פרטי השולח
              </Heading>
              <Text>
                <strong className="text-blue-600">שם השולח</strong>
                <br />
                {firstName} {lastName}
              </Text>
              {company && (
                <Text>
                  <strong className="text-blue-600">שם החברה</strong>
                  <br />
                  {company}
                </Text>
              )}
              <Text>
                <strong className="text-blue-600">אימייל</strong>
                <br />
                {email}
              </Text>
              <Text>
                <strong className="text-blue-600">מספר טלפון</strong>
                <br />
                {phone}
              </Text>
            </Section>
            <Hr />
            <Section className="py-[16px]">
              <Heading className="text-center text-[24px] font-bold">
                פרטי הודעה
              </Heading>
              <Text className="rounded-md border bg-gray-100 p-4 text-[14px] leading-[24px] text-black">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EmailIncomingMessage.PreviewProps = {
  firstName: "ניקיטה",
  lastName: "שטימנקו",
  company: "פראפדקי",
  email: "nikitashtimenko.dev@gmail.com",
  phone: "0525244403",
  message: `לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.

  צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
  
  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.`,
} as EmailIncomingMessageProps;

export default EmailIncomingMessage;
