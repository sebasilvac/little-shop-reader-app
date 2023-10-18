import React from "react";
import { ViewProps, StyleSheet, View, ScrollView } from "react-native";
import StyleText from "../StyleText";
import theme from "../../theme";
import { Link } from "@react-navigation/native";

interface AppBarTabProps extends ViewProps {
  active?: boolean;
  children: React.ReactNode;
  to: string;
}

const AppBarTab = ({ active, children, to }: AppBarTabProps) => {

  const textStyles = [
    styles.text,
    active && styles.active];

  return (
    <Link
      to={{
        screen: to as never,
        params: {} as never,
      }}

      style={textStyles}
    >
      <StyleText bold style={textStyles}>
        {children}
      </StyleText>
    </Link>
  );
};

interface AppBarProps extends ViewProps {
  routeName?: string;
}

const AndroidAppBar = ({routeName}: AppBarProps) => {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="Home"   active={ !routeName || routeName === 'Home' }   >Home!</AppBarTab>
        <AppBarTab to="Detail" active={ routeName === 'Detail' }>
          Detail
        </AppBarTab>
        <AppBarTab to="Login" active={ routeName === 'Login' }>
          Login
        </AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    //paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.appBar.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  text: {
    color: theme.appBar.textSecondary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold as any,
    paddingHorizontal: 5,
  },
  scroll: {
    paddingBottom: 5,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

export default AndroidAppBar;
