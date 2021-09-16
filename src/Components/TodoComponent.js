import React,{useState} from "react";
import {View,Text, TouchableOpacity, TextInput, } from 'react-native'


const TodoComponent = ({data,del,comp,fav,activeforEdit}) => {

    const [selectedFav,setselectedFav] = useState(false)
    const [options,setOptions] = useState(false)
    const [updateInput,setupdateInput] = useState('')
    const [updateBtn,setupdateBtn] = useState('')
    const [hideEdit,sethideEdit] = useState(false)

    return (
        <View style={{width:'90%',height:50,backgroundColor:'white',alignSelf:'center',marginVertical:5,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'95%',height:'90%',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:'50%',height:'100%',justifyContent:'center'}}>

                  

              {hideEdit?

                
                  <View style={{width:'100%',height:'100%',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                        <TextInput placeholder={'Update'} value={updateInput} onChangeText={(txt)=>setupdateInput(txt)} style={{width:'60%',height:'80%'}} />
                        <TouchableOpacity
                        onPress={()=>{
                            setupdateBtn(updateInput)
                            activeforEdit(data.id,updateInput)
                            sethideEdit(false)
                        }}
                        style={{backgroundColor:'gold',width:'30%',justifyContent:'center',alignItems:'center',height:'60%'}}>
                            <Text style={{color:'white'}}>Update</Text>
                        </TouchableOpacity>
                  </View>
            : 
            <Text style={{color:'black',paddingLeft:10}}>{data.todo}</Text> }


                </View>

                <View style={{width:'30%',height:'100%',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                   <TouchableOpacity
                   activeOpacity={0.8}
                   onPress={()=>{
                       setselectedFav(true)
                       fav(data.id)
                    }}
                   >
                       <Text style={{color:selectedFav?'red':'lightgrey',fontSize:18,fontWeight:'bold'}}>Fav</Text>
                   </TouchableOpacity>

                   <TouchableOpacity
                   style={{width:'55%',height:'60%',backgroundColor:'grey',justifyContent:'center',alignItems:'center'}}
                   activeOpacity={0.8}
                   onPress={()=>setOptions((prev)=>!prev)}
                   >
                       <Text style={{color:'white',fontSize:15}}>Options</Text>
                   </TouchableOpacity>


{options?
                   <View style={{width:60,height:60,backgroundColor:'blue',position:'absolute',right:10,top:-5,flexDirection:'column'}}>
                   <TouchableOpacity
                   style={{width:'100%',height:20,backgroundColor:'grey',justifyContent:'center',alignItems:'center',borderBottomColor:'lightgrey',borderBottomWidth:1}}
                   activeOpacity={0.8}
                   onPress={()=>{
                       hideEdit ?
                       setOptions(false):
                    sethideEdit(true)
                   }}
                   >
                       <Text style={{color:'white',fontSize:12}}>{hideEdit?'close':'Edit'}</Text>
                   </TouchableOpacity>


                   <TouchableOpacity
                   onPress={()=>{
                       comp(data.id)
                   }}
                   style={{width:'100%',height:20,backgroundColor:'grey',justifyContent:'center',alignItems:'center',borderBottomColor:'lightgrey',borderBottomWidth:1}}
                   activeOpacity={0.8}
                   >
                       <Text style={{color:'white',fontSize:12}}>Completed</Text>
                   </TouchableOpacity>

                   <TouchableOpacity
                   onPress={()=>del(data.id)}
                   style={{width:'100%',height:20,backgroundColor:'grey',justifyContent:'center',alignItems:'center',borderBottomColor:'lightgrey',borderBottomWidth:1}}
                   activeOpacity={0.8}
                   >
                       <Text style={{color:'white',fontSize:12}}>Delete</Text>
                   </TouchableOpacity>
                   </View>
:null}                   
                </View>

            </View>

        </View>
    )
}

export default TodoComponent