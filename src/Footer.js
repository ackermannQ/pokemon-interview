import React from 'react'

export default function Footer() {
   const date = new Date();

   return (
      <div style={{textAlign: 'center', position:'absolute', marginLeft: 0, marginRight: 0, marginBottom: '20px', left: 0, right:0, bottom: '0'}}>
         Brewed with ☕☕☕ ~ {date.getFullYear()}
      </div>
   )
}
