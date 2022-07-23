import React from 'react'
import {getDocs, query, where}from 'firebase/firestore'
import {auth, cvCollectionRef } from '../firebase-config';

function Docs() {
    const getQuerySnapshot = async () =>{ 
        const q = query(cvCollectionRef,where("userid","==",auth.currentUser.uid))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });  
    }
  return (
    <div>
        <button onClick={()=>{getQuerySnapshot()}}>click</button>
    </div>
  )
}

export default Docs