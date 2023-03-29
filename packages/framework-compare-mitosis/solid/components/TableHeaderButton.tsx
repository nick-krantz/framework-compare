import { Show } from "solid-js";

type TableHeaderButtonProps = {
  children: any;
  sorted: boolean;
  ascending: boolean;
} & HTMLButtonElement;

import { ASCENDING, SortDirection } from "framework-compare-types";
import DownArrow from "./DownArrow.jsx";
import UpArrow from "./UpArrow.jsx";

function TableHeaderButton(props: TableHeaderButtonProps) {
  return (
    <button {...props}>
      {props.children}
      <Show when={props.sorted}>
        <div>
          <Show fallback={<DownArrow></DownArrow>} when={props.ascending}>
            <UpArrow></UpArrow>
          </Show>
        </div>
      </Show>
    </button>
  );
}

export default TableHeaderButton;
