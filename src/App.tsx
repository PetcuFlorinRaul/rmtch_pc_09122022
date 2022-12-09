import useGetDataWithAxios from "./hooks/useGetDataWithAxios";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import SimplePagePreview from "./components/SimplePagePreview/SimplePagePreview";
import PageWithSupagesPreview from "./components/PageWithSupagesPreview/PageWithSupagesPreview";
import SubPagePreview from "./components/SubPagePreview/SubPagePreview";

function App() {
 // eslint-disable-next-line
  const {getData, data, errors} = useGetDataWithAxios("http://86.124.148.196:5000/pages/get_pages")

  useEffect(() => {
    getData()
     // eslint-disable-next-line
  }, [])
  
  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <div className="font-poppins">
      {errors && console.log(errors)}
      <Router>
        <Routes>
          <Route path="" element={<MainPage data={data} />}>
            {
              data && data.map((page: any, index: number) => (
                  <>
                    {
                      page.subPages.length < 1 && (
                        <Route key={index} path={index === 0 ? "" : `${page.pageName.toLowerCase().replaceAll(" ", "_")}`} element={<SimplePagePreview page={page} />}>

                        </Route>
                      )
                    }
                    {
                      page.subPages.length > 0 && (
                        <Route key={index} path={index === 0 ? "" : `${page.pageName.toLowerCase().replaceAll(" ", "_")}`} element={<PageWithSupagesPreview page={page} />}>
                          {
                            page.subPages && page.subPages.map((subPage: any, index: number) => (
                              <Route key={index} path={`${subPage.subPageName.toLowerCase().replaceAll(" ", "_")}`} element={<SubPagePreview subPage={subPage} />} />
                            ))
                          }
                        </Route>
                      )
                    }
                  </>
              ))
            }
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
