import { Link } from "react-router-dom";
import DownArrow from "../../SvgComponents/DownArrow";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function DropdownPageLinkForWebView(props: {
  page: any;
  index: number;
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

  return (
    <div
      className="flex items-center
                text-white font-medium text-xl hover:text-white/70
                transition-colors duration-200 ease-out
                relative"
      onMouseEnter={() => activateDropdown()}
      onMouseLeave={() => deactivateDropdown()}
    >
      <Link
        to={props.index === 0 ? "" : `${props.page.pageName.toLowerCase().replaceAll(" ", "_")}`}
        className="p-4 pl-4 pr-0"
      >
        {props.page.pageName}
      </Link>
      <motion.div
        animate={{
          rotate: arrowAngle
        }}
        className="w-[62px] h-[62px]
                  flex items-center justify-center
                  stroke-white"
      >
        <DownArrow />
      </motion.div>
      <AnimatePresence mode="wait">
        {
          dropdownMenu && (
            <motion.div
              initial={{
                top: 40,
                opacity: 0
              }}
              animate={{
                top: 62,
                opacity: 1
              }}
              exit={{
                top: 58,
                opacity: 0
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
              className="absolute
                        left-0
                        bg-[#076ca6]
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
                              text-white
                              bg-[#076ca6] hover:bg-[#075887]"
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
      </AnimatePresence>
    </div>
  )
}

export default DropdownPageLinkForWebView