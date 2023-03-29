import { Show } from "solid-js";

type TableHeaderProps = {
  children: any;
  sorted: boolean;
  ascending: boolean;
};

import DownArrow from "./DownArrow.jsx";
import UpArrow from "./UpArrow.jsx";

function TableHeader(props: TableHeaderProps) {
  return (
    <div class="flex items-center gap-4 w-full">
      <div>{props.children}</div>
      <Show fallback={<div class="w-6"></div>} when={props.sorted}>
        <Show
          fallback={
            <div>
              <DownArrow></DownArrow>
            </div>
          }
          when={props.ascending}
        >
          <div>
            <UpArrow></UpArrow>
          </div>
        </Show>
      </Show>
    </div>
  );
}

export default TableHeader;
