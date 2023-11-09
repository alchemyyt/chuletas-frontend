'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { createAutocomplete } from '@algolia/autocomplete-core'
import '../styles/search.css'
import { useState,useMemo,useRef } from 'react'
import Link from 'next/link'
const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
const AutocompleteItem = ({ id, slug,title }) => {
  return (
    <Link href={`/${id}`}>
      <li>{title}</li>
    </Link>
  )
}
const Search = (props) => {
  const [autoCompleteState,setAutocompleteState]=useState({
    collections: [],
    isOpen: false
  })
  const autoComplete = useMemo(() => createAutocomplete({
    placeholder:'Buscar',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'posts-next-api',
      getItems: ({ query }) => {
        if (!!query) {
          return fetch(`https://cms-y0rj.onrender.com/api/posts?where[subject][equals]=${query}`)
            .then(res=>res.json())
        }
      }
    }
    ],
    ...props
  }), [props])
  const formRef=useRef(null)
  const inputRef=useRef(null)
  const panelRef=useRef(null)

  const formProps= autoComplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autoComplete.getInputProps({
    inputElement: inputRef.current
  })
  return (
    <form action='' className='searchCtn' {...formProps}>
      <div>
        <label for='search'>
          <div className='searchIcon'>{searchIcon}</div>
        </label>
        <input type='text' name='search' id='search' placeholder='Buscar' {...inputProps}/>
      </div>
      {
        autoCompleteState.isOpen && (
          <div ref={panelRef} {...autoComplete.getPanelProps()}>
            {autoCompleteState.collections.map((collection,index)=>{
              const { items } = collection
              const data = items[0].docs
              console.log(data)
              console.log('holas')
              return (
                <section key={`section-${index}`} className='autoCompleteSection'>
                  {data.length > 0 && (
                    <ul {...autoComplete.getListProps()}>
                      {
                        data.map(item => <AutocompleteItem key={item.id} {...item} />)
                      }
                    </ul>
                  )}
                </section>
              )
            })}
          </div>
        )
      }
    </form>
  )
}

export default Search
