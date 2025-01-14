import { useContext } from 'react'
import { PlanetsList } from '../../components/PlanetsList'
import { PlanetsContext } from '../../contexts/PlanetsContext'
import { PlanetPage } from '../../components/PlanetPage'
import { usePlanetData } from '../../utils/getPlanetData'

export function Home() {
  const { openList } = useContext(PlanetsContext)
  const planetData = usePlanetData(0)

  return openList ? <PlanetsList /> : <PlanetPage {...planetData} />
}
