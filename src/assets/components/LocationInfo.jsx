import '../styles/LocationInfo.css'


const LocationInfo = ({location}) => {
  return <section className='location__container'>
    <h2 className='location__name'>{location?.name}</h2>
    <ul className='location__ul'>
        <li><span className='location__title'>Type:</span><span>{location?.type}</span></li>
        <li><span className='location__title'>Dimension:</span><span>{location?.dimension}</span></li>
        <li><span className='location__title'>Population:</span><span>{location?.residents.length}</span></li>
    </ul>
  </section>
  
}

export default LocationInfo