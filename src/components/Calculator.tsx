import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<number | null>(null);

  const handlePressNumber = (number: string) => {
    setDisplayValue((prevValue) => {
      if (prevValue === '0' || operator) {
        return number.toString();
      } else {
        return prevValue + number;
      }
    });
  };

  const handlePressOperator = (nextOperator: string) => {
    if (operator) {
      // 既に演算子が選択されている場合は計算を行う
      const result = calculate();
      if (typeof (result) === "undefined") return;
      setDisplayValue(result.toString());
      setPreviousValue(result);
    } else {
      // 最初の演算子が選択された場合、現在の表示値を保存する
      setPreviousValue(parseFloat(displayValue));
    }
    setOperator(nextOperator);
  };

  const calculate = () => {
    const currentValue = parseFloat(displayValue);
    if (previousValue !== null) {
      switch (operator) {
        case '+':
          return previousValue + currentValue;
        case '-':
          return previousValue - currentValue;
        case '×':
          return previousValue * currentValue;
        case '÷':
          return previousValue / currentValue;
        default:
          return currentValue;
      }
    }
  };

  const handlePressEquals = () => {
    const result = calculate();
    if (typeof (result) === "undefined") return;
    setDisplayValue(result.toString());
    setOperator(null);
    setPreviousValue(null);
  };

  const handlePressClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handlePressNumber('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        {/* 他の数字ボタンも同様に記述 */}
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handlePressOperator('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        {/* 他の演算子ボタンも同様に記述 */}
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handlePressEquals}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePressClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default Calculator;
