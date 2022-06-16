import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Checkbox from "./Checkbox"

export default function Todo({ id, text, isCompleted, isToday, hour }) {
  return (
    <View style={styles.container}>
      <Checkbox
        id={id}
        text={text}
        isCompleted={isCompleted}
        isToday={isToday}
        hour={hour}
      />
      <View>
        <Text
          style={
            isCompleted
              ? [
                  styles.text,
                  { textDecorationLine: "line-through", color: "#73737370" },
                ]
              : styles.text
          }
        >
          {text}
        </Text>
        <Text
          style={
            isCompleted
              ? [
                  styles.time,
                  { textDecorationLine: "line-through", color: "#73737370" },
                ]
              : styles.time
          }
        >
          {hour}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  time: {
    fontSize: 18,
    fontWeight: "500",
    color: "#a3a3a3",
  },
})
