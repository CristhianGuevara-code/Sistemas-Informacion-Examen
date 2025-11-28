import { useState } from "react";

export interface LoanInputs {
  amount: number;        // monto
  annualRate: number;    // tasa anual %
  months: number;        // plazo en meses
  insuranceRate?: number; // tasa SVSD mensual
}

export interface AmortizationRow {
  periodo: number;
  cuota: number;
  interes: number;
  abonoCapital: number;
  svsd: number;
  saldo: number;
}

export const useLoanCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [plan, setPlan] = useState<AmortizationRow[]>([]);

  const calculate = ({
    amount,
    annualRate,
    months,
    insuranceRate = 0.0025, // 0.25% 
  }: LoanInputs) => {
    const i = annualRate / 12 / 100; // tasa mensual
    const n = months;

    //Fórmula de cuota nivelada
    const cuota = (amount * i) / (1 - Math.pow(1 + i, -n));

    setMonthlyPayment(cuota);

    let saldo = amount;
    const planTemp: AmortizationRow[] = [];

    for (let k = 1; k <= n; k++) {
      const interes = saldo * i;
      const abonoCapital = cuota - interes;

      //Seguro de vida saldo deudor
      const svsd = saldo * insuranceRate;

      saldo = saldo - abonoCapital;

      planTemp.push({
        periodo: k,
        cuota,
        interes,
        abonoCapital,
        svsd,
        saldo: saldo < 0 ? 0 : saldo,
      });
    }

    setPlan(planTemp);
  };

  return {
    monthlyPayment,
    plan,
    calculate,
  };
};
