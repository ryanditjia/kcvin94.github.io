import React, { useState } from 'react';
import { Field, Label, NumberInput } from 'components';
import { BudgetWrapperStyle, BudgetContentStyle } from './style';

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
        <Field>
          <Label>Gross Income</Label>
          <NumberInput
            value={budgetValues.grossIncome}
            onChange={newValue =>
              setBudgetValues({ ...budgetValues, grossIncome: newValue })
            }
          />
        </Field>

        <Field>
          <Label>Travel Expenses</Label>
          <NumberInput
            value={budgetValues.travelExpenses}
            onChange={newValue =>
              setBudgetValues({ ...budgetValues, travelExpenses: newValue })
            }
          />
        </Field>

        <Field>
          <Label>Employment Insurance</Label>
          <NumberInput
            value={budgetValues.employmentInsurance}
            onChange={newValue =>
              setBudgetValues({
                ...budgetValues,
                employmentInsurance: newValue,
              })
            }
          />
        </Field>

        <Field>
          <Label>Total Net Income</Label>
          {totalNetIncome}
        </Field>
      </div>
    </div>
  );
}
