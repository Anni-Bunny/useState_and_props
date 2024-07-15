function Header(props){
   if (props.version === 'ka')
   {
       return(
           <header>
               <h1>ქართული</h1>
           </header>
       )
   } else if (props.version === 'en'){
       return(
           <header>
               <h1>English</h1>
           </header>
       )
   } else {
       return(
           <h1>not found</h1>
       )
   }
}

export default Header;