<script context="module" lang="ts">
  type TrackImageProps = {
    /** URL of the track image */
    url: string;
    /** Name of the track */
    name: string;
  };
</script>

<script lang="ts">
  export let url: TrackImageProps["url"];
  export let name: TrackImageProps["name"];

  function mitosis_styling(node, vars) {
    Object.entries(vars || {}).forEach(([p, v]) => {
      if (p.startsWith("--")) {
        node.style.setProperty(p, v);
      } else {
        node.style[p] = v;
      }
    });
  }
</script>

<div class="relative max-w-max">
  <img
    use:mitosis_styling={{
      clipPath: `url(#squircleClip)`,
    }}
    class="h-24 min-w-[6rem] z-[2] relative"
    src={url}
    alt={name}
  />
  <img
    class="absolute top-0 left-0 z-[1] scale-90 blur-[16px]"
    src={url}
    alt={name}
    aria-hidden={true}
  />

  <svg width="10" height="10" viewBox="0 0 10 10" class="absolute">
    <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
      <path
        fill="red"
        stroke="none"
        d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
      />
    </clipPath>
  </svg>
</div>