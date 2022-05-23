let paragraph =  "paragraph here, its should be abble to automatically increase according tot he amount of text it has in it, this is called responsiveness and we gotta make it work. Craig. C";

export const Paragraph = () => {
  return (
      <div className="border-2 h-auto">
        <p>({paragraph})</p>
      </div>
  )
}

export default Paragraph;