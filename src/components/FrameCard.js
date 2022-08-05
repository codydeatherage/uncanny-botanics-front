import { styled } from '@mui/system';

const Container = styled('div')({
    width: '100vw',
    height: '300',
    border: '1px solid blue',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    padding: '5vh 0',
    // margin: '0 auto',
})

const CardContainer = styled('div')({
    justifyContent: 'space-evenly',
    width: '90vw',
    display: 'flex',
    margin: 'auto',
    border: '1px solid green',
})

const FrameCard = ({ children }) => {
  return (
    <Container>
        <CardContainer>
            { children }
        </CardContainer>
    </Container>
  )
}

export default FrameCard