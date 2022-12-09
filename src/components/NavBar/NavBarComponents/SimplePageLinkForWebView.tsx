import { Link } from "react-router-dom"

function SimplePageLinkForWebView(props: {
    page: any;
    index: number;
}) {
  return (
    <Link
      to={props.index === 0 ? "" : `${props.page.pageName.toLowerCase().replaceAll(" ", "_")}`}
      className="flex items-center
                p-4 pl-4 pr-4 mr-4
                text-white font-medium text-xl hover:text-white/70
                transition-colors duration-200 ease-out"
    >
        <p>
            {props.page.pageName}
        </p>
    </Link>
  )
}

export default SimplePageLinkForWebView