import Box2 from './Box2'
function Box1 () {

  return (
    <div className="Box" style={{
        backgroundColor: 'green',
        width: '100vw',
        height: '100vh',
        display : 'flex',
        alignItems : 'center'
      }}>
    <Box2/>
    </div>
  );
}

export default Box1;