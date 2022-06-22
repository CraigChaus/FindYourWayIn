export const Paragraph = (props: any) => {
    return (
        <div 
            id="description_content"
            className="h-auto"
            dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
    );
};

export default Paragraph;
