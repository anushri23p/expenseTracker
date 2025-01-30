const expenseTracker = (expenses) => {
  const totalExpense = expenses.reduce((total, expense) => expense + total, 0);
  return totalExpense.toFixed(2);
};
