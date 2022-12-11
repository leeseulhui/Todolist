import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const TodoScreen = () => {
   // todos: {id: Number, textValue: string, checked: boolean }
   const [todos, setTodos] = useState([]);
 
   const addTodo = text => {
     setTodos([
       ...todos,
       {id: Math.random().toString(), textValue: text, checked: false},
     ]);
   };
 
   const onRemove = id => e => {
     setTodos(todos.filter(todo => todo.id !== id));
   };
 
   const onToggle = id => e => {
     setTodos(
       todos.map(todo =>
         todo.id === id ? {...todo, checked: !todo.checked} : todo,
       ),
     );
   };
 
   return (
     <SafeAreaView style={styles.container}>
       <Text style={styles.appTitle}>TODO LIST</Text>
       <View style={styles.card}>
         <TodoInsert onAddTodo={addTodo} />
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#88D8E8',
   },
   appTitle: {
     color: 'white',
     fontSize: 36,
     marginTop: 30,
     marginBottom: 30,
     fontWeight: '300',
     textAlign: 'center',
     backgroundColor: '#88D8E8',
   },
   card: {
     backgroundColor: '#fff',
     flex: 1,
     borderTopLeftRadius: 10, 
     borderTopRightRadius: 10, 
     marginLeft: 10,
     marginRight: 10,
   },
 });
 
 export default TodoScreen;