import React from 'react'

// function StudentCard(props) {
function StudentCard({name , marks, grade}){
  return (
    <div className="bg-red-600">
      <h2>Name - {name}</h2>
      <p>Marks - {marks}</p>
      <p>Grade - {grade}</p>
    </div>  
  )
}
export default StudentCard
