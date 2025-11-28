import { LoanInputs } from "@/hooks/useLoanCalculator";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

interface LoanFormProps {
  onCalculate: (data: LoanInputs & { clientName: string }) => void;
}

export default function LoanForm({ onCalculate }: LoanFormProps) {
  const [clientName, setClientName] = useState("");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");

  const handleSubmit = () => {
    onCalculate({
      clientName,
      amount: Number(amount),
      annualRate: Number(rate),
      months: Number(months),
    });

    // limpiar inputs
    setClientName("");
    setAmount("");
    setRate("");
    setMonths("");
  };

  return (
    <View style={{ padding: 20 }}>
      
      <Text>Nombre del Cliente</Text>
      <TextInput
        value={clientName}
        onChangeText={setClientName}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Monto del préstamo</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Tasa de interés (%)</Text>
      <TextInput
        value={rate}
        onChangeText={setRate}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Plazo (meses)</Text>
      <TextInput
        value={months}
        onChangeText={setMonths}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Calcular" onPress={handleSubmit} />
    </View>
  );
}



