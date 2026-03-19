import RecordTable from "./component/record-table"

import {useAppDispatch, useAppSelector} from "./store/hooks"
import {incremented, amountAdded} from "./features/counter-slice"
import {useFetchBreedsQuery} from "./dogs/dogs-api-slice"
import { useState } from "react"

const App = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const [numDogs, setNumDogs] = useState(10)
  const {data = [], isFetching} = useFetchBreedsQuery(numDogs);

  const handleClick = () => {
    dispatch(amountAdded(3))
  }

  return (
    <div>
      {/* <RecordTable /> */}
      <button onClick={handleClick}>
        count is: {count}
      </button>

      <div>
        <p>Dogs to fetch:</p>
        <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <p>
        Number of dogs fetched: {data.length}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img
                      src={breed.image.url}
                      alt={breed.name}
                      height={250}
                      width={250}
                    />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </p>
    </div>
  )
}

export default App