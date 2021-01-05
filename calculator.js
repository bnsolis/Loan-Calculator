// NOTE (bsolis): Code provided by Springboard. Once the content has loaded, run the setupInitialValues function and add a submit option. We also want to prevent the Default so we do not leave the page.
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// NOTE (bsolis): Code provided by Springboard. This section retrieves the information submitted on the form.
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // NOTE (bsolis): First we will some random default values to each space. This alone does not auto-fill these values though.
  const values = {amount: 1000, years: 5, rate: 10 };
  // NOTE (bsolis): Now we'll add the values to the page by assigning a new variable xInput to match the Id on the HTML. By using values.x, we pull the corresponding value within the values object.
  const amountInput = document.getElementById("loan-amount");
  amountInput.value = values.amount;
  const yearsInput = document.getElementById("loan-years");
  yearsInput.value = values.years;
  const rateInput = document.getElementById("loan-rate");
  rateInput.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
// NOTE (bsolis): Springboard provided a getCurrentUIValues function above and references an updateMonthly function below, so the update function really just needs to reference both of these in one place.
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
// NOTE (bsolis): Springboard provided the formula P x i / 1 - (1 + i) ^-n, so we need to input that here using JS.
function calculateMonthlyPayment(values) {
  // NOTE (bsolis): To start, I'll define a value for the monthly rate. This would be the inputed rate divided by 100 (to make it a decimal, like how when you try to find 10% of a value, you multiply it by .1, and then we divide by 12 for the monthly value.)
  const monthlyRate = (values.rate / 100) / 12;
  // NOTE (bsolis): n on the given formula stood for years * 12, so I'm just making that here.
  const n = Math.floor(values.years * 12);
  return (
    // NOTE (bsolis): monthlyRate = i (periodic interest rate) * values.amount = P (principle)
    (monthlyRate * values.amount) /
    // NOTE (bsolis): 1 - (1 + i)^-n
    (1 - Math.pow((1 + monthlyRate), -n))
    // NOTE (bsolis): Must have 2 decimal places.
  ).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
// NOTE (bsolis): This is just updating the displayed value of the monthly payment.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}

// NOTE (bsolis): After running my page, I compared it with a BankRate's loan calculator and it appears to work correctly!