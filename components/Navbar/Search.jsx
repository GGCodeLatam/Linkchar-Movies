/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/react-in-jsx-scope */


import { useMemo, useRef, useState } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import Link from 'next/link'



const AutocompleteItem = ({title}) => {

  return (
    <li>
      <Link href={`/`}>
        <a className='hover:bg-blue-300 flex gap-4 p-4'>
         {/*  <img src={res.results.poster_path} alt={res.results.title} className='w-12 h-12 object-contain' /> */}
          <div>
            <h3 className='text-sm font-semibold text-black'>{title}</h3>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default function Search (props) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Search',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'results',
      getItems: async ({ query }) => {
        if (!!query) {
          return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5b49a363432f2c7c8313eea227c49945&language=en-US&query=${query}`)
            .then(res => res.json())
        }
      }
    }],
    ...props
  }), [props])


  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} className="flex justify-center z-50" {...formProps}>
      <div className="flex relative rounded-full w-auto">
        <input ref={inputRef} className='flex-1 px-2 rounded-full w-full' {...inputProps} />
      {
        autocompleteState.isOpen && (
          <div className="absolute mt-16 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shadow-lg z-10" ref={panelRef} {...autocomplete.getPanelProps()}>
            {autocompleteState.collections.map((collection, index) => {
              const { items } = collection
              console.log({items})
              return (
                <section key={`section-${index}`}>
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {
                        items.map(results => <AutocompleteItem key={results} {...props}/>)
                      }
                    </ul>
                  )}
                </section>
              )
            })}
          </div>
        )
      }
      </div>
    </form>
  )
}