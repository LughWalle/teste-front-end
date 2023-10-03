import axios from 'axios';
import { apiPunk } from '../api/service';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { beer, data } from '@/lib/types';

const initialValue = {
	allBeers: [],
	getBeers: () => {},
	pages: 1,
	msgError: undefined,
	randomB: [],
};

export const BeersContext = createContext<data>(initialValue);

export const BeersProvider = ({ children }: { children: ReactNode }) => {
  const [allBeers, setAllBeers] = useState<beer[]>([])
	const [randomB, setRandomB] = useState<beer[]>([])
	const [pages, setPages] = useState<number>(1)
	const [loading, setLoading] = useState<boolean>(false)
	const [msgError, setMsgError] = useState<string | undefined>(undefined)
	const getBeers = (page?: number) => {
    apiPunk.get('/', {
      params: {
        page,
      },
    }).then((res) => {			
			if (page && page > 0) {
				
				setAllBeers((prev) => [...allBeers, ...res.data])
				
				setPages(pages + 1)
			} else {
				setAllBeers(res.data)
			} 
		
		}).catch((error) => {
			setMsgError('Não há mais cerveja')
		})

  };

	const randomBeer = () => {
		apiPunk.get('/random').then((res) => {
			setRandomB(res.data)
		})
	}
	
	useEffect(() => {
		randomBeer()	
	}, [])
	

	const data ={
		getBeers,
		allBeers,
		pages,
		msgError,
		randomB
	}
	return (
		<BeersContext.Provider value={data} >
			{children}
		</BeersContext.Provider>
	)
};
