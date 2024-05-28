import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, redirect, useNavigation } from "@remix-run/react";
import { EmailIncomingMessage } from "emails/incoming-message";
import { LoaderCircleIcon } from "lucide-react";
import { Resend } from "resend";
import PageDefaultLayout from "~/components/page-default-layout";
import { Button } from "~/components/ui/button";
import { Field, FieldGroup, Fieldset, Label } from "~/components/ui/fieldset";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export const meta: MetaFunction = () => {
  return [
    { title: "פראפדקי" },
    { name: "description", content: "צרו איתנו קשר, אנו מחכים להודעתכם!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await request.formData();

  const lastName = String(formData.get("last-name"));
  const firstName = String(formData.get("first-name"));
  const company = String(formData.get("company"));
  const email = String(formData.get("email"));
  const phoneNumber = String(formData.get("phone-number"));
  const message = String(formData.get("message"));

  const { error } = await resend.emails.send({
    from: "noreply@frapedaki.co.il",
    to: "support@frapedaki.co.il",
    subject: "התקבלה הודעה חדשה",
    react: (
      <EmailIncomingMessage
        firstName={firstName}
        lastName={lastName}
        company={company}
        email={email}
        phone={phoneNumber}
        message={message}
      />
    ),
  });

  if (error) {
    return redirect("/contact-us/error");
  }

  return redirect("/contact-us/success");
}

export default function PageContactUs() {
  const navigation = useNavigation();
  const busy = navigation.state !== "idle";

  return (
    <PageDefaultLayout>
      <main className="flex flex-col items-center gap-y-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
            דברו איתנו
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            נשמח לשמוע מכם! בין אם יש לכם שאלות, הערות, או הצעות לשיפור, או אם
            אתם עסק שמעוניין להזמין אירוח לאירועים או לשתף פעולה איתנו, אנו כאן
            כדי להקשיב ולעזור.
          </p>
        </div>
        <Form method="post" className="flex w-full max-w-screen-xs flex-col">
          <Fieldset>
            <FieldGroup className="text-right">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <Field>
                  <Label htmlFor="last-name">שם משפחה</Label>
                  <Input
                    id="last-name"
                    type="text"
                    name="last-name"
                    autoComplete="family-name"
                  />
                </Field>
                <Field>
                  <Label htmlFor="first-name">שם</Label>
                  <Input
                    id="first-name"
                    type="text"
                    name="first-name"
                    autoComplete="given-name"
                    required
                  />
                </Field>
                <Field className="sm:col-span-2">
                  <Label htmlFor="company">חברה</Label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                  />
                </Field>
                <Field className="sm:col-span-2">
                  <Label htmlFor="email">מייל</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </Field>
                <Field className="sm:col-span-2">
                  <Label htmlFor="email">מספר טלפון</Label>
                  <Input
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    autoComplete="tel"
                    required
                  />
                </Field>
                <Field className="sm:col-span-2">
                  <Label htmlFor="message">הודעה</Label>
                  <Textarea id="message" name="message" required />
                </Field>
              </div>
            </FieldGroup>
          </Fieldset>
          <Button
            type="submit"
            color="blue"
            className="mt-12 w-full self-center text-right lg:w-1/2"
            disabled={busy}
          >
            {busy && <LoaderCircleIcon className="animate-spin" />}
            שלח הודעה
          </Button>
        </Form>
      </main>
    </PageDefaultLayout>
  );
}
