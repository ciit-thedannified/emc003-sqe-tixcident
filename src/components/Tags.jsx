export default function Tags({text, bgColor, textColor = "white"}) {
    return (
        <span className="rounded-2xl pl-2 pr-2" style={{backgroundColor: bgColor, color: textColor}}> {text} </span>
    )
}