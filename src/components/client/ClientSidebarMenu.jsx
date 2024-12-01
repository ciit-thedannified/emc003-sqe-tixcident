import { HomeIcon, TicketIcon, UserCircleIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'

const ClientSidebarMenu = [
  {
    label: "Dashboard",
    icon: <HomeIcon className="w-6 h-6 text-white" />,
    link: '/u'
  },
  {
    label: "Issues",
    icon: <TicketIcon className="w-6 h-6 text-white" />,
    link: '/u/issues'
  },
  {
    label: "Account Profile",
    icon: <UserCircleIcon className="w-6 h-6 text-white" />,
    link: '/u/profile'
  },
  {
    label: "Submit Feedback",
    icon: <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-white" />,
    link: '/u/feedbacks/create'
  },
];

export default ClientSidebarMenu;
