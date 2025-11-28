import AmortizationPlan from "@/components/componentesExamen/2AmortizationPlan";
import LoanForm from "@/components/componentesExamen/LoanForm";
import { useLoanCalculator } from "@/hooks/useLoanCalculator";
import React, { useState } from "react";
import { View } from "react-native";
import "../global.css";

export default function App() {
  const { plan, monthlyPayment, calculate } = useLoanCalculator();

  
  const [clientName, setClientName] = useState("");

  const handleCalculate = (data: any) => {
    setClientName(data.clientName); // recibir el nombre del LoanForm
    calculate(data);                // ejecutar cálculos del hook
  };

  return (
    <View>
      <LoanForm onCalculate={handleCalculate} />

      {plan.length > 0 && (
        <AmortizationPlan
          plan={plan}
          monthlyPayment={monthlyPayment}
          clientName={clientName} 
        />
      )}
    </View>
  );
}


