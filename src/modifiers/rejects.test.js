test('rejects to octopus', () => {
  expect.assertions(1);

  // make sure to add a return statement
  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
    'octopus'
  );
});
