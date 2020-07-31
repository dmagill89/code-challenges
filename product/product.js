var productExceptSelf = function (nums) {
  const length = nums.length;
  const products = [];
  const left = [];
  const right = [];


  left[0] = 1;
  right[length - 1] = 1;

  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < length; i++) {
    products[i] = left[i] * right[i];
  }

  return products;
};