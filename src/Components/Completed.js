import React,{useState} from "react";
import {View,Text, TouchableOpacity} from 'react-native'


const CompletedCompo = ({data,del}) => {


    return (
        <View style={{width:'90%',height:50,backgroundColor:'white',alignSelf:'center',marginVertical:5,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'95%',height:'90%',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:'50%',height:'100%',justifyContent:'center'}}>
                    <Text style={{color:'black',paddingLeft:10}}>{data.todo}</Text>
                </View>

                <View style={{width:'30%',height:'100%',justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
        
                   <TouchableOpacity
                   style={{width:'55%',height:'60%',backgroundColor:'red',justifyContent:'center',alignItems:'center'}}
                   onPress={()=>del(data.id)}
                   >
                       <Text style={{color:'white',fontSize:15}}>Delete</Text>
                   </TouchableOpacity>

         
                </View>

            </View>

        </View>
    )
}

export default CompletedCompo