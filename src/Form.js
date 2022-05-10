import React,{useState} from 'react';
import FormControl from '@mui/material/FormControl';
import  {deepPurple}  from '@mui/material/colors';
import {CardContent,CardActions,CardHeader,Card,Typography,Box,Paper,TextField,Button,Avatar} from '@mui/material';

export default function Form()
{ 
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [description,setDescription]=useState();

    const [productdetails,setProductDetails]=useState([]);
    const [temp,setTemp]=useState("false");
    const [count,setCount] = useState(1);
    const [id,setId]=useState();
  
    const formSubmit=()=>
    {  
        
        if(temp=="false") 
        {
          let details = {id:count,name,price,description};
          setProductDetails([...productdetails,details])
          setCount(count+1) 
         
        }
        else
        {
          let replaceValues = productdetails.filter(findValues => findValues.id !== id)
          let updateValues = {id,name,price,description}
          setProductDetails([...replaceValues,updateValues])
        }
        setTemp("true")
        setId()
        setName("")
        setPrice("")
        setDescription("")
    }
  const remove = (id) =>{
      let deleteValues = productdetails.filter(findValues => findValues.id !== id)
      setProductDetails(deleteValues)
  } 

  const edit = (id) =>{
      let editValues = productdetails.filter(findValues => findValues.id == id)
      setId(editValues[0].id)
      setName(editValues[0].name)
      setPrice(editValues[0].price)
      setDescription(editValues[0].description)

     
  }  
   
    console.log(productdetails);
     return(
      <div>
        <FormControl style={{display:"flex",justifyContent:"center"}}  >
        <Box
        style={{display:"flex",justifyContent:"center"}}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 628,
            height: 428,
          },
        }}
      >
       
        <Paper elevation={3} style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}} >
         <div>
            <Avatar sx={{ bgcolor: deepPurple[500]  }}>KM</Avatar>
        </div>
         <div>
           <TextField  id="outlined-basic" style={{width:"420px"}} label="Product Name" variant="outlined" value={name} onChange={(namedata)=>setName(namedata.target.value)} />
        </div>
        <div>
           <TextField id="outlned-basic" style={{width:"420px"}} label="Product Price" variant="outlined" value={price} onChange={(pricedata)=>setPrice(pricedata.target.value)} />
        </div>
        <div>
           <TextField id="outlined-basic"  multiline rows={4} style={{width:"420px"}} label="Description"  variant="outlined" value={description} onChange={(descriptiondata)=>setDescription(descriptiondata.target.value)} />
        </div>
        <div>
           <Button variant="contained"  onClick={()=>formSubmit()}>Submit</Button>
        </div>

        </Paper>
        
      </Box>
     </FormControl>
        <Box>
          <div>
           {
                productdetails && productdetails.map(Values =>{
                  return(
                  <Card sx={{ maxWidth: 545 }} className='product'>
                        <CardHeader avatar={
                          <Avatar sx={{ bgcolor: deepPurple[500],textAlign:'center'}}>KM</Avatar>

                        }
                        />
                    
                      <CardContent>
                        <Typography gutterBottom variant="h6">Product Name:{Values.name}</Typography>
                        <Typography gutterBottom variant="h6">Product Price:{Values.price}</Typography>
                        <Typography gutterBottom variant="h6">Product Description:{Values.description}</Typography>

                     </CardContent>
                     <CardActions> 
                        <Button size="small"  onClick={() => edit(Values.id)}>Edit</Button>
                        <Button size="small"  onClick={() => remove(Values.id)}>Delete</Button>
                     </CardActions>
                  </Card>
                
                  )
                })
            }
          </div>
        </Box>
    
     </div> 
    );
}