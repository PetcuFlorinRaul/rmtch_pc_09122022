import { ComponentWithChildrenProps } from '../../../interfaces'

function NavBarContainer(props: ComponentWithChildrenProps) {
  return (
    <div
        className='w-full
                bg-[#054164]
                flex justify-center items-center'
    >
        <div
            className='w-[80%]
                      flex items-center'
        >
            {props.children}
        </div>
    </div>
  )
}

export default NavBarContainer