import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconBrandTabler,
  IconBookUpload,
  IconClipboardList,
  IconChartBar,
  IconUser,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

const ICON_CLASS = "h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200";

export default function StudentSidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Dashboard", href: "/student", icon: <IconBrandTabler className={ICON_CLASS} /> },
    { label: "My Courses", href: "/student/courses", icon: <IconBookUpload className={ICON_CLASS} /> },
    { label: "Assignments", href: "/student/assignments", icon: <IconClipboardList className={ICON_CLASS} /> },
    { label: "Grades", href: "/student/grades", icon: <IconChartBar className={ICON_CLASS} /> },
    { label: "Profile", href: "/student/profile", icon: <IconUser className={ICON_CLASS} /> },
    { label: "View Site", href: "/", icon: <IconWorld className={ICON_CLASS} /> },
  ];

  const isActive = (href) => {
    if (href === "/student") return location.pathname === "/student";
    if (href === "/") return false;
    return location.pathname.startsWith(href);
  };

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                onClick={() => navigate(link.href)}
                className={isActive(link.href) ? "text-indigo-700 font-semibold" : ""}
              />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Student",
              href: "#",
              icon: (
                <div className="h-7 w-7 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                  S
                </div>
              )
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

const Logo = () => (
  <a href="/" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
    <img src="https://sashainfinity.com/wp-content/uploads/2025/06/sasha-logo-small.png" alt="Sashainfinity" className="h-6 shrink-0" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre text-black dark:text-white"
    >
      Sashainfinity
    </motion.span>
  </a>
);

const LogoIcon = () => (
  <a href="/" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
    <img src="https://sashainfinity.com/wp-content/uploads/2025/06/sasha-logo-small.png" alt="Sashainfinity" className="h-6 shrink-0" />
  </a>
);
