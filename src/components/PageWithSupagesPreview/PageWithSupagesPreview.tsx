import { Outlet, Link, useLocation } from "react-router-dom"
import parse from "html-react-parser"

function PageWithSupagesPreview(
    props: {
        page: any
    }
) {

  const location = useLocation();

  const activePage = location.pathname === `/${props.page.pageName.toLowerCase().replaceAll(" ", "_")}`;

  return (
    <div
      className='w-full min-h-[85vh]
                flex flex-col items-center'
    >
      <div
        className='w-[80%] h-full
                  flex flex-col
                  pt-8'
      >
        {
          activePage && (
            <p
              className="font-bold text-4xl text-center"
            >
              {props.page.pageName}
            </p>
          )
        }
        {
          activePage && (
            <div
              className="w-full
                        mt-10
                        flex items-center justify-center"
            >
              <p
                className="font-medium text-xl"
              >
                Also explore the following:
              </p>
            </div>
          )
        }
        {
          activePage && (
            <div
              className="w-full 
                        mt-10
                        flex justify-center"
            >
              {
                props.page.subPages.map((subpage: any, index: number)=> (
                  <Link
                    key={index}
                    to={`${subpage.subPageName.toLowerCase().replaceAll(" ", "_")}`}
                    className="p-1 pl-4 pr-4 mr-8 ml-8
                            bg-[#054164]/0 hover:bg-[#054164]
                            text-[#054164] hover:text-white
                            text-xl font-semibold
                            border-[3px] border-[#054164]
                            rounded-xl"
                  >
                    {subpage.subPageName}
                  </Link>
                ))
              }
            </div>
          )
        }
        {
          activePage && (
            <div
              className='w-[100%] h-full
                        flex flex-col
                        pt-8 pb-8 '
            >
              {parse(props.page.pageContent)}
            </div>
          )
        }
        <Outlet />
      </div>
    </div>
  )
}

export default PageWithSupagesPreview