import { useState } from "react"

import NavBarCrossIconMobile from '../SvgComponents/NavBarCrossIconMobile'
import NavBarHamburgerIconMobile from '../SvgComponents/NavBarHamburgerIconMobile'
import DropdownPageLinkForMobileView from './NavBarComponents/DropdownPageLinkForMobileView'
import DropdownPageLinkForWebView from './NavBarComponents/DropdownPageLinkForWebView'
import NavBarContainer from './NavBarComponents/NavBarContainer'
import SimplePageLinkForMobileView from './NavBarComponents/SimplePageLinkForMobileView'
import SimplePageLinkForWebView from './NavBarComponents/SimplePageLinkForWebView'

function NavBar(props: {
  data: any
}) {

  const [mobileNavBar, setMobileNavBar] = useState<boolean>(false);

  return (
    <NavBarContainer>
      <div
        className='w-full h-full
                  lg:flex items-center
                  hidden'
      >
        {
          props.data && props.data.map((page: any, index: number) => (
            <>
              {
                page.subPages.length < 1 ? 
                (
                  <SimplePageLinkForWebView 
                    page={page}
                    index={index}
                    key={index}
                  />
                )
                :
                (
                  <DropdownPageLinkForWebView 
                    page={page}
                    key={index}
                    index={index}
                  />
                )
              }
            </>
          ))
        }
      </div>
      <div
        className='w-full
                  flex items-center
                  lg:hidden'
      >
        <div
          className='w-[62px] h-[62px]
                    ml-auto
                    flex items-center'
        > 
          <div
            className='w-[36px] h-[36px]
                      flex items-center
                      hover:bg-white/10
                      rounded-md
                      p-1
                      cursor-pointer
                      stroke-white'
              onClick={() => setMobileNavBar(true)}
          >
            <NavBarHamburgerIconMobile />
          </div>
        </div>
        {
          mobileNavBar && (
            <div
              className='absolute
                        w-full h-full
                        bg-white
                        top-0 left-0
                        flex flex-col items-center
                        p-2'
            >
              <div
                className='flex items-center ml-auto
                          hover:bg-black/20
                          p-1
                          rounded-md
                          cursor-pointer
                          mb-8'
                onClick={() => setMobileNavBar(false)}
              >
                <NavBarCrossIconMobile />
              </div>
              {
                props.data && props.data.map((page: any, index: number) => (
                  <>
                    {
                      page.subPages.length < 1 ? 
                      (
                        <SimplePageLinkForMobileView 
                          page={page}
                          key={index}
                          index={index}
                          closeMobileNavBarFunction={setMobileNavBar}
                        />
                      )
                      :
                      (
                        <DropdownPageLinkForMobileView 
                          key={index}
                          page={page}
                          index={index}
                          closeMobileNavBarFunction={setMobileNavBar}
                        />
                      )
                    }
                  </>
                ))
              }
        </div>
          )
        }
      </div>
    </NavBarContainer>
  )
}

export default NavBar