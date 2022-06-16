import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import TodoList from "../componentes/TodoList"
import { todosData } from "../data/todos"
import { useNavigation } from "@react-navigation/native"

export default function Home() {
  const [localData, setLocalData] = useState(
    todosData.sort((a, b) => {
      return a.isCompleted - b.isCompleted
    })
  )
  const [isHidden, setIsHidden] = useState(false)
  const navigation = useNavigation()

  const handleHidePress = () => {
    if (isHidden) {
      setIsHidden(false)
      setLocalData(
        todosData.sort((a, b) => {
          return a.isCompleted - b.isCompleted
        })
      )
      return
    }
    setIsHidden(!isHidden)
    setLocalData(localData.filter((todo) => !todo.isCompleted))
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity onPress={handleHidePress}>
          <Text style={{ color: "#3478f6" }}>
            {isHidden ? "Show completed" : "Hide completed"}
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList todosData={localData.filter((t) => t.isToday)} />
      <Text style={styles.title}>Tomorrow</Text>
      <TodoList todosData={todosData.filter((t) => !t.isToday)} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C3A51",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 40,
    color: "#fff",
    position: "absolute",
    top: -6,
    left: 9,
  },
})
