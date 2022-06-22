export const Paragraph = (props: any) => {
    return (
        <div
            className="h-auto px-2"
            dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
    );
};

export default Paragraph;
