import React from 'react';

function PageContent({ children })
{
    return (
        <div className="flex-1 p-4 overflow-y-auto">
            {children}
        </div>
    );
}

export default PageContent;