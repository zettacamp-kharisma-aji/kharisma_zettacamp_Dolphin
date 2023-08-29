/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
  // Your logic here
  // Menampung angka dan berapa kali muncul
  let angka = {};
  for (let num of nums) {
    if (!angka[num]) {
      angka[num] = 1;
    } else {
      angka[num] += 1;
    }
  }
  console.log(angka);

  // Menghitung angka yang sering muncul
  let frekuensiAngkaMuncul = 0;
  let angkaPalingSeringMuncul = 0;
  for (let num in angka) {
    if (angka[num] > frekuensiAngkaMuncul) {
      frekuensiAngkaMuncul = angka[num];
      angkaPalingSeringMuncul = num;
    }
  }
  console.log(frekuensiAngkaMuncul + ' kali');
  return angkaPalingSeringMuncul;
}

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([4, 6, 6, 4, 4, 4, 3])); // Output: 4
