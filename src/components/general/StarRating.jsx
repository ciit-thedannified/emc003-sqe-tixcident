import {useState} from "react";
import {StarIcon} from "@heroicons/react/24/solid/index.js";

export default function StarRating ({ value, onChange }) {
    const [hoverValue, setHoverValue] = useState(0);

    return (
        <div className="flex space-x-1">
            {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
                <StarIcon
                    key={star}
                    className={`w-8 h-8 cursor-pointer ${
                        (hoverValue || value) >= star ? "text-yellow-500" : "text-gray-300"
                    }`}
                    onMouseEnter={() => setHoverValue(star)} // Highlight on hover
                    onMouseLeave={() => setHoverValue(0)} // Remove hover highlight
                    onClick={() => onChange(star)} // Set rating value
                />
            ))}
        </div>
    );
};