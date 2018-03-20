import createKeccakHash from 'keccak';
export const isHexstring = string => !string.match(/^0x[0-9A-Fa-f]*$/);

/**
 * @param {object} 
 */
export const keccak = (data, bits = 512) => {
  if (!Buffer.isBuffer(data))
    if (Array.isArray(data) || typeof data === 'string' && !isHexstring(data)) 
      data = new Buffer.from(data);
    else if (typeof data === 'string' && isHexstring(data)) 
      data = new Buffer.from(data, 'hex'); // for double hashing
    else if (typeof data === 'object') 
      data = new Buffer.from(JSON.stringify(data));
    // else if (...) 
  return createKeccakHash(`keccak${bits}`).update(data).digest();
}

export const keccak256 = data => keccak(data, 256);
