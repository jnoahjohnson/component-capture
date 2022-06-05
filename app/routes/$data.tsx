import { LoaderFunction, useParams } from "remix";
import ClickDropdown from "~/components/ClickDropdown";

export default function DataComponent() {
  const { data } = useParams();
  // const componentData = typeof data === "string" ? JSON.parse(data) : null;

  // if (!componentData) {
  //   return <div>There has been an error</div>;
  // }

  return (
    <div className="max-w-4xl mx-auto py-1">
      <ClickDropdown
        content={data ?? "123"}
        appreciate_down={"12"}
        commentType={"pro"}
        down={"12"}
        appreciate_up={"12"}
        logicalID={"123"}
        presentationID={"123"}
        shortTitle={"123"}
        up={"12"}
      />
    </div>
  );
}
