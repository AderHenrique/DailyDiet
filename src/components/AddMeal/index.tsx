import { Button } from '@components/Button'
import * as S from './styles'

export function AddMeal() {
  return (
    <S.Container>
      <S.Title>
        Refeições
      </S.Title>
      <Button type='TEXT' title='Nova refeição'/>
    </S.Container>
  )
}