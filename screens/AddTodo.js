import DateTimePicker from "@react-native-community/datetimepicker"
import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native"

export default function AddTodo() {
  const [name, setName] = useState("")
  const [date, setDate] = useState(new Date())
  const [isToday, setIsToday] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          placeholderTextColor="#00000030"
          onChangeText={(text) => {
            setName(text)
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hour</Text>
        <DateTimePicker
          value={date}
          mode={"time"}
          is24Hour={true}
          onChange={(event, selectedDate) => setDate(selectedDate)}
          style={{ width: "80%" }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>is Today?</Text>
        <Switch
          value={isToday}
          onValueChange={(value) => {
            setIsToday(value)
          }}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white" }}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 30,
    marginTop: 20
  },
  title: {
    fontSize: 34,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    lineHeight: 24,
  },
  textInput: {
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    width: "80%",
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    height: 46,
    borderRadius: 11,
  },
})
