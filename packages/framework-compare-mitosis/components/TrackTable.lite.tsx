type TrackTableProps = {
  children: any;
};

export default function TrackTable({ children }: TrackTableProps) {
  return (
    <div className="border border-[#f4f4f444] rounded-lg">
      <table className="table-auto w-full">{children}</table>
    </div>
  );
}
