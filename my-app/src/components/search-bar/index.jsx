import React from 'react'

export default function SearchBar() {
  return (
    <form className='filter-form'>
      <input type="text" className="search-input" placeholder='пошук по назві' />
    <label >
      <input type="checkbox" className="in-whish-list-checkbox" />
    Тільки в списку за бажанням
    </label>
    </form>
  )
}
