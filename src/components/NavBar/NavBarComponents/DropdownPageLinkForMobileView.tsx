import { Link } from "react-router-dom";
import DownArrow from "../../SvgComponents/DownArrow";
import { motion } from "framer-motion";
import { useState } from "react";

function DropdownPageLinkForMobileView(props: {
    page: any;
    index: number;
    closeMobileNavBarFunction: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false)
    const [arrowAngle, setArrowAngle] = useState<number>(0);
    
    function activateDropdown() {
      setArrowAngle(180);
      setDropdownMenu(true);
    }
  
    function deactivateDropdown() {
      setArrowAngle(0);
      setDropdownMenu(false);
    }

    function toggleDropdown() {
        if(dropdownMenu === false) {
            activateDropdown()
        }
        else if(dropdownMenu === true) {
            deactivateDropdown()
        }
    }

    return (
        <div
            className="flex flex-col
                    bg-slate-200
                    w-[80%]
                    text-black font-medium text-xl hover:text-black/70
                    transition-colors duration-200 ease-out
                    relative
                    mb-8"
        >
            <div
                className="w-full
                        flex items-center"
            >
                <Link
                    to={props.index === 0 ? "" : `${props.page.pageName.toLowerCase().replaceAll(" ", "_")}`}
                    className="p-4 pl-4 pr-0
                            hover:bg-slate-300
                            flex-1"
                    onClick={() => props.closeMobileNavBarFunction(false)}
                >
                    {props.page.pageName}
                </Link>
                <div
                    className="w-[62px] h-[62px]
                            flex items-center justify-center
                            stroke-black
                            ml-auto
                            hover:bg-slate-400
                            cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <motion.div
                        animate={{
                            rotate: arrowAngle
                        }}
                        className="flex items-center justify-center
                                  w-full h-full"
                    >
                        <DownArrow />
                    </motion.div>
                </div>
            </div>
            {
                dropdownMenu && (
                    <motion.div
                        className="
                                    left-0
                                    bg-slate-200
                                    w-full
                                    "
                        >
                        {
                            props.page && props.page.subPages.map((subpage: any, index: number) => (
                            <Link
                             // eslint-disable-next-line
                                to={props.index === 0 ? "" : `${props.page.pageName.toLowerCase().replaceAll(" ", "_")}` + "/" + `${subpage.subPageName.toLowerCase().replaceAll(" ", "_")}`}
                                key={index}
                                className="p-4
                                        flex items-center
                                        bg-slate-300/80 hover:bg-slate-400/60"
                                    onClick={() => {
                                        setDropdownMenu(false);
                                        props.closeMobileNavBarFunction(false);
                                    }}
                            >
                                <p>
                                {subpage.subPageName}
                                </p>
                            </Link>
                            ))
                        }
                    </motion.div>
                )
            }   
        </div>
    )
}

export default DropdownPageLinkForMobileView