import { HomeIcon, TicketIcon, UserCircleIcon, UserIcon, DocumentIcon } from '@heroicons/react/24/solid'

const AdminSidebarMenu = [
  {
    label: "Dashboard",
    icon: <HomeIcon className="w-6 h-6 text-white" />,
    link: '/a'
  },
  {
    label: "Tickets",
    icon: <TicketIcon className="w-6 h-6 text-white" />,
    link: '/a/tickets'
  },
  {
    label: "Feedback",
    icon: <DocumentIcon className="w-6 h-6 text-white" />,
    link: '/a/feedbacks'
  },
  {
    label: "Users",
    icon: <UserIcon className="w-6 h-6 text-white" />,
    link: '/a/users'
  },
  {
    label: "Account Profile",
    icon: <UserCircleIcon className="w-6 h-6 text-white" />,
    link: '/a/profile'
  },
];

export default AdminSidebarMenu;