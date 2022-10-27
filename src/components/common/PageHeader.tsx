import styled from 'styled-components'
type Props = {
  title: string
}

const PageHeader = ({title}: Props) => {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  )
}

export default PageHeader

const Header = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 40px;
  margin-top: 20px;
`
