import * as React from "react";

type TrackTableProps = {
  children: any;
  titleSlot: any;
  artistSlot: any;
  durationSlot: any;
};

function TrackTable(props: TrackTableProps) {
  return (
    <div className="border border-[#f4f4f444] rounded-lg">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="absolute max-w-0 overflow-hidden left-[-99999px]">Album Image</th>

            <th className="text-xl font-normal py-2 px-2 text-start">{props.titleSlot}</th>

            <th className="text-xl font-normal py-2 px-2 text-start">{props.artistSlot}</th>

            <th className="text-xl font-normal py-2 px-2 pr-6">{props.durationSlot}</th>
          </tr>
        </thead>

        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default TrackTable;
