const SIZE_MAP = {
  '32bit': {
          PRIME: 16777619,
          OFFSET_BASIS: 2166136261,
  },
  '64bit': {
          PRIME: 1099511628211,
          OFFSET_BASIS: 14695981039346656037,
  },
  /** unsupported due to overflow
  '128bit': {
          PRIME: 309485009821345068724781371,
          OFFSET_BASIS: 144066263297769815596495629667062367629
  }
  **/
};

function fnv1a(str, size) {
  let PRIME, OFFSET_BASIS;
  if (SIZE_MAP.hasOwnProperty(size)) {
      PRIME = SIZE_MAP[size].PRIME;
      OFFSET_BASIS = SIZE_MAP[size].OFFSET_BASIS;
  } else {
      throw new Error(`Invalid or unsupported size: ${string(size)} provided.`);
  }
  let hash = OFFSET_BASIS;
  for ( let i = 0; i < str.length; ++i ) {
      hash = hash ^ str.charAt(i);
      hash = hash * PRIME;
  }

  return (hash >>> 1);
}
