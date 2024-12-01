import { ChevronLeftIcon } from "@heroicons/react/24/solid/index.js";
import { Button } from "../../../components/ui/button.jsx";
import Tags from "../../../components/Tags.jsx";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function ClientDashboardViewTicketPage() {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <Button className="px-3 py-2 rounded-md shadow-sm text-blue-500 border hover:underline">
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            Go back to Issues
          </Button>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="bg-red-500 px-3 py-2 rounded-md shadow-sm text-white border hover:underline">
            <AiFillDelete className="h-6 w-6" aria-hidden="true" />
            Delete Issue
          </Button>
          <Button className="bg-green-500 px-3 py-2 rounded-md shadow-sm text-white border hover:underline">
            <AiFillEdit className="h-6 w-6" aria-hidden="true" />
            Edit Issue
          </Button>
        </div>
      </div>

      <div className="w-full h-px bg-gray-300 mt-4 mb-4"></div>

      <div className="flex max-h-max bg-gray-100 border-4 gap-3 p-3">
        <div className="w-2/3 space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Issue Title</h1>
          <p class="text-gray-800">
            Submitted by <span className="font-semibold">(display name)</span>{" "}
            (@username) on (submission date)
          </p>
          <p class="text-gray-800">
            Status <Tags text="Invalid" bgColor="gray" /> &nbsp; Priority{" "}
            <Tags text="None" bgColor="gray" />
          </p>

          <div className="w-full h-px bg-gray-300"></div>

          <p className="text-gray-900 font-semibold"> Tags: </p>

          <p className="text-gray-900 font-semibold"> Issue Description: </p>
          <p className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex w-1/3 max-h-screen justify-center items-center">
          <div className="border-2 border-gray-300 m-2 p-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-900 text-center m-2">Messages</h1>


            {/*Editable Area adjustments*/}
            <div className="flex flex-col border-2 border-gray-300 text-gray-900 m-2 overflow-auto h-[400px] w-[400px] p-2">
            </div>

            <textarea
              className="w-[95%] bg-gray-200 p-2 rounded text-gray-900 m-1.5"
              rows="2"
              placeholder="Enter your text here"
            ></textarea>
            <button className="w-[95%] m-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition disabled:bg-gray-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
