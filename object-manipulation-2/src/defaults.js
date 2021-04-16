/* exported defaults */

function defaults(target, source) {
  for (var sourceKeys in source) {
    if (!(sourceKeys in target)) {
      target[sourceKeys] = source[sourceKeys];
    }
  }
}
