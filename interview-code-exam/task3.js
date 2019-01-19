let haystack = ['nedle', 'nedle', 'nedle', 'needle', 'nedle']

function contains(haystack, needle) {
  for (let element of haystack) {
    if (element == needle) return true;
  }
  return false;
}

contains(haystack, 'needle');