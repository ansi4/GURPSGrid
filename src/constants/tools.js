export const TOOL_CANVASCONFIG = 'canvas-config';
export const TOOL_DEBUG = 'debug';
export const TOOL_TEXTURES = 'textures';
// export const TOOL_ = '';
// export const TOOL_ = '';

export const TOOLS = [
  TOOL_CANVASCONFIG,
  TOOL_TEXTURES,

  TOOL_DEBUG,
];

export const TOOLS_DATA_MAP = {
  [TOOL_CANVASCONFIG]: {
    name: 'Canvas Tools',
    icon: 'wrench',
  },
  [TOOL_DEBUG]: {
    name: 'Debug tools',
    icon: 'bug',
  },
  [TOOL_TEXTURES]: {
    name: 'Textures',
    icon: 'texture',
  },
};