type TrackTableProps = {
  children: any;
};

function TrackTable(props: TrackTableProps) {
  return (
    <div class="border border-[#f4f4f444] rounded-lg">
      <table class="table-auto w-full">{props.children}</table>
    </div>
  );
}

export default TrackTable;
