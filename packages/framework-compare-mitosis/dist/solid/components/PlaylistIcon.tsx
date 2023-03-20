function PlaylistIcon(props: any) {
  return (
    <svg class="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24">
      <g>
        <path fill="none" d="M0 0H24V24H0z"></path>
        <path
          class="fill-white"
          d="M22 18v2H2v-2h20zM2 3.5l8 5-8 5v-10zM22 11v2H12v-2h10zm0-7v2H12V4h10z"
        ></path>
      </g>
    </svg>
  );
}

export default PlaylistIcon;
