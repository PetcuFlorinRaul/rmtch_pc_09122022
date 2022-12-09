import { Link } from "react-router-dom"

function SimplePageLinkForMobileView(props: {
    page: any;
    index: number;
    closeMobileNavBarFunction: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Link
      to={props.index === 0 ? "" : `${props.page.pageName.toLowerCase().replaceAll(" ", "_")}`}
      className="flex items-center
                p-4 pl-4 pr-4 mb-8
                bg-slate-200 hover:bg-slate-300
                w-[80%]
                text-black font-medium text-xl hover:text-black/70
                transition-colors duration-200 ease-out"
      onClick={() => props.closeMobileNavBarFunction(false)}
    >
        <p>
            {props.page.pageName}
        </p>
    </Link>
  )
}

export default SimplePageLinkForMobileView