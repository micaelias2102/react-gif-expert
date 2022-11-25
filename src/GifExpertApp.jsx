import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState( ['Naruto'] );

  const onAddCategory = (NewCategory) => {
        if (categories.includes(NewCategory)) {
            return;
        }
        setCategories( [NewCategory,...categories])
    }
  
    return (
    <>
        {/* titulo */}
        <h1>Gif Expert App</h1>

        {/* input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory= {(event) => onAddCategory(event)}
        />

        {/* Listado de Gif */}

        {
            categories.map( category => (
                    <GifGrid 
                    key={category} 
                    category={category}/>
                ))
        }

    </>
  )
}
