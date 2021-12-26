import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0 16px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TITLE};
`
