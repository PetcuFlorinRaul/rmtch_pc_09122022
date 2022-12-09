import parse from "html-react-parser"

function SimplePagePreview(props: {
    page: any
}) {
  return (
    <div
        className='w-full min-h-[85vh]
                  flex flex-col items-center'
    >
      <div
        className='w-[80%] h-full
                  flex flex-col
                  pt-8 pb-8 '
      >
        {parse(props.page.pageContent)}
      </div>
    </div>
  )
}

export default SimplePagePreview