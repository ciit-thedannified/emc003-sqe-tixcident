import { HomeIcon, TicketIcon, UserIcon, PaperAirplaneIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'

const ClientSidebarMenu = [
  {
    label: "Dashboard",
    icon: <HomeIcon className="w-6 h-6 text-white" />,
  },
  {
    label: "Tickets",
    icon: <TicketIcon className="w-6 h-6 text-white" />,
  },
  {
    label: "Account Profile",
    icon: <UserIcon className="w-6 h-6 text-white" />,
  },
  {
    label: "Button",
    icon: <PaperAirplaneIcon className="w-6 h-6 text-white" />,
  },
  {
    label: "Submit Feedback",
    icon: <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-white" />,
  },
];

export default ClientSidebarMenu;
