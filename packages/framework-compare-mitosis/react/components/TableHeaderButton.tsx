import * as React from "react";

type TableHeaderButtonProps = {
  children: any;
  sorted: boolean;
  ascending: boolean;
} & HTMLButtonElement;
import { ASCENDING, SortDirection } from "framework-compare-types";
import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";

function TableHeaderButton(props: TableHeaderButtonProps) {
  return (
    <button {...props}>
      {props.children}

      {props.sorted ? (
        <>
          <div>
            {props.ascending ? (
              <>
                <UpArrow />
              </>
            ) : (
              <DownArrow />
            )}
          </div>
        </>
      ) : null}
    </button>
  );
}

export default TableHeaderButton;
