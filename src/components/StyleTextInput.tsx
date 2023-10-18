import React from "react";
import { StyleSheet, TextInput } from "react-native";
import theme from "../theme";

interface StyleTextInputProps {
  style?: any;
  [x: string]: any;
}

const StyleTextInput = ({
  style,
  error,
  ...rest
}: StyleTextInputProps) => {
  const textStyles = [
    styles.textInput,
    style,
    error && { borderColor: 'red' },
  ];

  return <TextInput style={textStyles} {...rest} />;
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default StyleTextInput;