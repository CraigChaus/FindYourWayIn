
export const Paragraph = (props: any) => {
  return (
      <div className="h-auto" dangerouslySetInnerHTML={{__html: props.content}}></div>
  )
}

export default Paragraph;