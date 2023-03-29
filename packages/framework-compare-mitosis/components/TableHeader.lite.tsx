import { Show } from "@builder.io/mitosis";

import DownArrow from "./DownArrow.lite";
import UpArrow from "./UpArrow.lite";

type TableHeaderProps = {
  children: any;
  sorted: boolean;
  ascending: boolean;
};

export default function TableHeader({ children, sorted, ascending }: TableHeaderProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div>{children}</div>

      <Show when={sorted} else={<div className="w-6"> </div>}>
        <Show
          when={ascending}
          else={
            <div>
              <DownArrow />
            </div>
          }
        >
          <div>
            <UpArrow />
          </div>
        </Show>
      </Show>
    </div>
  );
}
