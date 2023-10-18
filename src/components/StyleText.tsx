import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../theme";

interface StyleTextProps {
  bold?: boolean;
  colorPrimary?: boolean;
  colorSecondary?: boolean;
  small?: boolean;
  subHeading?: boolean;
  center?: boolean;
  children: React.ReactNode;
  style?: any;
}

export default function StyleText({
  children,
  bold,
  colorPrimary,
  colorSecondary,
  small,
  subHeading,
  center,
  ...rest
}: StyleTextProps) {

  const styles = StyleSheet.create({
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.normal as any,
    },
    colorPrimary: {
      color: theme.colors.textPrimary,
    },
    colorSecondary: {
      color: theme.colors.textSecondary,
    },
    bold: {
      fontWeight: theme.fontWeights.bold as any,
    },
    small: {
      fontSize: theme.fontSizes.small,
    },
    subHeading: {
      fontSize: theme.fontSizes.subheading,
    },
    center: {
      textAlign: 'center',
    },
  });

  const textStyles = [
    styles.text,
    colorPrimary && styles.colorPrimary,
    colorSecondary && styles.colorSecondary,
    bold && styles.bold,
    small && styles.small,
    subHeading && styles.subHeading,
    center && styles.center,
  ];

  return <Text style={textStyles} {...rest}>{children}</Text>;
}
