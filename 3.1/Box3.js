import Box4 from './Box4'
function Box3 () {

  return (
    <div className="Box" style={{
        backgroundColor: 'yellow',
        width: '90%',
        height: '90%',
        marginLeft : '5%',
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column'
      }}>
     <Box4/> 
     <Box4/> 

    </div>
  );
}

export default Box3;