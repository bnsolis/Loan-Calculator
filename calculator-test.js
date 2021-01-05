
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 10, rate: 10};
  expect(calculateMonthlyPayment(values)).toEqual('132.15')
});

it("should return a result with 2 decimal places", function() {
  const values = {amount: 12345, years: 7, rate: 3.5};
  expect(calculateMonthlyPayment(values)).toEqual('165.91')
});

it("should be able to handle many years", function(){
  const values = {amount: 100, years: 100, rate: 3.5}
  expect(calculateMonthlyPayment(values)).toEqual('0.30')
})

it("should be able to handle huge rates", function(){
  const values = {amount: 1000, years: 5, rate: 50}
  expect(calculateMonthlyPayment(values)).toEqual('45.60')
})