function ProvinceList({value, name}) {
  const provinces = [
    "AROB", "Central Province","Chimbu (Simbu) Province","Eastern Highlands Province","East New Britian","East Sepik Province","Enga Province","Gulf Province","Hela Province","Jiwaka Province","Madang Province","Manus Province","Milne Bay Province","Morobe Province","New Ireland Province","Northern Province (Oro)","Southern Highlands Province","Western Highlands Province","WesT New Britain","West Sepik (Sandaun) Province","Western Province","National Capital District"
  ]
  return(
    <>
    <label>Select Province of Origin</label>
    <select value={value} name={name} required>
      {provinces.map((province) => (
        <option key={province} value={province}>{province}</option>
      ))}
    </select>
    </>
  )
}
export default ProvinceList;