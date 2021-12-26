import styled from 'styled-components/native'

export const Container = styled.View`
  width: 160px;
  height: 160px;
  /* margin-top: 32px; */
  /* margin-bottom: 12px; */
`

export const EmptyPhotoContainer = styled.View`
  width: 160px;
  height: 160px;
  border-width: 1px;
  border-radius: 80px;
  border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  border-style: dashed;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`

export const EmptyPhotoText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  padding: 16px;
`
