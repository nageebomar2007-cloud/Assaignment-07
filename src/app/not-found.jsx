import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-green-50/40 px-4">
            <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
                <div  className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 text-4xl">
                    🧅
                </div>
                <h1  className="mt-6 text-7xl font-extrabold tracking-tight text-green-700">
                     ৪০৪
                </h1>
                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                     পেজটি খুঁজে পাওয়া যায়নি
                </h2>
               <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link className="rounded-xl bg-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-800" href={'/'}>হোম পেজে ফিরুন</Link>
               </div>
            </div>
        </div>
    );
};

export default NotFound;