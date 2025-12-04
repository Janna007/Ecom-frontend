import { Card, Flex, theme } from "antd";
import { userAuth } from "../../store";
import { BarChartOutlined, GiftFilled } from '@ant-design/icons';



const data = [
  {
    key: '1',
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
    price:2911,
    status:'pending'
  },
  {
    key: '2',
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
    price:2911,
    status:'completed'
  },
  {
    key: '3',
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    price:2911,
    status:'pending'
  },
  {
    key: '4',
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
    price:2911,
    status:'pending'
  },
  {
    key: '5',
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
    price:2911,
    status:'completed'
  },
 
];





function HomePage() {
  const { user } = userAuth();

  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <div>
      <h1>Welome {user?.firstName} 😉</h1>
      <div style={{ marginTop: "30px" }}>
        <Flex gap="middle">
          <div>
            <Flex gap="middle">
              <Card style={{ width: 280, height: 120,borderRadius:0 }}>
                <Flex gap="middle">
                  <div style={{display:'flex',width:'30px',height:'30px' ,backgroundColor:'#13C9251F',borderRadius:'10px',alignItems:'center',justifyContent:'center'}}>
                    <GiftFilled style={{color:'#13C925'}} />
                  </div>
                  <div>
                    <Flex  vertical>
                      <p style={{fontSize:18,fontWeight:500,margin:0}}>Total orders</p>
                      <h1 style={{fontSize:26,fontWeight:500}}>28</h1>
                    </Flex>
                  </div>
                </Flex>
              </Card>
              <Card style={{ width: 280, height: 120,borderRadius:0 }}>
                <Flex gap="middle">
                  <div style={{display:'flex',width:'30px',height:'30px' ,backgroundColor:'#06C3FF1F',borderRadius:'10px',alignItems:'center',justifyContent:'center'}}>
                     <BarChartOutlined style={{color:'#14AAFF'}} />
                  </div>
                  <div>
                    <Flex  vertical>
                      <p style={{fontSize:18,fontWeight:500,margin:0}}>Total Sale</p>
                      <h1 style={{fontSize:26,fontWeight:500}}>$50000</h1>
                    </Flex>
                  </div>
                </Flex>
              </Card>
            </Flex>
            <div style={{marginTop:'30px'}}>
              <Card
                title="sales"
                variant="borderless"
                style={{ width: '100%' }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </div>

          <div style={{width:'100%'}}>
            <Card>
              {/* title */}
              <div>
                <Flex gap="middle">
                <div style={{display:'flex',width:'30px',height:'30px' ,backgroundColor:'#F65F421F',borderRadius:'10px',alignItems:'center',justifyContent:'center'}}>
                    <GiftFilled style={{color:colorPrimary}} />
                  </div>
                  <div>
                     <p style={{fontSize:18,fontWeight:500,margin:0}}>Recent orders</p>
                  </div>
                </Flex>
              </div>

              {/* list items */}
              <div style={{marginTop:'30px'}}>
                {/* 1 list item */}
                  
                  {data.map((item)=>(
                      <div key={item.key} >
                      <Flex gap="middle">
                       <div style={{width:'70%'}}>
                         <Flex gap="3px" vertical >
                           <p style={{margin:0,fontSize:'16px',fontWeight:600}}>{item.name}</p>
                           <p style={{fontSize:'16px',fontWeight:400}}>{item.address}</p>
                         </Flex>
                       </div>
                       <div style={{width:'30%'}}>
                         <Flex gap="middle">
                           <p  style={{fontSize:'16px',fontWeight:600}}>${item.price}</p>
                           {/* <Tag key={1} color='#219653'>
                                  status
                           </Tag> */}
                           <div style={{backgroundColor:"#EB57571F",padding:'6px',width:"80px",height:"30px",borderRadius:'24px',display:"flex",justifyContent:"center",alignContent:"center"}}>
                            <p style={{color:'#EB5757',fontSize:'12px',fontWeight:500}}>{item.status}</p>
                           </div>
                         </Flex>
                       </div>
                      </Flex>
                   </div>
                  ))}
              </div>

              {/* link */}

              <div style={{marginTop:"30px"}}>
                <p style={{textDecorationLine:"underline",textDecorationColor:colorPrimary}}>see all orders</p>
              </div>
            </Card>
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default HomePage;
