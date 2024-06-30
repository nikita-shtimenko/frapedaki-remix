import { ActionFunctionArgs, MetaFunction } from "@vercel/remix";
import { Form, redirect, useNavigation } from "@remix-run/react";
import { EmailIncomingMessage } from "emails/incoming-message";
import { LoaderCircleIcon } from "lucide-react";
import { Resend } from "resend";
import PageDefaultLayout from "~/components/page-default-layout";
import { Button } from "~/components/ui/button";
import { Field, FieldGroup, Fieldset, Label } from "~/components/ui/fieldset";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { PageHeading, PageSubheading } from "~/components/page-heading";
import { z } from "zod";
import { json } from "@remix-run/node";
import { parseWithZod } from "@conform-to/zod";

export const meta: MetaFunction = () => {
  return [
    { title: "צור קשר" },
    { name: "description", content: "עמוד ליצירת קשר" },
  ];
};

const schema = z.object({
  firstName: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string({ required_error: "First name is required" }),
  ),
  lastName: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string({ required_error: "Last name is required" }),
  ),
  company: z.string(),
  email: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string({ required_error: "Email is required" }).email("Email is invalid"),
  ),
  phoneNumber: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string({ required_error: "Phone number is required" }),
  ),
  message: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string({ required_error: "Message is required" })
      .max(512, "Message is too long"),
  ),
});

export async function action({ request }: ActionFunctionArgs) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== "success") {
    return json(submission.reply());
  }

  const { error } = await resend.emails.send({
    from: "website_noreply@frapedaki.co.il",
    to: "office@frapedaki.com",
    subject: `הודעה חדשה מ ${firstName} ${lastName} (${email})`,
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

// export async function action({ request }: ActionFunctionArgs) {
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   const formData = await request.formData();

//   const lastName = String(formData.get("last-name"));
//   const firstName = String(formData.get("first-name"));
//   const company = String(formData.get("company"));
//   const email = String(formData.get("email"));
//   const phoneNumber = String(formData.get("phone-number"));
//   const message = String(formData.get("message"));

//   const { error } = await resend.emails.send({
//     from: "website_noreply@frapedaki.co.il",
//     to: "office@frapedaki.com",
//     subject: `הודעה חדשה מ ${firstName} ${lastName} (${email})`,
//     react: (
//       <EmailIncomingMessage
//         firstName={firstName}
//         lastName={lastName}
//         company={company}
//         email={email}
//         phone={phoneNumber}
//         message={message}
//       />
//     ),
//   });

//   if (error) {
//     return redirect("/contact-us/error");
//   }

//   return redirect("/contact-us/success");
// }

export default function PageContactUs() {
  const navigation = useNavigation();
  const busy = navigation.state !== "idle";

  return (
    <PageDefaultLayout>
      <main className="flex flex-col items-center gap-y-8">
        <div className="mx-auto max-w-2xl text-center">
          <PageHeading>דברו איתנו</PageHeading>
          <PageSubheading>
            נשמח לשמוע מכם! בין אם יש לכם שאלות, הערות, או הצעות לשיפור, או אם
            אתם עסק שמעוניין להזמין אירוח לאירועים או לשתף פעולה איתנו, אנו כאן
            כדי להקשיב ולעזור.
          </PageSubheading>
        </div>
        <Form method="post" className="flex w-full max-w-screen-xs flex-col">
          <Fieldset>
            <FieldGroup className="text-right">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <Field>
                  <Label id="label-last-name" htmlFor="last-name">
                    שם משפחה
                  </Label>
                  <Input
                    id="last-name"
                    type="text"
                    name="last-name"
                    autoComplete="family-name"
                    aria-labelledby="label-last-name"
                  />
                </Field>
                <Field>
                  <Label id="label-first-name" htmlFor="first-name">
                    שם
                  </Label>
                  <Input
                    id="first-name"
                    type="text"
                    name="first-name"
                    autoComplete="given-name"
                    aria-required="true"
                    aria-labelledby="label-first-name"
                    required
                  />
                </Field>
                <Field className="sm:col-span-2">
                  <Label id="label-company" htmlFor="company">
                    חברה
                  </Label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    aria-labelledby="label-company"
                  />
                </Field>
                <Field className="sm:col-span-2">
                  <Label id="label-email" htmlFor="email">
                    מייל
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    aria-required="true"
                    aria-labelledby="label-email"
                    required
                  />
                </Field>
                <Field className="sm:col-span-2">
                  <Label id="label-phone-number" htmlFor="phone-number">
                    מספר טלפון
                  </Label>
                  <Input
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    autoComplete="tel"
                    dir="rtl"
                    aria-labelledby="label-phone-number"
                    aria-required="true"
                    required
                  />
                </Field>
                <Field className="sm:col-span-2">
                  <Label id="label-message" htmlFor="message">
                    הודעה
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    aria-labelledby="label-message"
                    aria-required="true"
                    required
                  />
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
