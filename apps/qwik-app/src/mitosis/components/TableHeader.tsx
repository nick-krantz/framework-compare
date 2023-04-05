// GENERATED BY MITOSIS

import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";
import { Slot, component$ } from "@builder.io/qwik";
type TableHeaderProps = {
  sorted: boolean;
  ascending: boolean;
};
export const TableHeader = component$((props: TableHeaderProps) => {
  return (
    <div class="flex items-center gap-4 w-full">
      <div>
        <Slot></Slot>
      </div>
      {props.sorted ? (
        props.ascending ? (
          <div>
            <UpArrow></UpArrow>
          </div>
        ) : (
          <div>
            <DownArrow></DownArrow>
          </div>
        )
      ) : (
        <div class="w-6"></div>
      )}
    </div>
  );
});
export default TableHeader;