import React from "react";

const PrivacyPolicy = () => {
    return (
        <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 max-sm:my-9'>

            <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-50 text-gray-800 leading-relaxed rounded-[10px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)]">
                <h1 className="font-bold  text-[25px] text-center x-[909px]:text-[20px] max-sm:text-[18px] text-mainBlue">
                    Privacy Policy
                </h1>
                <p className="text-[13px] text-center mb-8 text-gray-500">
                    Last updated: October 27, 2025
                </p>

                <p className="mb-4 text-sm text-justify">
                    Supa Bus (Maitri Bus Sewa) respects your privacy. This app does not collect, store, or
                    share any personal information unless explicitly provided by the user
                    for specific functionality.
                </p>

                <p className="mb-4 text-sm text-justify">
                    Any information voluntarily entered by users (such as contact details or
                    feedback) will be used solely to improve app experience and will never
                    be shared with third parties.
                </p>

                <p className="mb-4 text-sm text-justify">
                    The Supa Bus (Maitri Bus Sewa) app does not use cookies, analytics tools, or
                    third-party tracking systems.
                </p>

                <p className="mb-4 text-sm">
                    For any questions or concerns regarding this Privacy Policy, you can
                    contact us at{" "}
                    <a
                        href="mailto:support@supadeurali.com"
                        className="text-blue-600 underline hover:text-blue-700"
                    >
                        support@supadeurali.com
                    </a>
                    .
                </p>

                <p className="mt-8 font-medium text-center max-sm:text-sm">
                    © {new Date().getFullYear()} Supa Deurali. All rights reserved.
                </p>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
