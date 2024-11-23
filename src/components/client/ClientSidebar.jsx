import ClientSidebarMenu from './ClientSidebarMenu';

export default function ClientSidebar() {
  return (
    <div className={`bg-blue-900 text-white h-screen`}>
      {/* Logo Section */}
      <div className="flex items-center p-6">
        <img
          src="/src/images/Tixcident_Icon.png"
          className={`w-10 h-10 mr-2`}
        />
        <h1
          className={`text-xl font-bold`}
        >
          TIXCIDENT
        </h1>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col w-full">
        {ClientSidebarMenu.map((menu, index) => (
          <li
            key={index}
            className="flex items-center pl-6 py-3 hover:bg-blue-800 cursor-pointer transition-colors"
          >
            <div className="mr-4">{menu.icon}</div>
            <span>{menu.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}