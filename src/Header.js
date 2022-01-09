import React from 'react'

export default function Header() {
   return (
      <div style={{margin:'0', textAlign: 'center', borderRadius: '20px'}}>
         <div style={{fontSize: '50px'}}>Pokedex System Interview</div>
         <div style={{fontSize: '15px', textAlign: 'right', marginRight: '50px'}}>For <a href="https://kodereview.io/">kodereview.io</a></div>
         <hr style={{borderBottom: '1px', color: '#f0dede', marginBottom: '50px'}}/>
      </div>
   )
}
