import { StackedLayout } from "~/components/ui/stacked-layout";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarDivider,
  NavbarSpacer,
} from "~/components/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarSection,
  SidebarItem,
  SidebarFooter,
} from "~/components/ui/sidebar";
import { ReactNode, useState } from "react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "~/components/ui/alert";

const navItems = [
  { label: "עמוד בית", url: "/" },
  { label: "תפריט", url: "/menu" },
  { label: "צור קשר", url: "/contact-us" },
];

interface PageLayoutProps {
  children?: ReactNode;
}

export default function PageDefaultLayout({ children }: PageLayoutProps) {
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <StackedLayout
      navbar={
        <Navbar>
          <Link
            to="/"
            aria-label="קישור לעמוד בית"
            className="hidden font-greek text-2xl text-blue-600 lg:block"
          >
            FRAPEDAKI
          </Link>
          <NavbarDivider className="max-lg:hidden" />
          <NavbarSection className="max-lg:hidden">
            {navItems.map(({ label, url }) => (
              <NavbarItem key={label} href={url}>
                {label}
              </NavbarItem>
            ))}
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection className="hidden lg:flex">
            <div className="flex flex-row gap-x-2">
              <Button
                outline
                onClick={() => setAlertOpen(true)}
                aria-label="התחברות לחשבון קיים"
              >
                התחברות
              </Button>
              <Button
                color="blue"
                onClick={() => setAlertOpen(true)}
                aria-label="פתיחת חשבון חדש"
              >
                פתיחת חשבון
              </Button>
            </div>
            <Alert open={alertOpen} onClose={setAlertOpen}>
              <AlertTitle>אזור אישי - בקרוב!</AlertTitle>
              <AlertDescription>
                אזור אישי לא זמין כרגע כי אנחנו עובדים על שיפורו והוספת תכונות
                חדשות ומרגשות.
                <br />
                <br />
                אנחנו מתרגשים לשתף אתכם במהרה באזור אישי מחודש ומשופר. תודה על
                הסבלנות וההבנה.
                <br />
                <br />
                בברכה, צוות האתר
              </AlertDescription>
              <AlertActions>
                <Button
                  color="blue"
                  onClick={() => setAlertOpen(false)}
                  aria-label="כפתור סגירת חלון מידע"
                >
                  סגור חלון מידע
                </Button>
              </AlertActions>
            </Alert>
          </NavbarSection>
          <NavbarSection className="flex items-center lg:hidden">
            <Link
              to="/"
              className="font-greek text-2xl text-blue-600"
              aria-label="קישור לעמוד בית"
            >
              FRAPEDAKI
            </Link>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarBody className="mt-4">
            <SidebarSection>
              {navItems.map(({ label, url }) => (
                <SidebarItem key={label} href={url}>
                  {label}
                </SidebarItem>
              ))}
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="gap-y-2">
            <Button outline onClick={() => setAlertOpen(true)}>
              התחבר
            </Button>
            <Button color="blue" onClick={() => setAlertOpen(true)}>
              פתיחת חשבון
            </Button>
            <Alert open={alertOpen} onClose={setAlertOpen}>
              <AlertTitle>אזור אישי - בקרוב!</AlertTitle>
              <AlertDescription>
                אזור אישי לא זמין כרגע כי אנחנו עובדים על שיפורו והוספת תכונות
                חדשות ומרגשות.
                <br />
                <br />
                אנחנו מתרגשים לשתף אתכם במהרה באזור אישי מחודש ומשופר. תודה על
                הסבלנות וההבנה.
                <br />
                <br />
                בברכה, צוות האתר
              </AlertDescription>
              <AlertActions>
                <Button color="blue" onClick={() => setAlertOpen(false)}>
                  סגור חלון מידע
                </Button>
              </AlertActions>
            </Alert>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </StackedLayout>
  );
}
