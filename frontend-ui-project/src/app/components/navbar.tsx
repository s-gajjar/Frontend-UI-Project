import React from 'react';

const BriefcaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
        <path
            d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-4 2v10H9V9zm-5-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM4 18v-8a1 1 0 0 1 1-1h2v10H5a1 1 0 0 1-1-1zm16 0a1 1 0 0 1-1 1h-2V9h2a1 1 0 0 1 1 1z"/>
    </svg>
);

const MessageIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="chat-bubble">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path fill="grey"
                  d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H6l-2 2V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path>
        </svg>
    );
};

const PaymentIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100" id="payment">
            <path fill="grey" d="M.002 64.34V100h22.42V64.34zm13.86 29.18a2.65 2.65 0 1 1 2.67-2.65 2.648 2.648 0 0
            1-2.67 2.65zm38.251 1.372H25.75v-25.39l.296-.553a16.453 16.453 0 0 1 7.008-6.603 21.71 21.71
            0 0 1 17.77-.466 52.025 52.025 0 0 1 5.32 2.535c1.418.743 2.758 1.446 4.142 2.031a13.53 13.53
            0 0 0 1.787.519c2.093.516 4.96 1.223 6.139 3.918a11.777 11.777 0 0 1 .753 5.434l12.585-.186
             6.536-7.238a6.838 6.838 0 0 1 10.167 9.146l-9.849 10.99zm-21.358-5.005h20.956l34.147-5.516
             8.668-9.673a1.833 1.833 0 0 0-.232-2.662 1.838 1.838 0 0 0-2.493.212l-7.997
              8.855-30.99.458-.073-5.004 11.208-.166a8.018 8.018 0 0 0-.32-3.5c-.192-.434-1.86-.846-2.755-1.067a16.955
               16.955 0 0 1-2.537-.767c-1.576-.667-3.072-1.451-4.518-2.21a47.565 47.565 0 0 0-4.807-2.301 16.717 16.717
               0 0 0-13.66.247 12.005 12.005 0 0 0-4.597 4.012zM58.938 24.17a15.435 15.435 0 1 0 15.44 15.43
                15.454 15.454 0 0 0-15.44-15.43zM51.27 0h5v18.5h-5zM61.603 5.667h5V18.5h-5z"></path>
        </svg>
    )
}

const BellIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" id="bell">
            <rect width="256" height="256" fill="none"></rect>
            <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"
                  d="M56.20305 104A71.899 71.899 0 0 1 128.5484 32.002c39.58967.29432 71.25651 33.20133 71.25651 72.90185V112c0 35.81563 7.49325 56.59893 14.093 67.95814A7.999 7.999 0 0 1 207.01628 192H48.98365A7.99908 7.99908 0 0 1 42.103 179.95641c6.60328-11.35959 14.1-32.1426 14.1-67.95641zM96 192v8a32 32 0 0 0 64 0v-8">

            </path>
        </svg>
    )
}

const DownArrowIcon = () => {
    return (
        <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 9-7 7-7-7"/>
        </svg>

    )
}
const ApplicationIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="people">
            <g>
                <g>
                    <rect width="24" height="24" opacity="0"></rect>
                    <path fill="grey"
                          d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z">

                    </path>
                </g>
            </g>
        </svg>
    )
}

export const Navbar = () => {
    return (
        <nav className="flex flex-col-3 justify-between items-center border b px-4">
            <div className="mr-8 w-24 h-16 bg-gray-200 flex justify-center items-center">
                <span className="text-red-500 text-lg text-20 font-extrabold">Logo</span>
            </div>
            <div className="flex">
                <div className="ml-40 my-[25.57px] bg-jobs_bg h-[61px]
                        flex justify-center border-2 border-jobs_stroke rounded-full shadow-2xl items-center py-[9px] px-[28px] text-[20px] text-white
                        ">
                    <BriefcaseIcon/>
                    <span className="ml-2">Jobs</span>
                </div>
                <div className="flex rounded-full justify-center items-center  ml-19">
                    <div className="flex border border-grey rounded-full  shadow-inner py-4">
                        <button
                            className="flex justify-center items-center py-2 px-6 rounded-full bg-white text-gray-500 text-lg font-bold">
                            <MessageIcon/>
                            <span className="ml-2">Messages</span>
                        </button>
                        <button
                            className="ml-4 flex justify-center items-center py-2 px-6 rounded-full bg-white text-gray-500 text-lg font-bold">
                            <PaymentIcon/>
                            <span className="ml-2">Payment</span>
                        </button>
                        <button
                            className="ml-4 flex justify-center items-center py-2 px-6 rounded-full bg-white text-gray-500 text-lg font-bold">
                            <ApplicationIcon/>
                            <span className="ml-2">Application</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="mr-4">
                    <BellIcon/>
                </div>
                <div>
                    <img src="https://utfs.io/f/fa81be59-162a-4693-8213-7114985a5579-1qqwnp.png"
                         alt="profile" className="w-8 h-8 rounded-full bg-blue-500"/>
                </div>
                <div className="ml-3">
                    <DownArrowIcon/>
                </div>
            </div>
        </nav>
    );
};
