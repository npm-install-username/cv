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

      //eslint was giving warning message saying userdocs should be dependency but that was cauing infite loop so I disabled the messaege for this line
    // eslint-disable-next-line react-hooks/exhaustive-deps
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