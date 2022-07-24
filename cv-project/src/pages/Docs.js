import React, { useEffect, useState } from 'react'
import {getDocs, query, where}from 'firebase/firestore'
import {auth, cvCollectionRef } from '../firebase-config';
import RecordEntry from '../components/RecordEntry';
import Bounce from "react-activity/dist/Bounce";
import "react-activity/dist/Bounce.css";
import '../styles/Docs.scss'





function Docs(props) {
   
    

    const [userDocs,setUserDocs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    



    useEffect(()=>{
      if(auth.currentUser){
        
        const getQuerySnapshot = async () =>{ 
          const q = query(cvCollectionRef,where("userid","==",auth.currentUser.uid))
          const querySnapshot = await getDocs(q);
          let output = []
          let i =0
          querySnapshot.forEach((doc) => {
              output[i] = {
                docID :doc.id,
                data :doc.data()
              }
              i = i +1
          });
          console.log(output)
          return output
        }
        getQuerySnapshot().then((data)=>{
          console.log("t")
          setUserDocs(data)
          console.log(userDocs)
        })
        if(userDocs!=null){
          setIsLoading(false)
        }
      }        
      else {
        console.log("not logged in")
      }

      //eslint was giving warning message saying userdocs should be dependency but that was cauing infite loop so I disabled the messaege for this line
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth.currentUser])

  
    return (
      
      <div className='container'>
        {isLoading && <Bounce />}
        {userDocs.map((cv) =>(
          <div>
            {<RecordEntry title={'software'} docID={cv.docID} content={cv.data.cvContent}/>}
          </div>
        ))}
      </div>
    )
  

}

export default Docs