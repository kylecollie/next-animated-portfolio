'use client';

import React from 'react';
import { motion } from 'framer-motion';

function AboutPage()
{
    return (
        <motion.div
            className="h-full"
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll">
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                    {/*  BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY TITLE */}
                        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>

                        {/* BIOGRAPHY DESC */}
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Necessitatibus, eos. Dolore perspiciatis unde
                            quasi optio officia tempora hic totam adipisci quod
                            natus. Numquam possimus perspiciatis perferendis dolores
                            eaque. Culpa quisquam, voluptatibus est aut officia nemo
                            rem sunt, velit animi molestias autem et laudantium a
                            alias nihil.
                        </p>

                        {/* BIOGRAPHY QUOTE */}
                        <span className='italic'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                        </span>

                        {/* BIOGRAPHY SIGN SVG*/}
                        <div className="self-end w-6">
                            <svg width="60" height="49" viewBox="0 0 60 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.8825 43.544C27.7918 43.544 23.3332 42.1147 16.5065 39.256L14.7785 38.488C12.3465 37.464 10.4478 36.696 9.0825 36.184C7.75984 35.672 6.47984 35.2453 5.24251 34.904C5.24251 40.1947 5.11451 43.9067 4.85851 46.04C4.38917 47.7467 3.7705 48.6 3.0025 48.6C2.6185 48.6 2.25584 48.4933 1.91451 48.28C1.61584 48.0667 1.46651 47.7893 1.46651 47.448C1.46651 46.68 1.5305 45.6347 1.6585 44.312C1.9145 41.5813 2.0425 39.2347 2.0425 37.272V34.584C1.61584 34.2853 1.29584 34.0293 1.0825 33.816C0.911838 33.56 0.826505 33.2827 0.826505 32.984C0.826505 32.6 0.933171 32.2587 1.1465 31.96C1.4025 31.6187 1.67984 31.32 1.97851 31.064C2.27717 30.7653 2.4905 30.5307 2.6185 30.36C2.66117 29.464 2.6825 27.9067 2.6825 25.688C2.6825 20.1413 1.89317 14.2747 0.314505 8.088L0.0585046 6.808C0.0585046 6.21067 0.293171 5.74133 0.762505 5.4C1.2745 5.05866 1.8505 4.888 2.4905 4.888C2.95984 4.888 3.42917 5.80533 3.89851 7.64C4.4105 9.47467 4.81584 11.8213 5.1145 14.68C5.41317 17.496 5.5625 20.3333 5.5625 23.192V27.48C6.15984 26.84 7.50384 25.368 9.59451 23.064C11.6852 20.76 13.7332 18.456 15.7385 16.152C19.1092 12.184 21.7118 8.64266 23.5465 5.528C24.0158 4.67466 24.5918 3.56533 25.2745 2.2C25.9145 0.877332 26.3198 0.216 26.4905 0.216C26.9598 0.216 27.1945 0.727999 27.1945 1.752C27.1945 2.98933 27.0025 4.184 26.6185 5.336C26.2345 6.44533 25.6798 7.64 24.9545 8.92C23.7598 11.0107 22.3732 13.08 20.7945 15.128C19.2585 17.1333 17.2958 19.416 14.9065 21.976C14.0105 22.9147 13.2212 23.7253 12.5385 24.408C11.8558 25.0907 11.2585 25.7093 10.7465 26.264C8.52784 28.4827 6.75717 30.3387 5.4345 31.832C5.98917 32.0453 7.26917 32.5147 9.27451 33.24C11.3225 33.9653 13.9678 34.8827 17.2105 35.992C19.5145 36.8027 21.4345 37.464 22.9705 37.976C24.5065 38.4453 25.8292 38.872 26.9385 39.256C27.1945 39.3413 27.4932 39.448 27.8345 39.576C28.1758 39.6613 28.5385 39.768 28.9225 39.896C30.3732 40.3653 31.0985 40.8773 31.0985 41.432C31.0985 41.9867 30.9705 42.4773 30.7145 42.904C30.4585 43.3307 30.1812 43.544 29.8825 43.544ZM58.503 37.848C56.711 40.28 54.3003 42.648 51.271 44.952C48.2417 47.2133 44.9137 48.344 41.287 48.344C37.447 48.344 34.311 47.256 31.879 45.08C29.447 42.8613 28.231 39.5973 28.231 35.288C28.231 32.344 28.743 29.016 29.767 25.304C30.791 21.592 31.9857 18.3707 33.351 15.64C34.759 12.8667 36.3803 10.5627 38.215 8.728C40.0923 6.89333 41.9697 5.976 43.847 5.976C45.6817 5.976 47.0897 6.63733 48.071 7.96C49.095 9.28266 49.607 10.9253 49.607 12.888C49.607 13.6133 49.4577 14.36 49.159 15.128C48.903 15.8533 48.6043 16.472 48.263 16.984C47.9217 17.496 47.6657 17.752 47.495 17.752C47.1537 17.752 46.983 17.56 46.983 17.176C46.983 17.048 47.047 16.7707 47.175 16.344C47.3457 15.8747 47.431 15.4907 47.431 15.192C47.431 14.1253 47.303 13.1227 47.047 12.184C46.8337 11.3733 46.407 10.712 45.767 10.2C45.127 9.64533 44.423 9.368 43.655 9.368C40.583 9.368 37.703 12.3333 35.015 18.264C33.9483 20.6533 33.0523 23.3413 32.327 26.328C31.6017 29.3147 31.239 32.1947 31.239 34.968C31.239 36.888 31.623 38.6373 32.391 40.216C33.2017 41.7947 34.3323 43.0533 35.783 43.992C37.2763 44.9307 39.0043 45.4 40.967 45.4C44.0817 45.4 46.8977 44.6533 49.415 43.16C51.975 41.6667 54.4923 39.7467 56.967 37.4C57.0523 37.3147 57.351 36.8453 57.863 35.992C58.375 35.096 58.759 34.648 59.015 34.648C59.271 34.648 59.4417 34.712 59.527 34.84C59.6123 34.968 59.655 35.2027 59.655 35.544C59.655 35.9707 59.271 36.7387 58.503 37.848Z" fill="#1E1E1E" fillOpacity="0.9" />
                            </svg>
                        </div>
                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: '10px' }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: 'easeInOut',
                            }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M12 6V14"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/*  SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* SKILL TITLE */}
                        <h1 className='font-bold text-2xl'>SKILLS</h1>
                        {/* SKILL LIST */}
                        <div className="flex flex-wrap gap-4">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                TypeScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SCSS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                MongoDb
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                PostgresSQL
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Express.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                GraphQL
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Framer Motion
                            </div>
                        </div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: '10px' }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: 'easeInOut',
                            }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M12 6V14"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/*  EXPERIENCE CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center pb-48">
                        {/* EXPERIENCE TITLE */}
                        <h1 className="font-bold text-2xl">EXPERIENCE</h1>
                        {/* EXPERIENCE LIST */}
                        <div className="">
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">My current employment. Way better than the postion before!</div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">VACU</div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3"></div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden"></div>
            </div>
        </motion.div>
    );
}

export default AboutPage;
