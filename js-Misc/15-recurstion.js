function printHello() {
    console.log('Hello');
    printHello();
  }
  printHello();












  // recursive

  function sumRecursive(num) {
    if(num === 0) return 0;
    return num + sumRecursive(num - 1);

  }

  sumRecursive(3);