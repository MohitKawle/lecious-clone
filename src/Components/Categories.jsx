import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Image,
  } from '@chakra-ui/react'
  import navMod from "../Components/Navbar.module.css"

import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <>
    <Menu>
  <MenuButton as={Button}  backgroundColor={'white'}
//   rightIcon={<ChevronDownIcon />}
  >
    Catageries
  </MenuButton>
  <MenuList className={navMod.link_flex}>
  <MenuList>
    <MenuItem minH='60px'  width='350px'>
        <Link className={navMod.link_flex} to={'/'} >
        <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/539819fa-f8f5-6148-d407-95522fa17a28/original/Todays-deal21.png"  
              alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Todays deal</span>
        </Link>
     
    </MenuItem>
    <MenuItem minH='40px'>
        <Link className={navMod.link_flex} to={'/chicken'}> <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/479a9750-d9a2-33ff-0693-3044a9dcae91/original/Chicken.png"      
          alt='Simon the pensive'
        mr='12px'
      />
         <span>Chicken</span>
        </Link>
     
     
    </MenuItem>
    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/46494180-ff34-2236-4240-da12222c4d23/original/Fish___Seafood.png"    
            alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Fish &Seafood</span>
        </Link>
     
    </MenuItem>
    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/952cc910-319c-0b5d-fa34-373f05f0917a/original/Mutton.png"
                alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Mutton </span>
        </Link>
     
    </MenuItem>

    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0a8c4f08-15e7-12e5-a696-286cddadf373/original/RTC_(2).png"      
          alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Ready to Cook</span>
        </Link>
     
    </MenuItem>
    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b528b5d9-aae1-8814-99d5-8642e2ee3676/original/Prawns.png"    
            alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Prawns</span>
        </Link>
     
    </MenuItem>
  
    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d08157a7-8828-4978-eb3f-3408cfe7d1f9/original/Venus_(1).png"    
            alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Spreads</span>
        </Link>
     
    </MenuItem>
    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
       boxSize='2.3rem'
       borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/54771c04-5aae-094d-8739-b22d09ab284e/original/Eggs.png"    
            alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Eggs</span>
        </Link>
     
    </MenuItem>
    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
       boxSize='2.3rem'
       borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/8f6c3a69-7867-05d5-9367-ed091bdf3c61/original/hyd-chicken.png"  
              alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Biryani & Kebab</span>
        </Link>
     
    </MenuItem>
    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b8169e6d-59ae-ba6f-f839-ec0883a9742e/original/Combo2.png"        
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Combos</span>
        </Link>
     
    </MenuItem>
    <MenuItem minH='48px'>
        <Link className={navMod.link_flex} to={'/fish'} >
        <Image
        boxSize='2.3rem'
        borderRadius='5px'
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/804e2c47-aa87-e548-8d19-789b1fccb8bb/original/GFD.png"    
            alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Features Collection</span>
        </Link>
     
    </MenuItem>
  </MenuList>
  {/* <MenuList>
    <MenuItem>
    qqq
    </MenuItem>
  </MenuList> */}
  </MenuList>
 
</Menu>
    
    </>
  )
}

export default Categories