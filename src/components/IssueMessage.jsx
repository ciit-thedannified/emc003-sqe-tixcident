export default function IssueMessage({display_name = null, username, date, children}) {
    return (
        <div className="flex-0 max-h-fit p-3 border-2 border-gray-300 gap-4">
            <h1 className="font-semibold"> {!display_name ? `@${username}` : `${display_name} (@${username})`} </h1>
            <p className="text-sm text-gray-500"> {date} </p>
            <p className="text-sm"> {children} </p>
        </div>
    )
}