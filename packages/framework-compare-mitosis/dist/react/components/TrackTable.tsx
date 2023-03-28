import * as React from "react";

type TrackTableProps = {
  children: any;
};

function TrackTable(props: TrackTableProps) {
  return (
    <div className="border border-[#f4f4f444] rounded-lg">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="absolute max-w-0 overflow-hidden left-[-99999px]">
              Album Image
            </th>

            <th className="text-xl font-normal py-2 px-2 text-start">TITLE</th>

            <th className="text-xl font-normal py-2 px-2 text-start">
              ARTISTS
            </th>

            <th className="text-xl font-normal py-2 px-2 pr-6 text-end">
              DURATION
            </th>
          </tr>
        </thead>

        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default TrackTable;
