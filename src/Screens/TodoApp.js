import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import TodoComponent from '../Components/TodoComponent';
import FavouritesCompo from '../Components/Favourites';
import CompletedCompo from '../Components/Completed'


const TodoApp = () => {
  const [All, setAll] = useState(true);
  const [Completed, setCompleted] = useState(false);
  const [Favourites, setFavourites] = useState(false);
  const [input, setInput] = useState('');
  const [id, setidd] = useState(0);
  const [AllArray, setAllArray] = useState([]);
  const [CompletedArray,setCompletedArray] = useState([])
  const [FavouritesArray,setFavouritesArray] = useState([])

//   console.log(AllArray)

 const deleteFunction = (index) => {
    let newArray = AllArray.filter((element) => {
        return element.id != index
    })
    setAllArray(newArray)
}


const deleteFunctionForFavourites = (index) => {
    let newArray = FavouritesArray.filter((element) => {
        return element.id != index
    })
    setFavouritesArray(newArray)
}

const deleteFunctionForCompleted = (index) => {
    let newArray = CompletedArray.filter((element) => {
        return element.id != index
    })
    setCompletedArray(newArray)
}


const AddtaskToFavourites = (index) => {
    let objIndex = AllArray.findIndex((obj => obj.id == index))

    let newArray = [...AllArray]

    newArray[objIndex].favourites = true
    
    setFavouritesArray(newArray) 
    // deleteFunction(index)
}


const AddtaskToCompleted = (index) => {
        let objIndex = AllArray.findIndex((obj => obj.id == index))

        let newArray = [...AllArray]

        newArray[objIndex].Completed = true
        
        setCompletedArray(newArray)
        deleteFunction(index)

       
}

 const editFunction = (index,updatedData) => {

        let objIndex = AllArray.findIndex((obj => obj.id == index))

        let newArray = [...AllArray]

        newArray[objIndex].todo = updatedData    

        setAllArray(newArray)
    }


  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 25, textAlign: 'center',paddingTop:5}}>ToDo's</Text>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder={'Todos here'}
            style={{width: '80%', height: '100%', paddingLeft: 10}}
            value={input}
            onChangeText={txt => setInput(txt)}
          />
          <TouchableOpacity
            onPress={() => {
              setidd(id + 1);
              setAllArray([...AllArray, {todo: input, Completed: false,id:id,favourites:false}]);
              setInput('');
            }}
            style={{
              width: '20%',
              height: '100%',
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          height: 40,
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setAll(true);
            setCompleted(false);
            setFavourites(false);
          }}
          style={{
            width: '33.3%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: All ? 'grey' : 'white',
          }}>
          <Text style={{color: 'lightgrey'}}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setAll(false);
            setCompleted(true);
            setFavourites(false);
          }}
          style={{
            width: '33.3%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Completed ? 'grey' : 'white',
          }}>
          <Text style={{color: 'lightgrey'}}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setAll(false);
            setCompleted(false);
            setFavourites(true);
          }}
          style={{
            width: '33.3%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Favourites ? 'grey' : 'white',
          }}>
          <Text style={{color: 'lightgrey'}}>Favourites</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        {All ? (
          AllArray.map((val, index) => {
            return <TodoComponent key={index} data={val} del={deleteFunction} comp={AddtaskToCompleted} fav={AddtaskToFavourites} activeforEdit={editFunction} />;
          })
        ) : Completed ? (
            CompletedArray.map((val, index) => {
                if(val.Completed == true){
            return <CompletedCompo key={index} data={val} del={deleteFunctionForCompleted} />;
                }
          })
        ) : Favourites ? (
            FavouritesArray.map((val, index) => {
                if(val.favourites == true){
            return <FavouritesCompo key={index} data={val} del={deleteFunctionForFavourites} />
                }
          })
        ) : (
          <Text>First Add Todo</Text>
        )}
      </View>
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
