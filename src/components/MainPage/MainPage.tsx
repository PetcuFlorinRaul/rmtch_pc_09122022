import NavBar from '../NavBar/NavBar';
import { Outlet } from "react-router-dom"
import LogoBar from '../LogoBar/LogoBar';
import Footer from '../Footer/Footer';

function MainPage(props: {
    data: any;
}) {
  return (
    <div
        className="flex flex-col
                  w-full h-[100vh]
                  overflow-y-auto"
    >
      <LogoBar />
      <NavBar 
        data={ props.data }
      />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainPage