// ✅ PASS
test('assertions number와 matcher 수가 맞아야 통과한다', () => {
  expect.assertions(1);
  expect(1 + 1).toBe(2);
});

// ❌ FAIL
// test('assertions number와 matcher 수가 맞아야 통과한다.', () => {
//   expect.assertions(2);
//   expect(1 + 1).toBe(2);
// });
