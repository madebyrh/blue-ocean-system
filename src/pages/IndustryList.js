import React, { useState, createContext } from 'react'
import GroupList from '../molecues/GroupList'
import AddMolecues from '../molecues/AddMolecues'
import firebase from '../firebase'
import 'firebase/firestore'

export const IndustryListContext = createContext()


const IndustryList = () => {
    const [industryList, setIndustryList] = useState([])
    //firebaseからindustrylistを取得する関数
    var arr = []
const getIndustryList = async () => {
    
    const db = firebase.firestore()
    const data = await db.collection('industryList').get()
    data.forEach(doc => {
        arr.push({
            id:doc.id,
            name: doc.data().name
        })
    })
    setIndustryList(arr)
    

    //console.log(data.docs)
}

    
    return (
        <IndustryListContext.Provider value={[getIndustryList, industryList, setIndustryList]}>
        <div>
        <GroupList />
        <AddMolecues />
        </div>
        </IndustryListContext.Provider>
    )
}

export default IndustryList;