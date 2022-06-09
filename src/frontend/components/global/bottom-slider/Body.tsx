import React from 'react';

const Body = (props: any) => {
    return (
        <>
            <div className="block m-4">
                <h1 className="text-2xl font-bold">{props.header}</h1>
                <p className="text-base font-semibold">{props.description}</p>
            </div>
        </>
    );
};

export default Body;
