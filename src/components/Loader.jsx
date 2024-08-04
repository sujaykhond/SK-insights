import React from 'react';

const Loader = () => {
    return (
        <div>
            <div class="flex flex-row gap-2">
                <div class="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:.7s]"></div>
                <div class="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:.3s]"></div>
                <div class="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:.7s]"></div>
            </div>
        </div>
    );
}

export default Loader;
