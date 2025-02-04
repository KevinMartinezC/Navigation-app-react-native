import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  varian?: "contained" | "text-only";
  className?: string

}
const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      varian = "contained",
      className
    }: Props,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color];

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color];
    if (varian === "text-only") {
      return (
        <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          className={`p-3 ${className}`}
        >
          <Text className={`text-center ${textColor} font-work-medium`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
      >
        <Text className="text-white text-center font-work-medium">
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
