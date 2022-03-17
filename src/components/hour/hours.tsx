import{ useState, useEffect } from "react";
import HourModel  from "../../models/hour";

const Hours = () => {
    const [hours, setHours] = useState([]);
    useEffect(() => {
        fetchHoursFromLS(setHours);
      }, []);
    return (
        <ul>
        {hours.map((value: HourModel, index) => {
          return <li key={index}>
                  <h1>{value.description}</h1>
                  <h1>{value.customer}</h1>
                  <h1>{value.hours}</h1>
              </li>
        })}
      </ul>
      )
};


export default Hours;


const fetchHoursFromLS: any = (setHours: Function) => {
    const hours = JSON.parse(localStorage.hours);
    setHours(hours);
}
