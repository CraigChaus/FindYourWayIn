import React from 'react';
import Website from '../../public/icons/website.svg';

export const EventInfo = ({ description, website }: any) => {
    return (
        <>
            <div>
                <div className="mt-4 space-y-2  ">
                    <p id='description_content'
                        className="text-left text-sm"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                    <div className="flex pb-4" id='website'>
                        <Website />
                        {website ? (
                            <a href={website}>
                                <p>{website}</p>
                            </a>
                        ) : (
                            <a href={website}>
                                <p>www.no-website-available.com</p>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default EventInfo;
