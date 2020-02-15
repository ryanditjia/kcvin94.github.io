import React, { useState } from 'react';
import { BudgetWrapperStyle, BudgetContentStyle } from './style';

export function Label({ children }) {
  return <p>{children}</p>;
}

export function NumberInput({ value, onChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={event => onChange(parseInt(event.target.value, 10))}
    />
  );
}

export default function Budget() {
  const [budgetValues, setBudgetValues] = useState({
    grossIncome: 0,
    travelExpenses: 0,
    employmentInsurance: 0,
  });

  console.warn(budgetValues);

  const totalNetIncome =
    budgetValues.grossIncome +
    budgetValues.travelExpenses -
    budgetValues.employmentInsurance;

  return (
    <div css={BudgetWrapperStyle}>
      <div css={BudgetContentStyle}>
        <Label>Gross Income</Label>
        <NumberInput
          value={budgetValues.grossIncome}
          onChange={newValue =>
            setBudgetValues({ ...budgetValues, grossIncome: newValue })
          }
        />

        <Label>Travel Expenses</Label>
        <NumberInput
          value={budgetValues.travelExpenses}
          onChange={newValue =>
            setBudgetValues({ ...budgetValues, travelExpenses: newValue })
          }
        />

        <Label>Employment Insurance</Label>
        <NumberInput
          value={budgetValues.employmentInsurance}
          onChange={newValue =>
            setBudgetValues({ ...budgetValues, employmentInsurance: newValue })
          }
        />

        <Label>Total Net Income</Label>
        {totalNetIncome}
      </div>
    </div>
  );
}
