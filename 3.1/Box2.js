import Box3 from './Box3'
function Box2 () {

  return (
    <div className="Box" style={{
        backgroundColor: 'red',
        width: '90%',
        height: '90%',
        marginLeft : '5%',
        display : 'flex',
        alignItems : 'center'
      }}>
     <Box3/> 
    </div>
  );
}

export default Box2;