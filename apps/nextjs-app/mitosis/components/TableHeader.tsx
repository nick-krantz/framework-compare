import * as React from "react";

type TableHeaderProps = {
  children: any;
  sorted: boolean;
  ascending: boolean;
};
import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";

function TableHeader(props: TableHeaderProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div>{props.children}</div>

      {props.sorted ? (
        <>
          {props.ascending ? (
            <>
              <div>
                <UpArrow />
              </div>
            </>
          ) : (
            <div>
              <DownArrow />
            </div>
          )}
        </>
      ) : (
        <div className="w-6"> </div>
      )}
    </div>
  );
}

export default TableHeader;
