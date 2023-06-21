export function validIPAddresses(numbers: string) {
  const ipAddressesFound = [];
  for (let index = 0; index < Math.min(numbers.length, 4); index++) {
    const currentIPAddressParts = ['','','',''];
    currentIPAddressParts[0] = numbers.slice(0, index);
    if (!isValid(currentIPAddressParts[0])) {
      continue;
    }

    for (let index2 = index; index2 < index + Math.min(numbers.length - index, 4); index2++) {
      currentIPAddressParts[1] = numbers.slice(index, index2);
      if (!isValid(currentIPAddressParts[1])) {
        continue;
      }
      for (let index3 = index2; index3 < index2 + Math.min(numbers.length - index2, 4); index3++) {
        currentIPAddressParts[2] = numbers.slice(index2, index3);
        currentIPAddressParts[3] = numbers.slice(index3);
        if (isValid(currentIPAddressParts[2]) && isValid(currentIPAddressParts[3]) ) {
          ipAddressesFound.push(currentIPAddressParts.join('.'));
        }
      }
    }
    
  }
  return ipAddressesFound;
}

function isValid(number: string) {
  const intVersion = Number.parseInt(number);
  if (intVersion > 255) {
    return false;
  }
  return number.length === intVersion.toString().length;
}