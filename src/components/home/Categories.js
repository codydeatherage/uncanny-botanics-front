import { styled } from '@mui/system';

const Container = styled('div')({
    width: '100vw',
    height: '300',
    padding: '5vh 0',
    backgroundColor: '#112121'
})

const CardContainer = styled('div')({
    justifyContent: 'space-evenly',
    width: '90vw',
    display: 'flex',
    margin: 'auto',
})

const Categories = ({ children }) => {
  return (
    <Container>
        <CardContainer>
            { children }
        </CardContainer>
    </Container>
  )
}

export default Categories