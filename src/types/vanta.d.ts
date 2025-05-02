declare module 'vanta/dist/vanta.fog.min' {
  import * as THREE from 'three';
  
  interface VantaFogOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
  }

  interface VantaEffect {
    setOptions: (options: Partial<VantaFogOptions>) => void;
    destroy: () => void;
  }

  function FOG(options: VantaFogOptions): VantaEffect;
  export default FOG;
}

declare module 'vanta/dist/vanta.halo.min' {
  import * as THREE from 'three';
  
  interface VantaHaloOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    baseColor?: number;
    backgroundColor?: number;
    amplitudeFactor?: number;
    xOffset?: number;
    yOffset?: number;
    size?: number;
  }

  interface VantaEffect {
    setOptions: (options: Partial<VantaHaloOptions>) => void;
    destroy: () => void;
  }

  function HALO(options: VantaHaloOptions): VantaEffect;
  export default HALO;
}

declare module 'vanta/dist/vanta.net.min' {
  import * as THREE from 'three';
  
  interface VantaNetOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  }

  interface VantaEffect {
    setOptions: (options: Partial<VantaNetOptions>) => void;
    destroy: () => void;
  }

  function NET(options: VantaNetOptions): VantaEffect;
  export default NET;
}

declare module 'vanta/dist/vanta.topology.min' {
  import * as THREE from 'three';
  
  interface VantaTopologyOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
  }

  interface VantaEffect {
    setOptions: (options: Partial<VantaTopologyOptions>) => void;
    destroy: () => void;
  }

  function TOPOLOGY(options: VantaTopologyOptions): VantaEffect;
  export default TOPOLOGY;
}
