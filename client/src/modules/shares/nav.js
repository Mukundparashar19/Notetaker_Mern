import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">
  <Link to='/' class="navbar-brand">Add Notes</Link>

  <div>
    <div class="navbar-nav">
      <Link to='/allnotes' class="nav-item nav-link fs-5">List</Link>      
    </div>
  </div>
</nav>
  )
}
