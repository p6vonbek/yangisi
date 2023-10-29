
import { NextPage } from "next";
import Img from "next/image";
import R from '../public/rasmlar/bg.jpg';
import Basseyn from '../public/rasmlar/uy5.jpg';
import UyCha from '../public/rasmlar/uy3.jpg';
import Uy4 from '../public/rasmlar/uy4.jpg';
import Uy6 from '../public/rasmlar/uy6.jpg';
import Uy7 from '../public/rasmlar/uy7.jpg';
import Uy8 from '../public/rasmlar/uy8.jpg';
import Uy10 from '../public/rasmlar/oshXona.jpg';
import Uy11 from '../public/rasmlar/uybassey.jpg';
import Uy12 from '../public/rasmlar/yotoqHona.jpg';
import Uy9 from '../public/rasmlar/6. rent.jpg';
import UyBasseyn from '../public/rasmlar/footer 1400.jpg';
import Link from "next/link";
import Yordam from '../styles/yordam.module.css'
import Tabl from './Tabl'


const HomePage:NextPage=()=>{

    return(
        <header>
     <div>
           <div>
            <Img className="R" src={R} alt="uy rasmi" style={{width:'100%', height:'900px',}}/>
            <div style={{position:'absolute',zIndex:20,marginTop:'-700px',marginLeft:'200px',color:"white"}}>
                <h1 style={{fontSize:60,}}>Аренда коттеджей и <br /> домов в Казани</h1>
                <h3 style={{fontSize:30,}}>Найдите идеальный вариант сами <br /> или предоставьте это нам</h3>
                <div style={{marginTop:'100px' ,display:'flex', textAlign:'center'}}>
                    <div>
                        <Img src={Uy11} alt="uy11"  style={{width:'160px',height:'120px',border:'3px',borderRadius:'5px'}}/>
                        <div style={{fontSize:18,}}>С бассейном</div>
                    </div>
                    <div>
                    <Img src={Uy10} alt="uy10"  style={{width:'160px',height:'120px',border:'3px',borderRadius:'5px',marginLeft:'25px'}}/>
                        <div style={{fontSize:18,marginLeft:'25px'}}>Семейные и <br /> уютные</div>
                    </div>
                    <div>
                    <Img src={Uy12} alt="uy12"  style={{width:'160px',height:'120px',border:'3px',borderRadius:'5px',marginLeft:'25px'}}/>
                        <div style={{fontSize:18,marginLeft:'25px'}}>Хиты продаж</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:'#51616f'}}>
            <div style={{marginTop:'100px',}}>
                <h1>Popular in the catalog</h1>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{marginTop:'50px', marginLeft:'15px'}}>
            <Img className={Yordam.img} src={Basseyn} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px',height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}>
                <div style={{display:'flex'}}>
                <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div>
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch   😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'50px',marginLeft:'100px'}}>
            <Img className={Yordam.img} src={Uy4} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px',height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}> 
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div> 
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch   😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'50px',marginLeft:'100px'}}>
            <Img className={Yordam.img} src={UyCha} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px', height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}>  
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div>
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch  😎</Link> 
               </button>

                </div>  
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{marginTop:'150px', marginLeft:'15px'}}>
            <Img className={Yordam.img} src={Uy6} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px',height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}> 
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div> 
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch  😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'150px',marginLeft:'100px'}}>
            <Img className={Yordam.img1} src={Uy7} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px',height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}> 
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div> 
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch  😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'150px',marginLeft:'100px', }}>
            <Img className={Yordam.img2} src={Uy8} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px',height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}>
                 <div style={{display:'flex'}}>
                 <h3 >Home information on the pass  ↓</h3>
             <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"40px",color:'white'}}>❤️</Link>
             </div>
 <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
                <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch 😎</Link> 
                </button>
                 </div>  
                </div> 
            </div>
            <div style={{display:'flex',marginLeft:'180px',marginTop:'40px'}}>
                <div>
                    <Img src={Uy8} alt="Uy8" style={{width:'800px',height:'400px'}}/>
                </div>
                <div style={{width:'800px',height:'400px'}}>
                <Img src={Uy8} alt="Uy8" style={{width:'800px',height:'400px'}}/>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{marginTop:'150px', marginLeft:'15px'}}>
            <Img className={Yordam.img} src={Uy6} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px',height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}> 
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div> 
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch  😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'150px',marginLeft:'100px'}}>
            <Img className={Yordam.img1} src={Uy7} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px',height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}> 
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div> 
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch  😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'150px',marginLeft:'100px', }}>
            <Img className={Yordam.img2} src={Uy8} alt="Basseyn" style={{border:'2px solid white',borderRadius:'15px',width:'500px',height:'400px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'90px'}}>
                 <div style={{display:'flex'}}>
                 <h3 >Home information on the pass  ↓</h3>
             <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"40px",color:'white'}}>❤️</Link>
             </div>
 <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
                <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch 😎</Link> 
                </button>
                 </div>  
                </div> 
            </div>
            <div style={{marginTop:'30px'}}>
                <Tabl/>
            </div>
            <div> 
                 <div  style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
                    <Link href={'/Houses'}><button 
                    style={{width:'150px',height:'60px',backgroundColor:'#F4683F',border:'4px solid #F4683F',borderRadius:"10px",color:'white'}}>Go to directory</button></Link>
                </div>
            </div>
            <div>
                <div style={{margin:'100px 0px 0px 150px'}}>
                <h1>We can arrange for you</h1>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{margin:'50px 100px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Catering</button></Link>
                    </div>
                    <div style={{margin:'50px 150px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Visiting chef</button></Link>
                    </div>
                    <div style={{margin:'50px 150px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Buffet</button></Link>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{margin:'50px 100px 50px  150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>
Show program</button></Link>
                    </div>
                    <div style={{margin:'50px 150px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Transfer</button></Link>
                    </div>
                    <div style={{margin:'50px 150px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Turnkey events</button></Link>
                    </div>
                    
                </div>
                <div>
                <div  style={{marginTop:'40px',display:'flex',justifyContent:'center'}}>
                    <Link href={'/Houses'}><button 
                    style={{width:'150px',height:'60px',backgroundColor:'#F4683F',border:'4px solid #F4683F',borderRadius:"10px",color:'white'}}>Learn more</button></Link>
                </div>
                </div>
            </div>
            <div  style={{marginTop:'31px'}}>
                <div>
                    <Img src={Uy9} alt="uy9" style={{width:'100%',height:'600px',marginTop:'70px'}}/>
                    <Img src={UyBasseyn} alt="uy" style={{width:'100%',height:'300px'}}/>
                </div>              
            </div>
            </div>

        </header>
    )
}

export default HomePage

