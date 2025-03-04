import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PlanetsContext } from '../../../../contexts/PlanetsContext'
import { CaretRight } from 'phosphor-react'
import {
  Content,
  IconContainer,
  ItemContainer,
  Label,
  Separator,
  TextContainer,
  Title,
  Wrapper,
} from './styles'

interface ItemProps {
  title: string
  labelColor: string
  route: string
}

export function Item({ title, labelColor, route }: ItemProps) {
  const { setOpenList, setCurrentPage } = useContext(PlanetsContext)

  return (
    <ItemContainer
      onClick={() => {
        setCurrentPage(title.toLowerCase())
        setOpenList(false)
      }}
    >
      <NavLink to={`/${route}`} title={title}>
        <Wrapper>
          <Content>
            <TextContainer>
              <Label className={labelColor} />
              <Title>{title}</Title>
            </TextContainer>
            <IconContainer>
              <CaretRight size={14} />
            </IconContainer>
          </Content>
          <Separator />
        </Wrapper>
      </NavLink>
    </ItemContainer>
  )
}
