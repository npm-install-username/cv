import React, { useEffect, useState } from 'react'
import {getDocs, query, where}from 'firebase/firestore'
import {auth, cvCollectionRef } from '../firebase-config';





function Docs(props) {
   
    

    const [userDocs,setUserDocs] = useState([])


    useEffect(()=>{
      if(auth.currentUser){
        const getQuerySnapshot = async () =>{ 
          const q = query(cvCollectionRef,where("userid","==",auth.currentUser.uid))
          const querySnapshot = await getDocs(q);
          let output = []
          let i =0
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              //console.log(doc.id, " => ", doc.data());
              output[i] = {
                docId :doc.id,
                data :doc.data()
              }
              i = i +1
          });
          console.log(output)
          setUserDocs(output)
          console.log(userDocs)
          return output
        } 
        
        
        getQuerySnapshot().then((data)=>{
          setUserDocs(data)
          console.log(userDocs)
        })
        

      }        
      else {
        console.log("not logged in")
      }

    },[auth.currentUser])

    
  return (
    <div>
      
      {userDocs.map((cv) =>(
        <div>
          <h1>cv title</h1>
          <h2>cv content</h2>
        </div>
      ))}
    </div>
  )
}

export default Docs