type TrackTableProps = {
  children: any;
  titleSlot: any;
  artistSlot: any;
  durationSlot: any;
};

export default function TrackTable({
  children,
  titleSlot,
  artistSlot,
  durationSlot,
}: TrackTableProps) {
  return (
    <div className="border border-[#f4f4f444] rounded-lg">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="absolute max-w-0 overflow-hidden left-[-99999px]">Album Image</th>
            <th className="text-xl font-normal py-2 px-2 text-start">{titleSlot}</th>

            <th className="text-xl font-normal py-2 px-2 text-start">{artistSlot}</th>
            <th className="text-xl font-normal py-2 px-2 pr-6 text-end">{durationSlot}</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
