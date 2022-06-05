import { ChevronDownIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";

export default function ClickDropdown({
  content,
  up,
  down,
  appreciate_up,
  appreciate_down,
  shortTitle,
  commentType,
  presentationID,
  logicalID,
}: {
  content: string;
  up: string;
  down: string;
  appreciate_up: string;
  appreciate_down: string;
  shortTitle: string;
  commentType: string;
  presentationID: string;
  logicalID: string;
}) {
  return (
    <div
      className={`w-full h-full rounded border-2 border-solid relative overflow-hidden ${
        commentType === "pro" ? "border-pro" : "border-con"
      }`}
    >
      <div
        className={`relative text-white px-6 py-2 flex items-center justify-between w-full z-20 ${
          commentType === "pro" ? "bg-pro" : "bg-con"
        }`}
      >
        <h1>
          <span className="font-bold">{shortTitle}</span> ({commentType})
        </h1>
        <div>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>
      <div
        className={`cursor-default text-lg px-6 flex items-center justify-center z-10 transition-all duration-300 ease-in-out h-auto py-4 opacity-100`}
      >
        <p>{content}</p>
      </div>
      <div className="relative flex flex-row justify-between px-6 border-t-gray-100 border-t-2 border-solid py-2 h-full">
        <div className="flex-initial flex-col items-center rounded border-2 border-solid border-neutral-600  ">
          <div className="bg-neutral-600 px-4 py-1 text-white ">Agreement</div>
          <div className="flex space-x-1 py-1 items-center justify-center">
            {/* <ThumbUpIcon className="w-4 h-4" /> */}
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="lg"
              className="text-neutral-600"
            />
            <span className="text-lg font-bold  justify-center px-1 text-neutral-600">
              {up}
            </span>
          </div>
          <div className="flex space-x-1 py-1 items-center justify-center">
            {/* <ThumbDownIcon className="w-4 h-4" /> */}
            <FontAwesomeIcon
              icon={faThumbsDown}
              size="lg"
              className="text-neutral-600"
            />
            <span className="text-lg  font-bold justify-center px-1 text-neutral-600">
              {down}
            </span>
          </div>
        </div>
        <div className="mx-4 items-center rounded border-2 border-solid border-neutral-600">
          <div className="bg-neutral-600 px-4 py-1 text-white ">
            Appreciation
          </div>
          <div className="flex space-x-2 p-5 items-center justify-center">
            {/* <Handshake className="w-5 h-5" /> */}
            <FontAwesomeIcon
              icon={faHandshake}
              size="lg"
              className="text-neutral-600"
            />
            <span className="text-lg  font-bold  justify-center  px-1 text-neutral-600">
              {parseInt(appreciate_down) + parseInt(appreciate_up)}
            </span>
          </div>
        </div>
        <div className="flex-auto flex-col items-center"></div>
      </div>
    </div>
  );
}
