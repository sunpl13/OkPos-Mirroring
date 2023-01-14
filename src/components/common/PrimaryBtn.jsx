import {CButton} from '@coreui/react'
import styled from 'styled-components'

const PrimaryBtn = ({children, onClick}) => {
  return <CustomBtn onClick={onClick}>{children}</CustomBtn>
}

export default PrimaryBtn

const CustomBtn = styled(CButton)`
  background-color: #003366;
`
