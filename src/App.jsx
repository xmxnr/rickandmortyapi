import { useEffect, useState, useRef } from 'react';
import './App.css';
import CharacterCard from './assets/components/CharacterCard';
import useFetch from './assets/hooks/useFetch';
import getRandomNumber from './assets/helpers/getRandomNumber';
import LocationInfo from './assets/components/LocationInfo';
import Loader from './assets/components/Loader';
import getNumbers from './assets/helpers/getNumbers';

function App() {
	const [locationId, setLocationId] = useState(getRandomNumber(126));
	const url = `https://rickandmortyapi.com/api/location/${locationId}`;
	const [location, getLocation, hasError, isLoading] = useFetch(url);
	const [locations, getLocations, hasErrorLocations, isLoadingLocations] =
		useFetch(`https://rickandmortyapi.com/api/location/${getNumbers()}`);

	
	


	useEffect(() => {
		getLocation();
	}, [locationId]);

	useEffect(() => {
		getLocations();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const inputValue = inputName.current.value.trim();

		const selectedLocation = locations.find(
			(location) => location.name.toLowerCase() === inputValue.toLowerCase(),
		);

		if (inputValue) {
			setLocationId(selectedLocation ? selectedLocation.id : null);
		}
	};

	const inputName = useRef();

	return isLoading ? (
		<div>
			<Loader />
		</div>
	) : (
		<div className="body">
			<header className="hero">
				<img src="/images.png" alt="rickandmortylogo" />
			</header>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					list="locations"
					ref={inputName}
					min={1}
					placeholder="Search location name"
				/>

				<datalist id="locations">
					{
						locations?.map((location) => (
							<option value={location.name} key={location.id}></option>
						))
					}
				</datalist>
				<button>Search</button>
			</form>
			<article>
				{hasError ? (
					<h1>❌Sorry! You must enter a valid location</h1>
				) : 
					<article>
						<LocationInfo location={location} />
						
						<section className="cards__container">
							{location?.residents.map((residents) => (
								<CharacterCard key={residents} url={residents}/>
							))}
						</section>
					</article>
				}
			</article>
		</div>
	);
}

export default App;
