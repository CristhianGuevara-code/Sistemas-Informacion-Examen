import { AmortizationRow } from "@/hooks/useLoanCalculator";
import React from "react";
import { FlatList, Text, View } from "react-native";

interface AmortizationPlanProps {
  plan: AmortizationRow[];
  monthlyPayment: number;
  clientName: string; // 👈 nuevo parámetro
}

export default function AmortizationPlan({
  plan,
  monthlyPayment,
  clientName,
}: AmortizationPlanProps) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Cuota nivelada de {clientName}: {monthlyPayment.toFixed(2)} LPS
      </Text>

      <FlatList<AmortizationRow>
        data={plan}
        keyExtractor={(item) => item.periodo.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#eee",
              padding: 10,
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <Text>Mes: {item.periodo}</Text>
            <Text>Interés: {item.interes.toFixed(2)}</Text>
            <Text>Abono a capital: {item.abonoCapital.toFixed(2)}</Text>
            <Text>Seguro SVSD: {item.svsd.toFixed(2)}</Text>
            <Text>Saldo: {item.saldo.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}


// import { AmortizationRow } from "@/hooks/useLoanCalculator";
// import React from "react";
// import { FlatList, Text, View } from "react-native";

// interface AmortizationPlanProps {
//   plan: AmortizationRow[];
//   monthlyPayment: number;
// }

// export default function AmortizationPlan({
//   plan,
//   monthlyPayment,
// }: AmortizationPlanProps) {
//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
//         Cuota Nivelada: {monthlyPayment.toFixed(2)} LPS
//       </Text>

// {/**  
//  */}

//       <FlatList<AmortizationRow>
//         data={plan}
//         keyExtractor={(item) => item.periodo.toString()}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               backgroundColor: "#eee",
//               padding: 10,
//               marginBottom: 10,
//               borderRadius: 8,
//             }}
//           >
//             <Text>Mes: {item.periodo}</Text>
//             <Text>Interés: {item.interes.toFixed(2)}</Text>
//             <Text>Abono a capital: {item.abonoCapital.toFixed(2)}</Text>
//             <Text>Seguro SVSD: {item.svsd.toFixed(2)}</Text>
//             <Text>Saldo: {item.saldo.toFixed(2)}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
