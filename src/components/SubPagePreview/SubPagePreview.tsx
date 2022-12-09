import parse from "html-react-parser"

function SubPagePreview(props: {
    subPage: any
}) {
  return (
    <div
        className='w-full min-h-[85vh]
                  flex flex-col items-center'
    >
      <div
        className='w-full h-full
                  flex flex-col
                  pt-8 pb-8 '
      >
        {parse(props.subPage.subPageContent)}
      </div>
    </div>
  )
}

export default SubPagePreview