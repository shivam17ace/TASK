import React ,{useState,useEffect} from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";
import { ExternalLink } from 'react-external-link';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
function Data(){
    const [state, setState] = useState([]);
    const [load,setLoad]= useState(false);
    const [noMore,setnoMore] = useState(true);
      const PAGENO=1
    const [page,setPage]= useState(2);
    useEffect(() => {
        setLoad(false);
    const url = `https://api.github.com/repos/neovim/neovim/pulls?page=1&per_page=100`;
    const fetchData = async () => 
    {
            try {
                    const response = await fetch(url);
                    const json = await response.json();
                    setState(json);
                    //const data=  state.push(json);
                    //setState(data);
                    setLoad(true);
                 } 
                  catch (error)
                 {
                     console.log("error", error);
                 }
                };
     fetchData();
}, [page]);
const fetchC = async ()=>{
    const res = await fetch(`https://api.github.com/repos/neovim/neovim/pulls?page=${page}&per_page=100`);
    const data = await res.json();
    return data;
};
const fetchFor = async ()=> {
    const fetchDataa = await fetchC();
    setState([...state,...fetchDataa]);
    if(fetchDataa.length===0 || fetchDataa.lengTh<20){setnoMore(false);}
    
    setPage(page+1);
}

    return(<>
    
    <div id="scrollableDiv">
    <InfiniteScroll
    dataLength={state.length}
    next={fetchFor}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} 
    hasMore={true}
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
  >
      {load ? load:   <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
     open >
    <CircularProgress color="inherit" />
    </Backdrop>}
    <Table>
           <Thead>
           <Tr>
               <Th className="url">URL</Th>
               <Th className="title">Title</Th>
               <Th className="base">Base Branch</Th>
               <Th className="authorb">AuThor Branch</Th>
               <Th className="author">AuThor</Th>
               <Th className="created">Created On</Th>
               <Th className="review">Reviewers</Th>
               <Th className="label">Labels</Th>
           </Tr>
           </Thead>
           <Tbody> 
             { 
                state.map((item,index)=>{
                   return  (<Tr key={index}>
                       <Td className="url"><ExternalLink href={item.html_url}/></Td>
                       <Td className="title">{item.title}</Td>
                       <Td className="base">{item.base.ref}</Td>
                       <Td  className="authorb">{item.author_association}</Td>
                       <Td  className="author">{item.user.login}</Td>
                       <Td className="created">{item.created_at}</Td>
                       <Td className="review">{item.requested_reviewers.map((reviewers) => {return reviewers.login})}</Td>
                       <Td className="label">{item.head.label}</Td>
                       </Tr>); 
               })}
              
           </Tbody>
       </Table>
       </InfiniteScroll>
   </div>
  
    
      
    </>
    );
}
export default Data;
 /* <InfiniteScroll 
           dataLengTh={state.lengTh}
           next = {fetchFor()}
            //scrollThreshold="1100px"
           //next={() => setPage(page + 1)}
           hasMore={true}
           scrollableTarget="scrollableDiv"
           loader={<h3>LOADING..</h3>} */