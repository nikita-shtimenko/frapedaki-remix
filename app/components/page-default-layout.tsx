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
import { Button } from "./ui/button";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "./ui/alert";

const navItems = [
  { label: "עמוד בית", url: "/" },
  { label: "תפריט", url: "/menu" },
  // { label: "סניפים", url: "/branches" },
  // { label: "עלינו", url: "/about" },
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

// export default function PageLayout({ children }: PageLayoutProps) {
//   return (
//     <StackedLayout
//       navbar={
//         <Navbar>
//           <Link
//             to="/"
//             className="hidden font-greek text-2xl text-blue-600 lg:block"
//           >
//             FRAPEDAKI
//           </Link>
//           <NavbarDivider className="max-lg:hidden" />
//           <NavbarSection className="max-lg:hidden">
//             {navItems.map(({ label, url }) => (
//               <NavbarItem key={label} href={url}>
//                 {label}
//               </NavbarItem>
//             ))}
//           </NavbarSection>
//           <NavbarSpacer />
//           <NavbarSection>
//             <NavbarItem href="/search" aria-label="Search">
//               <MagnifyingGlassIcon />
//             </NavbarItem>
//             <NavbarItem href="/inbox" aria-label="Inbox">
//               <InboxIcon />
//             </NavbarItem>
//             <Dropdown>
//               <DropdownButton as={NavbarItem}>
//                 <Avatar src="/images/nikita_shtimenko.jpeg" square />
//               </DropdownButton>
//               <DropdownMenu className="min-w-64" anchor="bottom end">
//                 <DropdownItem href="/my-profile">
//                   <UserIcon />
//                   <DropdownLabel>My profile</DropdownLabel>
//                 </DropdownItem>
//                 <DropdownItem href="/settings">
//                   <Cog8ToothIcon />
//                   <DropdownLabel>Settings</DropdownLabel>
//                 </DropdownItem>
//                 <DropdownDivider />
//                 <DropdownItem href="/privacy-policy">
//                   <ShieldCheckIcon />
//                   <DropdownLabel>Privacy policy</DropdownLabel>
//                 </DropdownItem>
//                 <DropdownItem href="/share-feedback">
//                   <LightBulbIcon />
//                   <DropdownLabel>Share feedback</DropdownLabel>
//                 </DropdownItem>
//                 <DropdownDivider />
//                 <DropdownItem href="/logout">
//                   <ArrowRightStartOnRectangleIcon />
//                   <DropdownLabel>Sign out</DropdownLabel>
//                 </DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </NavbarSection>
//         </Navbar>
//       }
//       sidebar={
//         <Sidebar>
//           <SidebarHeader>
//             <p>פראפדקי</p>
//           </SidebarHeader>
//           <SidebarBody className="text-right">
//             <SidebarSection>
//               {navItems.map(({ label, url }) => (
//                 <SidebarItem key={label} href={url}>
//                   {label}
//                 </SidebarItem>
//               ))}
//             </SidebarSection>
//           </SidebarBody>
//         </Sidebar>
//       }
//     >
//       {children}
//     </StackedLayout>
//   );
// }
