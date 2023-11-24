test('resloves 는 완료된 Promise 를 unwrap 해서 matcher 를 체이닝 할 수 있게 한다.', () => {
  expect.assertions(1);
  expect(Promise.resolve('lemon')).resolves.toEqual('lemon');
});
