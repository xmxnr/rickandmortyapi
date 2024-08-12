import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import '../styles/CharacterCard.css'
import Loader from './Loader';
const CharacterCard = ({ url }) => {
	const [resident, getResident, error, isLoading] = useFetch(url);

    useEffect(() => {
      getResident();
    }, [])
    
	return (
        isLoading ? (<Loader/>) : 
		<article className='card__container flex__container'>
            <header>
                <img src={resident?.image} alt={resident?.name}/>
                <div className='card__status'>{resident?.status}</div>
                <div className='card__id'>#{resident?.id}</div>
            </header>
            <div className='card__information'>
            <h2 className='card__name'>{resident?.name}</h2>
            <ul>
                <li><span className='li__title'>Specie:</span><br /><span className='li__text'>{resident?.species}</span></li>
                <li><span className='li__title'>Origin:</span><br /><span className='li__text'>{resident?.origin.name}</span></li>
                <li><span className='li__title'>Episodes where appear:</span><br /><span className='li__text'>{resident?.episode.length}</span></li>
            </ul>
            </div>
        </article>
	);
};

export default CharacterCard;
