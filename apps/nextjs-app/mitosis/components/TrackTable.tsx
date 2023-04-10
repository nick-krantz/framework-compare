type TrackTableProps = {
  children: any;
};

function TrackTable(props: TrackTableProps) {
  return (
    <div className="border border-[#f4f4f444] rounded-lg">
      <table className="table-auto w-full">{props.children}</table>
    </div>
  );
}

export default TrackTable;
